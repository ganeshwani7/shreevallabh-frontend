import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SPRAYERS, EQUIPMENT } from '../../config/products.config';
import { HOME_PAGE, FEATURES } from '../../config/site.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Import from config
  homeConfig = HOME_PAGE;
  sliderImages = HOME_PAGE.sliderImages;
  features = FEATURES;
  
  // Products from config with links
  sprayers = [
    {
      title: 'Mounted Sprayers',
      image: SPRAYERS[0].image,
      description: 'Tractor-mounted sprayers for efficient crop spraying operations',
      link: '/products/mounted'
    },
    {
      title: 'Trailed Sprayers',
      image: SPRAYERS[1].image,
      description: 'High-capacity trailed sprayers for large orchards and vineyards',
      link: '/products/trailed'
    },
    {
      title: 'Knapsack Sprayers',
      image: SPRAYERS[2].image,
      description: 'Portable battery-powered sprayers for small areas',
      link: '/products/knapsack'
    }
  ];
  
  equipment = EQUIPMENT.slice(0, 8).map(e => ({
    id: e.id,
    title: e.title,
    image: e.image
  }));

  currentSlide = 0;

  constructor() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
    }, 5000);
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.sliderImages.length - 1 
      : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }
}
