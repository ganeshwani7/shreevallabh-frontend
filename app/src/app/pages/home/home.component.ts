import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sliderImages = [
    '/shreevallabh/assets/images/slider/shree-vallabh-nozzle-banner.jpg',
    '/shreevallabh/assets/images/slider/volvolmeccanica-nozzle.jpg',
    '/shreevallabh/assets/images/slider/slide1_3.jpg',
    '/shreevallabh/assets/images/slider/slide1_2.jpg',
    '/shreevallabh/assets/images/slider/slide1_4.jpg'
  ];
  currentSlide = 0;

  constructor() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
    }, 4000);
  }

  sprayers = [
    { title: 'Mounted Sprayer', image: '/shreevallabh/assets/images/services/200lit_mounted1.jpg', description: '200 Litre Mounted Sprayers for efficient crop spraying' },
    { title: 'Trailed Sprayer', image: '/shreevallabh/assets/images/services/Citrus-Plus1.jpg', description: 'High capacity trailed sprayers for large farms' },
    { title: 'Battery Operated Knapsack', image: '/shreevallabh/assets/images/services/knapsack-sprayer02.jpg', description: 'Portable battery operated sprayers for small areas' }
  ];

  equipment = [
    { title: 'Comet 71 LT Diaphragm Pump', image: '/shreevallabh/assets/images/services/special1.jpg' },
    { title: 'Orion Brass Controller', image: '/shreevallabh/assets/images/services/special2.jpg' },
    { title: 'Volvolmeccanica Gun', image: '/shreevallabh/assets/images/services/special3.jpg' },
    { title: 'VDR 50 Controller', image: '/shreevallabh/assets/images/services/special4.jpg' },
    { title: 'Pressure Meter', image: '/shreevallabh/assets/images/services/special5.jpg' },
    { title: 'Sprayer Tank Accessories', image: '/shreevallabh/assets/images/services/special6.jpg' },
    { title: 'Italian Spray Gun', image: '/shreevallabh/assets/images/services/special7.jpg' },
    { title: 'Brass Filter', image: '/shreevallabh/assets/images/services/special8.jpg' }
  ];

  features = [
    { icon: 'groups', title: 'Social Responsibility', description: 'Committed to building safe environments where our team members and customers work.' },
    { icon: 'diversity_3', title: 'Diversity', description: 'We see diversity and inclusion as fundamental to creativity, innovation and productivity.' },
    { icon: 'build', title: 'Custom Solutions', description: 'Customization and customer-focused product solutions is at the core of our mission.' },
    { icon: 'school', title: 'Technical Education', description: 'We provide technical education to customers to operate agricultural equipment safely.' },
    { icon: 'search', title: 'Research & Development', description: 'Our mission is to understand the needs of the market and customers.' },
    { icon: 'verified', title: 'Quality Assurance', description: 'Committed to product guarantee and stable supply chain management.' }
  ];
}
