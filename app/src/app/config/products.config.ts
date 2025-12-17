/**
 * Products Configuration
 * 
 * This file contains all product data for the website.
 * To add/remove/modify products, edit this file.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  specs?: ProductSpec[];
  category: 'sprayers' | 'equipment' | 'nozzles' | 'accessories';
}

// Base path for assets - change this if deploying to different location
export const ASSETS_BASE_PATH = '/shreevallabh-frontend';

// ============================================
// SPRAYERS
// ============================================
export const SPRAYERS: Product[] = [
  {
    id: 'mounted-sprayer',
    title: 'Mounted Sprayer (200L)',
    image: `${ASSETS_BASE_PATH}/assets/images/services/200lit_mounted1.jpg`,
    description: '200 Litre capacity mounted sprayers for efficient tractor-based crop spraying operations. Ideal for vineyards, orchards, and row crops.',
    specs: [
      { label: 'Capacity', value: '200 Litres' },
      { label: 'Type', value: 'Tractor Mounted' },
      { label: 'Usage', value: 'Grapes, Pomegranates, Oranges, Row Crops' },
      { label: 'Pump Type', value: 'Diaphragm Pump' },
      { label: 'Pressure', value: 'Up to 40 Bar' },
      { label: 'Material', value: 'HDPE Tank, Steel Frame' }
    ],
    category: 'sprayers'
  },
  {
    id: 'trailed-sprayer',
    title: 'Trailed Sprayer (Citrus Plus)',
    image: `${ASSETS_BASE_PATH}/assets/images/services/Citrus-Plus1.jpg`,
    description: 'High capacity trailed sprayers ideal for large orchards and vineyards. Features advanced air-blast technology for superior coverage.',
    specs: [
      { label: 'Capacity', value: '400-600 Litres' },
      { label: 'Type', value: 'Trailed/Towed' },
      { label: 'Usage', value: 'Large Orchards, Vineyards, Citrus Farms' },
      { label: 'Fan Type', value: 'Axial Flow Fan' },
      { label: 'Air Output', value: 'High Volume' },
      { label: 'Coverage', value: 'Wide Area Spraying' }
    ],
    category: 'sprayers'
  },
  {
    id: 'knapsack-sprayer',
    title: 'Battery Operated Knapsack',
    image: `${ASSETS_BASE_PATH}/assets/images/services/knapsack-sprayer02.jpg`,
    description: 'Portable battery-powered sprayers for small areas and precision spraying. Lightweight and easy to operate.',
    specs: [
      { label: 'Capacity', value: '16-20 Litres' },
      { label: 'Type', value: 'Battery Operated' },
      { label: 'Battery', value: '12V Rechargeable' },
      { label: 'Pressure', value: '2-4 Bar' },
      { label: 'Weight', value: 'Lightweight Design' },
      { label: 'Usage', value: 'Small Farms, Gardens, Precision Spraying' }
    ],
    category: 'sprayers'
  }
];

// ============================================
// EQUIPMENT
// ============================================
export const EQUIPMENT: Product[] = [
  {
    id: 'diaphragm-pump',
    title: 'Comet 71 LT Diaphragm Pump',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special1.jpg`,
    description: 'High-quality Italian diaphragm pump for reliable spraying performance. Comet pumps are known for durability and efficiency.',
    specs: [
      { label: 'Brand', value: 'Comet (Italy)' },
      { label: 'Model', value: '71 LT' },
      { label: 'Type', value: 'Diaphragm Pump' },
      { label: 'Flow Rate', value: '71 L/min' },
      { label: 'Max Pressure', value: '40 Bar' },
      { label: 'Certification', value: 'ISO, CE' }
    ],
    category: 'equipment'
  },
  {
    id: 'orion-controller',
    title: 'Orion Brass Controller',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special2.jpg`,
    description: 'Premium brass controller for precise pressure regulation. Italian quality for professional spraying applications.',
    specs: [
      { label: 'Brand', value: 'Orion (Italy)' },
      { label: 'Material', value: 'Brass' },
      { label: 'Type', value: 'Pressure Controller' },
      { label: 'Connection', value: 'Standard Fitting' },
      { label: 'Usage', value: 'Agricultural Sprayers' },
      { label: 'Certification', value: 'ISO, CE' }
    ],
    category: 'equipment'
  },
  {
    id: 'vdr-controller',
    title: 'VDR 50 Controller',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special4.jpg`,
    description: 'Advanced controller for professional spraying applications. Provides precise control over spray operations.',
    specs: [
      { label: 'Model', value: 'VDR 50' },
      { label: 'Type', value: 'Flow Controller' },
      { label: 'Material', value: 'High-Grade Brass' },
      { label: 'Pressure Range', value: '0-50 Bar' },
      { label: 'Usage', value: 'Professional Spraying' },
      { label: 'Certification', value: 'ISO' }
    ],
    category: 'equipment'
  },
  {
    id: 'volvolmeccanica-gun',
    title: 'Volvolmeccanica Gun',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special3.jpg`,
    description: 'Italian-made spray gun for accurate and efficient spraying. Premium quality from Volvolmeccanica.',
    specs: [
      { label: 'Brand', value: 'Volvolmeccanica (Italy)' },
      { label: 'Type', value: 'Spray Gun' },
      { label: 'Material', value: 'Brass/Stainless Steel' },
      { label: 'Nozzle', value: 'Adjustable Pattern' },
      { label: 'Pressure Rating', value: 'High Pressure' },
      { label: 'Certification', value: 'ISO, CE' }
    ],
    category: 'equipment'
  },
  {
    id: 'brass-filter',
    title: 'Brass Filter',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special8.jpg`,
    description: 'Durable brass filter for clean, clog-free operation. Essential for maintaining spray quality.',
    specs: [
      { label: 'Material', value: 'Brass' },
      { label: 'Type', value: 'In-line Filter' },
      { label: 'Mesh Size', value: 'Multiple Options' },
      { label: 'Connection', value: 'Standard Thread' },
      { label: 'Usage', value: 'All Sprayer Types' },
      { label: 'Maintenance', value: 'Easy Clean Design' }
    ],
    category: 'equipment'
  },
  {
    id: 'pressure-meter',
    title: 'Pressure Meter',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special5.jpg`,
    description: 'Accurate pressure measurement for optimal spraying. Essential for monitoring spray system performance.',
    specs: [
      { label: 'Type', value: 'Analog/Digital' },
      { label: 'Range', value: '0-60 Bar' },
      { label: 'Accuracy', value: 'High Precision' },
      { label: 'Connection', value: 'Standard Fitting' },
      { label: 'Display', value: 'Clear Reading' },
      { label: 'Usage', value: 'Pressure Monitoring' }
    ],
    category: 'equipment'
  },
  {
    id: 'fan-assembly',
    title: 'Fan Assembly',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special6.jpg`,
    description: 'High-performance fan assembly for air-blast sprayers. Provides powerful air flow for effective coverage.',
    specs: [
      { label: 'Type', value: 'Axial Fan' },
      { label: 'Material', value: 'Aluminum/Steel' },
      { label: 'Air Output', value: 'High Volume' },
      { label: 'Compatibility', value: 'Air Blast Sprayers' },
      { label: 'Noise Level', value: 'Optimized' },
      { label: 'Usage', value: 'Orchard Spraying' }
    ],
    category: 'equipment'
  },
  {
    id: 'piston-pump',
    title: 'Grease Free Piston Pump',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/piston_pump-1.jpg`,
    description: 'Maintenance-friendly piston pump design. No grease required for smooth operation.',
    specs: [
      { label: 'Type', value: 'Piston Pump' },
      { label: 'Feature', value: 'Grease Free' },
      { label: 'Maintenance', value: 'Low Maintenance' },
      { label: 'Material', value: 'High-Grade Steel' },
      { label: 'Durability', value: 'Long Lasting' },
      { label: 'Usage', value: 'Agricultural Spraying' }
    ],
    category: 'equipment'
  }
];

// ============================================
// NOZZLES
// ============================================
export const NOZZLES: Product[] = [
  {
    id: 'm82-nozzle',
    title: 'M 82 Volvolmeccanica Nozzle',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special3.jpg`,
    description: 'Premium Italian nozzle for fine spray patterns. Volvolmeccanica quality for professional use.',
    specs: [
      { label: 'Brand', value: 'Volvolmeccanica (Italy)' },
      { label: 'Model', value: 'M 82' },
      { label: 'Type', value: 'Hollow Cone' },
      { label: 'Pattern', value: 'Fine Spray' },
      { label: 'Material', value: 'Brass' },
      { label: 'Usage', value: 'Precision Spraying' }
    ],
    category: 'nozzles'
  },
  {
    id: 'm65-nozzle',
    title: 'M 65 Nozzle',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special7.jpg`,
    description: 'Versatile nozzle for various spraying applications. Reliable performance for different crops.',
    specs: [
      { label: 'Model', value: 'M 65' },
      { label: 'Type', value: 'Multi-Purpose' },
      { label: 'Pattern', value: 'Adjustable' },
      { label: 'Material', value: 'Brass' },
      { label: 'Flow Rate', value: 'Variable' },
      { label: 'Usage', value: 'General Spraying' }
    ],
    category: 'nozzles'
  },
  {
    id: 'albuz-ceramic',
    title: 'ALBUZ Ceramic Tip',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/albuz-ceramic-tip.jpg`,
    description: 'Long-lasting ceramic tip for consistent spray quality. ALBUZ nozzles are industry standard for precision.',
    specs: [
      { label: 'Brand', value: 'ALBUZ' },
      { label: 'Material', value: 'Ceramic' },
      { label: 'Type', value: 'Hollow Cone' },
      { label: 'Durability', value: 'Extended Life' },
      { label: 'Pattern', value: 'Fine Spray' },
      { label: 'Usage', value: 'Precision Spraying' }
    ],
    category: 'nozzles'
  },
  {
    id: 'atr60-yellow',
    title: 'ATR 60 Yellow',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/atr60-yellow.jpg`,
    description: 'Color-coded nozzle for specific flow rates. Yellow coding indicates standard flow rate.',
    specs: [
      { label: 'Model', value: 'ATR 60' },
      { label: 'Color Code', value: 'Yellow' },
      { label: 'Type', value: 'Hollow Cone' },
      { label: 'Flow Rate', value: 'Standard' },
      { label: 'Spray Angle', value: '60°' },
      { label: 'Usage', value: 'General Spraying' }
    ],
    category: 'nozzles'
  },
  {
    id: 'atr-disk',
    title: 'ATR 80 Disc',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/atr_disk-1.jpg`,
    description: 'Disc-type nozzle for hollow cone spray patterns. Ideal for orchard and vineyard applications.',
    specs: [
      { label: 'Model', value: 'ATR 80' },
      { label: 'Type', value: 'Disc Nozzle' },
      { label: 'Pattern', value: 'Hollow Cone' },
      { label: 'Spray Angle', value: '80°' },
      { label: 'Material', value: 'Brass/Ceramic' },
      { label: 'Usage', value: 'Orchards, Vineyards' }
    ],
    category: 'nozzles'
  },
  {
    id: 'bell-nozzle',
    title: 'Sprayer Bell Nozzle',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/ball.jpg`,
    description: 'Bell-shaped nozzle for wide coverage. Ideal for broad area spraying applications.',
    specs: [
      { label: 'Type', value: 'Bell Nozzle' },
      { label: 'Pattern', value: 'Wide Coverage' },
      { label: 'Material', value: 'Brass/Plastic' },
      { label: 'Spray Angle', value: 'Wide' },
      { label: 'Flow Rate', value: 'High Volume' },
      { label: 'Usage', value: 'Broad Area Spraying' }
    ],
    category: 'nozzles'
  }
];

// ============================================
// ACCESSORIES
// ============================================
export const ACCESSORIES: Product[] = [
  {
    id: 'pto-accessories',
    title: 'PTO Shaft Accessories',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special6.jpg`,
    description: 'Power take-off accessories for tractor-mounted sprayers. Essential for connecting sprayer to tractor PTO.',
    specs: [
      { label: 'Model', value: 'CROSS' },
      { label: 'Usage', value: 'Agricultural Products Processing, Farmland Infrastructure' },
      { label: 'Wide Angle Joint', value: '30.2 × 80mm' },
      { label: 'Transport Package', value: 'Carton, Wooden Pallet' },
      { label: 'Type', value: 'Shaft' },
      { label: 'Material', value: 'Steel' },
      { label: 'Certification', value: 'ISO, ICE' }
    ],
    category: 'accessories'
  },
  {
    id: 'tank-mixer',
    title: 'Tank Mixer',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/tank_mixer-1.jpg`,
    description: 'Efficient mixing system for spray solutions. Ensures uniform mixture for consistent application.',
    specs: [
      { label: 'Type', value: 'Hydraulic Mixer' },
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Compatibility', value: 'All Tank Sizes' },
      { label: 'Function', value: 'Agitation/Mixing' },
      { label: 'Installation', value: 'Easy Mount' },
      { label: 'Usage', value: 'Chemical Mixing' }
    ],
    category: 'accessories'
  },
  {
    id: 'tank-accessories',
    title: 'Sprayer Tank Accessories',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/tank_mixer-1.jpg`,
    description: 'Complete range of tank fittings, lids, and accessories for sprayer tanks.',
    specs: [
      { label: 'Type', value: 'Tank Accessories' },
      { label: 'Includes', value: 'Lids, Fittings, Connectors' },
      { label: 'Material', value: 'HDPE/Brass' },
      { label: 'Compatibility', value: 'All Tank Sizes' },
      { label: 'Quality', value: 'Industrial Grade' },
      { label: 'Usage', value: 'Tank Maintenance' }
    ],
    category: 'accessories'
  },
  {
    id: 'italian-gun',
    title: 'Italian Spray Gun',
    image: `${ASSETS_BASE_PATH}/assets/images/services/special7.jpg`,
    description: 'High-quality Italian spray gun for precision application. Designed for professional agricultural spraying.',
    specs: [
      { label: 'Origin', value: 'Italy' },
      { label: 'Type', value: 'Spray Gun' },
      { label: 'Material', value: 'Brass/Stainless Steel' },
      { label: 'Nozzle', value: 'Adjustable' },
      { label: 'Pressure Rating', value: 'High Pressure' },
      { label: 'Usage', value: 'Precision Spraying' }
    ],
    category: 'accessories'
  },
  {
    id: 'high-pressure-gun',
    title: 'High Pressure Gun',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/highpressure1.jpg`,
    description: 'Heavy-duty gun for high-pressure applications. Built for demanding professional use.',
    specs: [
      { label: 'Type', value: 'High Pressure' },
      { label: 'Material', value: 'Brass/Steel' },
      { label: 'Max Pressure', value: '50+ Bar' },
      { label: 'Trigger', value: 'Ergonomic Design' },
      { label: 'Connection', value: 'Quick Connect' },
      { label: 'Usage', value: 'Heavy Duty Spraying' }
    ],
    category: 'accessories'
  },
  {
    id: 'pruning-secateur',
    title: 'Pruning Secateur',
    image: `${ASSETS_BASE_PATH}/assets/images/projects/pruning_secateur.jpg`,
    description: 'Professional pruning tool for orchard maintenance. Sharp and durable for clean cuts.',
    specs: [
      { label: 'Type', value: 'Bypass Secateur' },
      { label: 'Blade', value: 'High Carbon Steel' },
      { label: 'Handle', value: 'Ergonomic Grip' },
      { label: 'Cut Capacity', value: 'Up to 25mm' },
      { label: 'Lock', value: 'Safety Lock' },
      { label: 'Usage', value: 'Pruning, Trimming' }
    ],
    category: 'accessories'
  }
];

// ============================================
// ALL PRODUCTS (Combined)
// ============================================
export const ALL_PRODUCTS: Product[] = [
  ...SPRAYERS,
  ...EQUIPMENT,
  ...NOZZLES,
  ...ACCESSORIES
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
  return ALL_PRODUCTS.filter(p => p.category === category);
}

// Helper function to get related products (same category, excluding current)
export function getRelatedProducts(productId: string, limit: number = 5): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return ALL_PRODUCTS
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
}
