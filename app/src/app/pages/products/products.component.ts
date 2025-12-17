import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SPRAYERS, EQUIPMENT, NOZZLES, ACCESSORIES, MOUNTED_SPRAYERS, TRAILED_SPRAYERS, KNAPSACK_SPRAYERS } from '../../config/products.config';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatTabsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  // Import products from config
  sprayers = SPRAYERS;
  mountedSprayers = MOUNTED_SPRAYERS;
  trailedSprayers = TRAILED_SPRAYERS;
  knapsackSprayers = KNAPSACK_SPRAYERS;
  equipment = EQUIPMENT;
  nozzles = NOZZLES;
  accessories = ACCESSORIES;
  
  // Current category filter
  currentCategory: string = '';
  pageTitle: string = 'Our Products';
  pageSubtitle: string = 'Browse our complete range of agricultural sprayers and equipment';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.currentCategory = data['category'] || '';
      this.updatePageInfo();
    });
  }

  updatePageInfo() {
    switch(this.currentCategory) {
      case 'mounted':
        this.pageTitle = 'Mounted Sprayers';
        this.pageSubtitle = 'Tractor-mounted sprayers for efficient crop spraying operations';
        this.sprayers = MOUNTED_SPRAYERS;
        break;
      case 'trailed':
        this.pageTitle = 'Trailed Sprayers';
        this.pageSubtitle = 'High-capacity trailed sprayers for large orchards and vineyards';
        this.sprayers = TRAILED_SPRAYERS;
        break;
      case 'knapsack':
        this.pageTitle = 'Battery Operated Knapsack';
        this.pageSubtitle = 'Portable battery-powered sprayers for small areas and precision spraying';
        this.sprayers = KNAPSACK_SPRAYERS;
        break;
      case 'equipment':
        this.pageTitle = 'Special Equipment';
        this.pageSubtitle = 'Premium pumps, controllers, and accessories from Italy';
        break;
      default:
        this.pageTitle = 'Our Products';
        this.pageSubtitle = 'Browse our complete range of agricultural sprayers and equipment';
        this.sprayers = SPRAYERS;
    }
  }
}
