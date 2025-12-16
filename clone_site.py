from __future__ import annotations

import os
import re
import json
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
    "User-Agent": "Mozilla/5.0 (compatible; StaticMirrorBot/1.0)",
    # Some hosts block asset downloads without Referer; we also set per-request for assets
    "Accept": "*/*",
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
        path = path[:-4]

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


def download_binary(url: str, referer: str | None = None) -> bytes | None:
    try:
        headers = {}
        if referer:
            headers["Referer"] = referer
        r = session.get(url, timeout=TIMEOUT, headers=headers, allow_redirects=True)
        if r.status_code == 200:
            return r.content
        # helpful debug
        # print(f"ASSET FAIL {r.status_code}: {url}")
    except Exception:
        return None
    return None


def write_file(rel_path: str, content: bytes):
    abs_path = ensure_dir_for_file(rel_path)
    with open(abs_path, "wb") as f:
        f.write(content)


def relpath_web(from_dir: str, to_path: str) -> str:
    from_dir = from_dir.replace("\\", "/").strip("/")
    to_path = to_path.replace("\\", "/").strip("/")
    if not from_dir:
        return to_path
    from_parts = [p for p in from_dir.split("/") if p]
    to_parts = [p for p in to_path.split("/") if p]
    i = 0
    while i < min(len(from_parts), len(to_parts)) and from_parts[i] == to_parts[i]:
        i += 1
    up = [".."] * (len(from_parts) - i)
    down = to_parts[i:]
    return "/".join(up + down) if (up + down) else "."


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
    urls = []
    for m in re.finditer(r"url\(([^)]+)\)", css_text, flags=re.IGNORECASE):
        raw = m.group(1).strip().strip('\'"')
        if raw.startswith(("data:", "mailto:", "tel:", "javascript:")):
            continue
        full = normalize_url(urljoin(base_url, raw))
        if is_same_site(full):
            urls.append(full)
    return urls


def parse_srcset(srcset_value: str) -> list[str]:
    # "img1.jpg 1x, img2.jpg 2x" or "img 400w"
    out = []
    for part in srcset_value.split(","):
        part = part.strip()
        if not part:
            continue
        url_part = part.split()[0].strip()
        if url_part:
            out.append(url_part)
    return out


def collect_asset_urls_from_tag(tag, page_url: str) -> list[str]:
    """
    Collect assets from:
      - src, href
      - lazy attrs: data-src, data-lazy-src, data-original, data-srcset, data-lazy-srcset
      - srcset
      - inline style background-image url(...)
    """
    urls: list[str] = []

    # Normal
    if tag.has_attr("src"):
        urls.append(tag.get("src"))
    if tag.name == "link" and tag.has_attr("href"):
        urls.append(tag.get("href"))

    # Lazy variants
    for a in ["data-src", "data-lazy-src", "data-original", "data-bg", "data-background"]:
        if tag.has_attr(a):
            urls.append(tag.get(a))

    # srcset variants
    for a in ["srcset", "data-srcset", "data-lazy-srcset"]:
        if tag.has_attr(a):
            urls.extend(parse_srcset(tag.get(a, "")))

    # inline style url(...)
    if tag.has_attr("style"):
        style = tag.get("style", "")
        for m in re.finditer(r"url\(([^)]+)\)", style, flags=re.IGNORECASE):
            raw = m.group(1).strip().strip('\'"')
            if raw and not raw.startswith("data:"):
                urls.append(raw)

    fulls: list[str] = []
    for u in urls:
        if not u:
            continue
        if u.startswith(("mailto:", "tel:", "javascript:", "data:")):
            continue
        full = normalize_url(urljoin(page_url, u))
        fulls.append(full)
    return fulls


def rewrite_attr_url(tag, attr: str, page_url: str, page_html_rel: str, asset_map: dict) -> None:
    """
    Rewrite a single attribute URL to local relative.
    - For <a href> treat as page
    - For others treat as asset
    """
    val = tag.get(attr)
    if not val:
        return
    if val.startswith(("mailto:", "tel:", "javascript:", "data:")):
        return

    full = normalize_url(urljoin(page_url, val))
    if not is_same_site(full):
        return

    page_dir = os.path.dirname(page_html_rel)

    # Page links
    if attr == "href" and tag.name == "a":
        local = safe_rel_path_from_url(full)
        tag[attr] = relpath_web(page_dir, local)
        return

    # Asset links
    local_asset = asset_map.get(full) or safe_asset_path(full)
    asset_map.setdefault(full, local_asset)
    tag[attr] = relpath_web(page_dir, local_asset)


def rewrite_style_urls(style_text: str, base_url: str, page_dir: str, asset_map: dict) -> str:
    """
    Rewrite url(...) inside inline style to local.
    """
    def repl(m):
        raw = m.group(1).strip().strip('\'"')
        if raw.startswith(("data:", "mailto:", "tel:", "javascript:")):
            return m.group(0)
        full = normalize_url(urljoin(base_url, raw))
        if not is_same_site(full):
            return m.group(0)
        local = asset_map.get(full) or safe_asset_path(full)
        asset_map.setdefault(full, local)
        return f"url({relpath_web(page_dir, local)})"

    return re.sub(r"url\(([^)]+)\)", repl, style_text, flags=re.IGNORECASE)


