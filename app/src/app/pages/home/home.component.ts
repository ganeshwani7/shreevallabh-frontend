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
  
  // Products from config
  sprayers = SPRAYERS.map(s => ({
    title: s.title,
    image: s.image,
    description: s.description.substring(0, 60) + '...'
  }));
  
  equipment = EQUIPMENT.slice(0, 8).map(e => ({
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
