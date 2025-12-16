import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  galleryItems = [
    { title: 'Sprayer Installation', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/25.jpg' },
    { title: 'Vineyard Spraying', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/26.jpg' },
    { title: 'Mounted Sprayer Setup', category: 'Sprayers', image: '/shreevallabh/assets/images/gallery/13.jpg' },
    { title: 'Tractor Sprayer', category: 'Sprayers', image: '/shreevallabh/assets/images/gallery/14.jpg' },
    { title: 'Field Demonstration', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/15.jpg' },
    { title: 'Orchard Spraying', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/16.jpg' },
    { title: 'Equipment Display', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/17.jpg' },
    { title: 'Sprayer Components', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/18.jpg' },
    { title: 'Customer Installation', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/19.jpg' },
    { title: 'Grape Vineyard', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/20.jpg' },
    { title: 'Trailed Sprayer', category: 'Sprayers', image: '/shreevallabh/assets/images/gallery/27.jpg' },
    { title: 'Air Blast Sprayer', category: 'Sprayers', image: '/shreevallabh/assets/images/gallery/28.jpg' },
    { title: 'Pomegranate Farm', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/29.jpg' },
    { title: 'Sprayer in Action', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/30.jpg' },
    { title: 'Farm Equipment', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/31.jpg' },
    { title: 'Nozzle Assembly', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/32.jpg' },
    { title: 'Warehouse Stock', category: 'Facility', image: '/shreevallabh/assets/images/gallery/33.jpg' },
    { title: 'Product Display', category: 'Facility', image: '/shreevallabh/assets/images/gallery/34.jpg' },
    { title: 'Sprayer Parts', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/35.jpg' },
    { title: 'Italian Equipment', category: 'Equipment', image: '/shreevallabh/assets/images/gallery/36.jpg' },
    { title: 'Customer Demo', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/38.jpg' },
    { title: 'Team at Work', category: 'Facility', image: '/shreevallabh/assets/images/gallery/39.jpg' },
    { title: 'Sprayer Testing', category: 'Field Work', image: '/shreevallabh/assets/images/gallery/40.jpg' },
    { title: 'Quality Check', category: 'Facility', image: '/shreevallabh/assets/images/gallery/41.jpg' }
  ];
}
