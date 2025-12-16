import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  siteLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' }
  ];

  products = [
    { name: 'Comet 71 LT Diaphragm Pump', id: 'diaphragm-pump' },
    { name: 'Orion Brass Controller', id: 'orion-controller' },
    { name: 'VDR 50 Controller', id: 'vdr-controller' },
    { name: 'Volvolmeccanica Gun', id: 'volvolmeccanica-gun' },
    { name: 'Grease Free Piston Pump', id: 'piston-pump' },
    { name: 'Italian Spray Gun', id: 'italian-gun' }
  ];
}
