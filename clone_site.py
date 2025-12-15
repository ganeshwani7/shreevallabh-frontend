from __future__ import annotations

import os
import re
import hashlib
from collections import deque
from urllib.parse import urljoin, urlparse, urldefrag, unquote

import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

START_URL = "https://www.shreevallabhagency.com/"
OUT_DIR = "docs"  # GitHub Pages can serve from /docs on main branch
MAX_PAGES = 5000  # safety cap

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; StaticMirrorBot/1.0)"
}
TIMEOUT = 20

session = requests.Session()
session.headers.update(HEADERS)

start_parsed = urlparse(START_URL)
BASE_SCHEME = start_parsed.scheme
BASE_NETLOC = start_parsed.netloc

os.makedirs(OUT_DIR, exist_ok=True)

def is_same_site(u: str) -> bool:
    p = urlparse(u)
    return (p.scheme in ("http", "https") and p.netloc == BASE_NETLOC) or (p.netloc == "")

def normalize_url(u: str) -> str:
    # Remove fragments, normalize scheme/netloc, keep query (some sites use it)
    u, _frag = urldefrag(u)
    if not u:
        return u
    p = urlparse(u)
    scheme = p.scheme or BASE_SCHEME
    netloc = p.netloc or BASE_NETLOC
    # Normalize path
    path = p.path or "/"
    return f"{scheme}://{netloc}{path}" + (f"?{p.query}" if p.query else "")

def safe_rel_path_from_url(u: str) -> str:
    """
    Convert a URL to a local file path under OUT_DIR.
    - / -> index.html
    - /about -> about/index.html
    - /foo/bar -> foo/bar/index.html
    - /x.html -> x.html
    - /contact.php -> contact/index.html   (strip .php for pretty URLs)
    Query strings are hashed into filename to avoid collisions.
    """
    p = urlparse(u)
    path = unquote(p.path or "/")
    query = p.query or ""

    if path.endswith("/"):
        path = path[:-1]
    if path == "":
        path = "/"

    # Strip .php pages into pretty folders
    if path.lower().endswith(".php"):
        path = path[:-4]  # remove ".php"

    _, ext = os.path.splitext(path)

    # If looks like a real file with extension, keep it (css/js/png/pdf/etc)
    if ext and ext.lower() not in (".html",):
        local_path = path.lstrip("/")
    else:
        if path == "/":
            local_path = "index.html"
        else:
            local_path = f"{path.lstrip('/')}/index.html"

    if query:
        h = hashlib.sha1(query.encode("utf-8")).hexdigest()[:10]
        base, ext2 = os.path.splitext(local_path)
        local_path = f"{base}__q{h}{ext2 or '.html'}"

    return local_path.replace("\\", "/")

