import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Shree Vallabh Agency | Agricultural Sprayers & Equipment in Nashik'
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Shree Vallabh Agency - Since 2014'
  },
  { 
    path: 'products', 
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    title: 'Products | Agricultural Sprayers & Pumps | Shree Vallabh Agency'
  },
  { 
    path: 'products/mounted', 
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), 
    data: { category: 'mounted' },
    title: 'Mounted Sprayers | Shree Vallabh Agency'
  },
  { 
    path: 'products/trailed', 
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), 
    data: { category: 'trailed' },
    title: 'Trailed Sprayers | Shree Vallabh Agency'
  },
  { 
    path: 'products/knapsack', 
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), 
    data: { category: 'knapsack' },
    title: 'Knapsack Sprayers | Shree Vallabh Agency'
  },
  { 
    path: 'product/:id', 
    loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    title: 'Product Details | Shree Vallabh Agency'
  },
  { 
    path: 'equipment', 
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent), 
    data: { category: 'equipment' },
    title: 'Special Equipment | Comet Pumps & Accessories | Shree Vallabh Agency'
  },
  { 
    path: 'gallery', 
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Gallery | Shree Vallabh Agency'
  },
  { 
    path: 'videos', 
    loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent),
    title: 'Videos | Shree Vallabh Agency'
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Shree Vallabh Agency Nashik'
  },
  { path: '**', redirectTo: '' }
];
