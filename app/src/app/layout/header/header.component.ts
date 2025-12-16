import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About Us', exact: false },
    { path: '/products', label: 'Sprayers', exact: false, hasDropdown: true, children: [
      { path: '/products/mounted', label: 'Mounted Sprayers' },
      { path: '/products/trailed', label: 'Trailed Sprayers' },
      { path: '/products/knapsack', label: 'Battery Operated Knapsack' }
    ]},
    { path: '/equipment', label: 'Special Equipment', exact: false },
    { path: '/gallery', label: 'Gallery', exact: false },
    { path: '/videos', label: 'Videos', exact: false },
    { path: '/contact', label: 'Contact Us', exact: false }
  ];

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