def mirror():
    page_map: dict[str, str] = {}   # page_url -> local_html_path
    asset_map: dict[str, str] = {}  # asset_url -> local_asset_path

    q = deque()
    seen_pages = set()

    start = normalize_url(START_URL)
    q.append(start)
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
        page_dir = os.path.dirname(local_html)

        try:
            r = session.get(page_url, timeout=TIMEOUT, allow_redirects=True)
            if r.status_code != 200:
                continue
            ctype = r.headers.get("Content-Type", "")
            # Some servers don't set perfectly; accept if it "looks like HTML"
            if "text/html" not in ctype and "<html" not in (r.text[:500].lower()):
                continue
            html = r.text
        except Exception:
            continue

        soup = BeautifulSoup(html, "html.parser")

        # Queue internal links
        for a in soup.find_all("a", href=True):
            href = a.get("href")
            if not href or href.startswith(("mailto:", "tel:", "javascript:", "#")):
                continue
            full = normalize_url(urljoin(page_url, href))
            if not is_same_site(full):
                continue
            if full not in page_map:
                page_map[full] = safe_rel_path_from_url(full)
            if full not in seen_pages:
                q.append(full)

        # Collect assets from many patterns
        for tag in soup.find_all(True):
            # Assets from attributes & inline style
            for full in collect_asset_urls_from_tag(tag, page_url):
                if is_same_site(full):
                    asset_map.setdefault(full, safe_asset_path(full))

        # Rewrite URLs in HTML to local paths
        for tag in soup.find_all(True):
            if tag.name == "a" and tag.has_attr("href"):
                rewrite_attr_url(tag, "href", page_url, local_html, asset_map)
            if tag.has_attr("src"):
                rewrite_attr_url(tag, "src", page_url, local_html, asset_map)
            if tag.name == "link" and tag.has_attr("href"):
                rewrite_attr_url(tag, "href", page_url, local_html, asset_map)

            # rewrite lazy attrs too (so browser can load local)
            for a in ["data-src", "data-lazy-src", "data-original", "data-bg", "data-background"]:
                if tag.has_attr(a):
                    rewrite_attr_url(tag, a, page_url, local_html, asset_map)

            for a in ["srcset", "data-srcset", "data-lazy-srcset"]:
                if tag.has_attr(a):
                    items = parse_srcset(tag.get(a, ""))
                    rewritten = []
                    for item in items:
                        full = normalize_url(urljoin(page_url, item))
                        if is_same_site(full):
                            local = asset_map.get(full) or safe_asset_path(full)
                            asset_map.setdefault(full, local)
                            rewritten.append(relpath_web(page_dir, local))
                        else:
                            rewritten.append(item)
                    # keep descriptors if present (simple approach: drop them)
                    tag[a] = ", ".join(rewritten)

            if tag.has_attr("style"):
                tag["style"] = rewrite_style_urls(tag["style"], page_url, page_dir, asset_map)

        # Write HTML page
        out_html_bytes = soup.prettify("utf-8")
        write_file(local_html, out_html_bytes)

        # Download assets (best-effort) and fix CSS url(...)
        # Iterate over a snapshot because asset_map can grow when parsing CSS
        for asset_url, rel_path in list(asset_map.items()):
            if asset_url in downloaded_assets:
                continue
            downloaded_assets.add(asset_url)

            content = download_binary(asset_url, referer=page_url)
            if content is None:
                continue

            # Detect CSS without relying on HEAD
            url_no_q = asset_url.split("?", 1)[0].lower()
            is_css = url_no_q.endswith(".css")

            if is_css:
                css_text = content.decode("utf-8", errors="ignore")

                # Discover nested assets referenced by url(...)
                nested = extract_css_urls(css_text, asset_url)
                for u in nested:
                    if is_same_site(u):
                        asset_map.setdefault(u, safe_asset_path(u))

                # Rewrite url(...) to local relative paths
                def repl(m):
                    raw = m.group(1).strip().strip('\'"')
                    if raw.startswith(("data:", "mailto:", "tel:", "javascript:")):
                        return m.group(0)
                    full = normalize_url(urljoin(asset_url, raw))
                    if not is_same_site(full):
                        return m.group(0)
                    local = asset_map.get(full) or safe_asset_path(full)
                    asset_map.setdefault(full, local)
                    return f"url({relpath_web(os.path.dirname(rel_path), local)})"

                css_text2 = re.sub(r"url\(([^)]+)\)", repl, css_text, flags=re.IGNORECASE)
                content = css_text2.encode("utf-8")

            write_file(rel_path, content)

        pbar.total = len(seen_pages) + len(q)
        pbar.n = len(seen_pages)
        pbar.refresh()

    pbar.close()

    write_file("mirror_map_pages.json", json.dumps(page_map, indent=2, ensure_ascii=False).encode("utf-8"))
    write_file("mirror_map_assets.json", json.dumps(asset_map, indent=2, ensure_ascii=False).encode("utf-8"))


if __name__ == "__main__":
    mirror()
    print(f"\nDone. Static site generated in ./{OUT_DIR}")
    print("Next: push ./docs to GitHub and enable Pages (Settings → Pages → Deploy from /docs).")