import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'products', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'products/mounted', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), data: { category: 'mounted' } },
  { path: 'products/trailed', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), data: { category: 'trailed' } },
  { path: 'products/knapsack', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), data: { category: 'knapsack' } },
  { path: 'product/:id', loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'equipment', loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), data: { category: 'equipment' } },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'videos', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent), data: { type: 'videos' } },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
