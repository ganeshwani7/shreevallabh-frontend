import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SPRAYERS, EQUIPMENT, NOZZLES, ACCESSORIES } from '../../config/products.config';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatTabsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // Import products from config
  sprayers = SPRAYERS;
  equipment = EQUIPMENT;
  nozzles = NOZZLES;
  accessories = ACCESSORIES;
}