def ensure_dir_for_file(rel_path: str):
    abs_path = os.path.join(OUT_DIR, rel_path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    return abs_path

def download_binary(url: str) -> bytes | None:
    try:
        r = session.get(url, timeout=TIMEOUT)
        if r.status_code == 200:
            return r.content
    except Exception:
        return None
    return None

def write_file(rel_path: str, content: bytes):
    abs_path = ensure_dir_for_file(rel_path)
    with open(abs_path, "wb") as f:
        f.write(content)

def rewrite_attr_url(tag, attr: str, page_url: str, asset_map: dict) -> None:
    val = tag.get(attr)
    if not val:
        return
    # Skip mailto/tel/javascript/data
    if val.startswith(("mailto:", "tel:", "javascript:", "data:")):
        return

    full = normalize_url(urljoin(page_url, val))
    if not is_same_site(full):
        # external link: keep as-is
        return

    # If this is a page URL, convert to local HTML path
    if attr == "href" and tag.name == "a":
        local = safe_rel_path_from_url(full)
        # Link from current page location (relative)
        tag[attr] = relpath_web(os.path.dirname(asset_map[page_url]), local) if page_url in asset_map else local
        return

    # Otherwise treat as asset (img/script/link)
    local_asset = safe_asset_path(full)
    asset_map.setdefault(full, local_asset)
    tag[attr] = relpath_web(os.path.dirname(asset_map[page_url]), local_asset) if page_url in asset_map else local_asset

def relpath_web(from_dir: str, to_path: str) -> str:
    # from_dir and to_path are posix-like relative paths
    from_dir = from_dir.replace("\\", "/").strip("/")
    to_path = to_path.replace("\\", "/").strip("/")
    if not from_dir:
        return to_path
    # Compute posix relative path
    from_parts = [p for p in from_dir.split("/") if p]
    to_parts = [p for p in to_path.split("/") if p]
    # find common prefix
    i = 0
    while i < min(len(from_parts), len(to_parts)) and from_parts[i] == to_parts[i]:
        i += 1
    up = [".."] * (len(from_parts) - i)
    down = to_parts[i:]
    rel = "/".join(up + down) if (up + down) else "."
    return rel

def safe_asset_path(asset_url: str) -> str:
    """
    Store assets under assets/ preserving extension; hash full URL for uniqueness.
    """
    p = urlparse(asset_url)
    path = p.path
    _, ext = os.path.splitext(path)
    ext = ext if ext else ".bin"
    h = hashlib.sha1(asset_url.encode("utf-8")).hexdigest()[:16]
    return f"assets/{h}{ext.lower()}"

def extract_css_urls(css_text: str, base_url: str) -> list[str]:
    # Find url(...) in CSS
    urls = []
    for m in re.finditer(r'url\(([^)]+)\)', css_text, flags=re.IGNORECASE):
        raw = m.group(1).strip().strip('\'"')
        if raw.startswith(("data:", "mailto:", "tel:", "javascript:")):
            continue
        full = normalize_url(urljoin(base_url, raw))
        if is_same_site(full):
            urls.append(full)
    return urls

def mirror():
    page_map = {}   # page_url -> local_html_path
    asset_map = {}  # asset_url -> local_asset_path

    q = deque()
    seen_pages = set()

    start = normalize_url(START_URL)
    q.append(start)

    # Pre-register start page
    page_map[start] = safe_rel_path_from_url(start)

    downloaded_assets = set()

    pbar = tqdm(total=0, unit="page")
    pages_processed = 0

    while q and pages_processed < MAX_PAGES:
        page_url = q.popleft()
        if page_url in seen_pages:
            continue
        seen_pages.add(page_url)
        pages_processed += 1

        local_html = safe_rel_path_from_url(page_url)
        page_map[page_url] = local_html

        try:
            r = session.get(page_url, timeout=TIMEOUT)
            if r.status_code != 200 or "text/html" not in r.headers.get("Content-Type", ""):
                continue
            html = r.text
        except Exception:
            continue

        soup = BeautifulSoup(html, "html.parser")

        # Rewrite & collect links
        for a in soup.find_all("a", href=True):
            href = a.get("href")
            if not href:
                continue
            if href.startswith(("mailto:", "tel:", "javascript:", "#")):
                continue
            full = normalize_url(urljoin(page_url, href))
            if not is_same_site(full):
                continue
            # queue pages
            if full not in page_map:
                page_map[full] = safe_rel_path_from_url(full)
            if full not in seen_pages:
                q.append(full)

        # Collect assets referenced in HTML tags
        # <img src>, <script src>, <link href> (css), <source src/srcset>
        for img in soup.find_all(["img", "script"], src=True):
            src = img.get("src")
            if src and not src.startswith(("data:", "javascript:")):
                full = normalize_url(urljoin(page_url, src))
                if is_same_site(full):
                    asset_map.setdefault(full, safe_asset_path(full))

        for link in soup.find_all("link", href=True):
            href = link.get("href")
            if href and not href.startswith(("data:", "javascript:")):
                full = normalize_url(urljoin(page_url, href))
                if is_same_site(full):
                    asset_map.setdefault(full, safe_asset_path(full))

        for source in soup.find_all(["source"], src=True):
            src = source.get("src")
            if src:
                full = normalize_url(urljoin(page_url, src))
                if is_same_site(full):
                    asset_map.setdefault(full, safe_asset_path(full))

        # Rewrite URLs in the HTML itself to local relative paths
        # Ensure page itself is registered so relpath works
        asset_map.setdefault(page_url, local_html)

        # Rewrite tag attributes
        for tag in soup.find_all(True):
            if tag.name == "a" and tag.has_attr("href"):
                rewrite_attr_url(tag, "href", page_url, asset_map)
            if tag.has_attr("src"):
                rewrite_attr_url(tag, "src", page_url, asset_map)
            if tag.name == "link" and tag.has_attr("href"):
                rewrite_attr_url(tag, "href", page_url, asset_map)

        # Write HTML page
        out_html_bytes = soup.prettify("utf-8")
        write_file(local_html, out_html_bytes)

        # Download assets (best-effort)
        for asset_url, rel_path in list(asset_map.items()):
            if asset_url == page_url:
                continue
            if asset_url in downloaded_assets:
                continue
            downloaded_assets.add(asset_url)

            content = download_binary(asset_url)
            if content is None:
                continue

            # If CSS, also fetch nested assets referenced by url(...)
            ctype = ""
            try:
                head = session.head(asset_url, timeout=TIMEOUT, allow_redirects=True)
                ctype = head.headers.get("Content-Type", "")
            except Exception:
                pass

            if rel_path.lower().endswith(".css") or "text/css" in ctype:
                try:
                    css_text = content.decode("utf-8", errors="ignore")
                    nested = extract_css_urls(css_text, asset_url)
                    for u in nested:
                        asset_map.setdefault(u, safe_asset_path(u))
                except Exception:
                    pass

            write_file(rel_path, content)

        pbar.total = len(seen_pages) + len(q)
        pbar.n = len(seen_pages)
        pbar.refresh()

    pbar.close()

    # Save maps for reference
    write_file("mirror_map_pages.json", str.encode(json_dump(page_map)))
    write_file("mirror_map_assets.json", str.encode(json_dump(asset_map)))

def json_dump(obj) -> str:
    import json
    return json.dumps(obj, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    mirror()
    print(f"\nDone. Static site generated in ./{OUT_DIR}")
    print("Next: push ./docs to GitHub and enable Pages (Settings → Pages → Deploy from /docs).")