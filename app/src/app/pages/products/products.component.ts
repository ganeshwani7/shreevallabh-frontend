import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatTabsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  sprayers = [
    { id: 'mounted-sprayer', title: 'Mounted Sprayer (200L)', image: '/shreevallabh-frontend/assets/images/services/200lit_mounted1.jpg', description: '200 Litre capacity mounted sprayers for efficient tractor-based crop spraying operations.' },
    { id: 'trailed-sprayer', title: 'Trailed Sprayer (Citrus Plus)', image: '/shreevallabh-frontend/assets/images/services/Citrus-Plus1.jpg', description: 'High capacity trailed sprayers ideal for large orchards and vineyards.' },
    { id: 'knapsack-sprayer', title: 'Battery Operated Knapsack', image: '/shreevallabh-frontend/assets/images/services/knapsack-sprayer02.jpg', description: 'Portable battery-powered sprayers for small areas and precision spraying.' }
  ];

  equipment = [
    { id: 'diaphragm-pump', title: 'Comet 71 LT Diaphragm Pump', image: '/shreevallabh-frontend/assets/images/services/special1.jpg', description: 'High-quality Italian diaphragm pump for reliable spraying performance.' },
    { id: 'orion-controller', title: 'Orion Brass Controller', image: '/shreevallabh-frontend/assets/images/services/special2.jpg', description: 'Premium brass controller for precise pressure regulation.' },
    { id: 'vdr-controller', title: 'VDR 50 Controller', image: '/shreevallabh-frontend/assets/images/services/special4.jpg', description: 'Advanced controller for professional spraying applications.' },
    { id: 'volvolmeccanica-gun', title: 'Volvolmeccanica Gun', image: '/shreevallabh-frontend/assets/images/services/special3.jpg', description: 'Italian-made spray gun for accurate and efficient spraying.' },
    { id: 'brass-filter', title: 'Brass Filter', image: '/shreevallabh-frontend/assets/images/services/special8.jpg', description: 'Durable brass filter for clean, clog-free operation.' },
    { id: 'pressure-meter', title: 'Pressure Meter', image: '/shreevallabh-frontend/assets/images/services/special5.jpg', description: 'Accurate pressure measurement for optimal spraying.' },
    { id: 'fan-assembly', title: 'Fan Assembly', image: '/shreevallabh-frontend/assets/images/services/special6.jpg', description: 'High-performance fan assembly for air-blast sprayers.' },
    { id: 'piston-pump', title: 'Grease Free Piston Pump', image: '/shreevallabh-frontend/assets/images/projects/piston_pump-1.jpg', description: 'Maintenance-friendly piston pump design.' }
  ];

  nozzles = [
    { id: 'm82-nozzle', title: 'M 82 Volvolmeccanica Nozzle', image: '/shreevallabh-frontend/assets/images/services/special3.jpg', description: 'Premium Italian nozzle for fine spray patterns.' },
    { id: 'm65-nozzle', title: 'M 65 Nozzle', image: '/shreevallabh-frontend/assets/images/services/special7.jpg', description: 'Versatile nozzle for various spraying applications.' },
    { id: 'albuz-ceramic', title: 'ALBUZ Ceramic Tip', image: '/shreevallabh-frontend/assets/images/projects/albuz-ceramic-tip.jpg', description: 'Long-lasting ceramic tip for consistent spray quality.' },
    { id: 'atr60-yellow', title: 'ATR 60 Yellow', image: '/shreevallabh-frontend/assets/images/projects/atr60-yellow.jpg', description: 'Color-coded nozzle for specific flow rates.' },
    { id: 'atr-disk', title: 'ATR 80 Disc', image: '/shreevallabh-frontend/assets/images/projects/atr_disk-1.jpg', description: 'Disc-type nozzle for hollow cone spray patterns.' },
    { id: 'bell-nozzle', title: 'Sprayer Bell Nozzle', image: '/shreevallabh-frontend/assets/images/projects/ball.jpg', description: 'Bell-shaped nozzle for wide coverage.' }
  ];

  accessories = [
    { id: 'pto-accessories', title: 'PTO Shaft Accessories', image: '/shreevallabh-frontend/assets/images/services/special6.jpg', description: 'Power take-off accessories for tractor-mounted sprayers.' },
    { id: 'tank-accessories', title: 'Sprayer Tank Accessories', image: '/shreevallabh-frontend/assets/images/projects/tank_mixer-1.jpg', description: 'Tank fittings, lids, and accessories.' },
    { id: 'italian-gun', title: 'Italian Spray Gun', image: '/shreevallabh-frontend/assets/images/services/special7.jpg', description: 'High-quality spray gun for precision application.' },
    { id: 'high-pressure-gun', title: 'High Pressure Gun', image: '/shreevallabh-frontend/assets/images/projects/highpressure1.jpg', description: 'Heavy-duty gun for high-pressure applications.' },
    { id: 'tank-mixer', title: 'Tank Mixer', image: '/shreevallabh-frontend/assets/images/projects/tank_mixer-1.jpg', description: 'Efficient mixing system for spray solutions.' },
    { id: 'pruning-secateur', title: 'Pruning Secateur', image: '/shreevallabh-frontend/assets/images/projects/pruning_secateur.jpg', description: 'Professional pruning tool for orchard maintenance.' }
  ];
}
