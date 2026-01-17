/**
 * Site Configuration
 * 
 * This file contains all static site information.
 * Edit this file to update company info, contact details, navigation, etc.
 */

export const ASSETS_BASE_PATH = '';

// ============================================
// COMPANY INFORMATION
// ============================================
export const COMPANY_INFO = {
  name: 'Shree Vallabh Agency',
  tagline: 'Importer & Traders in Agriculture Sprayers, Spray Pump, Nozzles & Accessories',
  description: 'Shree Vallabh Agency imports & trades agricultural sprayer equipment since 2014, providing agricultural spraying solutions. We are committed to continuous growth and innovation for the benefit of our customers and farmers.',
  foundedYear: 2014,
  certifications: ['ISO 9001:2015', 'CE', 'ICE']
};

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO = {
  address: {
    line1: 'Shop No. 02, Alsana Complex',
    line2: 'Saikheda Chowfuli, Ozer (Mig)',
    city: 'Tal. Niphad',
    district: 'Nashik',
    state: 'Maharashtra',
    country: 'India',
    full: 'Shop No. 02, Alsana Complex, Saikheda Chowfuli, Ozer (Mig), Tal. Niphad, Dist. Nashik, Maharashtra, India.'
  },
  phone: '+91-9689324004',
  email: 'shreevallabh75@gmail.com',
  socialMedia: {
    facebook: 'https://www.facebook.com/'
  }
};

// ============================================
// NAVIGATION LINKS
// ============================================
export interface NavLink {
  path: string;
  label: string;
  exact: boolean;
  hasDropdown?: boolean;
  children?: { path: string; label: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About Us', exact: false },
  { 
    path: '/products', 
    label: 'Sprayers', 
    exact: false, 
    hasDropdown: true, 
    children: [
      { path: '/products/mounted', label: 'Mounted Sprayers' },
      { path: '/products/trailed', label: 'Trailed Sprayers' },
      { path: '/products/knapsack', label: 'Battery Operated Knapsack' }
    ]
  },
  { path: '/equipment', label: 'Special Equipment', exact: false },
  { path: '/gallery', label: 'Gallery', exact: false },
  { path: '/videos', label: 'Videos', exact: false },
  { path: '/contact', label: 'Contact Us', exact: false }
];

// ============================================
// FOOTER LINKS
// ============================================
export const FOOTER_SITE_LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact Us' }
];

export const FOOTER_EQUIPMENT_LINKS = [
  { name: 'Comet 71 LT Diaphragm Pump', id: 'comet-71-lt' },
  { name: 'Orion Brass Controller', id: 'orion-controller' },
  { name: 'VDR 50 Controller', id: 'vdr-controller' },
  { name: 'Volvolmeccanica Gun', id: 'volvolmeccanica-gun' },
  { name: 'Grease Free Piston Pump', id: 'piston-pump' },
  { name: 'Italian Spray Gun', id: 'italian-spray-gun' }
];

// ============================================
// HOME PAGE CONTENT
// ============================================
export const HOME_PAGE = {
  hero: {
    title: 'Welcome to',
    highlightedText: 'Shree Vallabh Agency',
    subtitle: 'Importer & Traders in Agriculture Sprayers, Spray Pump, Nozzles & Accessories',
    ctaText: 'View Products',
    ctaLink: '/products'
  },
  about: {
    title: 'Welcome to',
    highlightedText: 'Shree Vallabh Agency',
    sectionTitle: 'Premium Sprayer & Nozzles',
    paragraphs: [
      'Shree Vallabh Agency imports & trades agricultural sprayer equipment since 2014, providing agricultural spraying solutions. We are committed to continuous growth and innovation for the benefit of our customers and farmers.',
      'We are the authorized dealer of Comet Diaphragm Pump, Valvomeccanica SRL (Italy). Shree Vallabh Agency also deals in 600 liter Agricultural Blower, Agricultural Air Blower, Agricultural Blower Pump & Accessories in Niphad, Nashik, Maharashtra.'
    ],
    serviceListTitle: 'Shree Vallabh Agency Serves:',
    serviceList: [
      'Comet 71 LT Diaphragm Pump',
      'Orion Brass Controller',
      'Volvolmeccanica Gun',
      'VDR 50 Controller',
      'Pressure Meter',
      'Sprayer Tank Accessories',
      'Italian Spray Gun',
      'Brass Filter'
    ],
    images: [
      `${ASSETS_BASE_PATH}/assets/images/resources/about13.jpg`,
      `${ASSETS_BASE_PATH}/assets/images/resources/about12.jpg`,
      `${ASSETS_BASE_PATH}/assets/images/resources/about11.jpg`,
      `${ASSETS_BASE_PATH}/assets/images/resources/about14.jpg`
    ]
  },
  sprayers: {
    title: 'Agricultural',
    highlightedText: 'Sprayers',
    subtitle: 'We offer various types of farm sprayers including Mounted Sprayer, Trailed Sprayer, and Battery Operated Knapsack Sprayer for crops like Grapes, Pomegranates, Oranges, and more.'
  },
  equipment: {
    title: 'Our',
    highlightedText: 'Special Equipment',
    subtitle: 'We serve special equipment including Diaphragm Pump, Orion Brass Controller, Volvolmeccanica Gun & Nozzles, Brass Filter, Fan Assembly, Pressure Meter and more.'
  },
  certification: {
    title: 'We Are An',
    highlightedText: 'ISO 9001:2015 Certified!',
    description: 'Quality and Reliability is what we live by. We are constantly striving for success and aim to achieve the highest quality standards for all our Products. All Round Technology has implemented a Quality Management System in comply with standards ISO 9001:2015. The quality management system covers all company processes and activities. Our highly motivated and experienced professionals focus on processes and are committed to delivering products of higher quality.',
    logos: [
      { src: `${ASSETS_BASE_PATH}/assets/images/resources/iso.jpg`, alt: 'ISO 9001:2015 Certified' },
      { src: `${ASSETS_BASE_PATH}/assets/images/resources/ce.jpg`, alt: 'CE Certified' },
      { src: `${ASSETS_BASE_PATH}/assets/images/resources/ice.jpg`, alt: 'ICE Certified' }
    ]
  },
  sliderImages: [
    `${ASSETS_BASE_PATH}/assets/images/slider/shree-vallabh-nozzle-banner.jpg`,
    `${ASSETS_BASE_PATH}/assets/images/slider/volvolmeccanica-nozzle.jpg`,
    `${ASSETS_BASE_PATH}/assets/images/slider/slide1_3.jpg`,
    `${ASSETS_BASE_PATH}/assets/images/slider/slide1_2.jpg`,
    `${ASSETS_BASE_PATH}/assets/images/slider/slide1_4.jpg`
  ]
};

// ============================================
// FEATURES (Why Choose Us)
// ============================================
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  { 
    icon: 'groups', 
    title: 'Social Responsibility', 
    description: 'Committed to building safe environments where our team members and customers work.' 
  },
  { 
    icon: 'diversity_3', 
    title: 'Diversity', 
    description: 'We see diversity and inclusion as fundamental to creativity, innovation and productivity.' 
  },
  { 
    icon: 'build', 
    title: 'Custom Solutions', 
    description: 'Customization and customer-focused product solutions is at the core of our mission.' 
  },
  { 
    icon: 'school', 
    title: 'Technical Education', 
    description: 'We provide technical education to customers to operate agricultural equipment safely.' 
  },
  { 
    icon: 'search', 
    title: 'Research & Development', 
    description: 'Our mission is to understand the needs of the market and customers.' 
  },
  { 
    icon: 'verified', 
    title: 'Quality Assurance', 
    description: 'Committed to product guarantee and stable supply chain management.' 
  }
];

// ============================================
// GALLERY ITEMS
// ============================================
export interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Sprayer Installation', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/25.jpg` },
  { title: 'Vineyard Spraying', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/26.jpg` },
  { title: 'Mounted Sprayer Setup', category: 'Sprayers', image: `${ASSETS_BASE_PATH}/assets/images/gallery/13.jpg` },
  { title: 'Tractor Sprayer', category: 'Sprayers', image: `${ASSETS_BASE_PATH}/assets/images/gallery/14.jpg` },
  { title: 'Field Demonstration', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/15.jpg` },
  { title: 'Orchard Spraying', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/16.jpg` },
  { title: 'Equipment Display', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/17.jpg` },
  { title: 'Sprayer Components', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/18.jpg` },
  { title: 'Customer Installation', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/19.jpg` },
  { title: 'Grape Vineyard', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/20.jpg` },
  { title: 'Trailed Sprayer', category: 'Sprayers', image: `${ASSETS_BASE_PATH}/assets/images/gallery/27.jpg` },
  { title: 'Air Blast Sprayer', category: 'Sprayers', image: `${ASSETS_BASE_PATH}/assets/images/gallery/28.jpg` },
  { title: 'Pomegranate Farm', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/29.jpg` },
  { title: 'Sprayer in Action', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/30.jpg` },
  { title: 'Farm Equipment', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/31.jpg` },
  { title: 'Nozzle Assembly', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/32.jpg` },
  { title: 'Warehouse Stock', category: 'Facility', image: `${ASSETS_BASE_PATH}/assets/images/gallery/33.jpg` },
  { title: 'Product Display', category: 'Facility', image: `${ASSETS_BASE_PATH}/assets/images/gallery/34.jpg` },
  { title: 'Sprayer Parts', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/35.jpg` },
  { title: 'Italian Equipment', category: 'Equipment', image: `${ASSETS_BASE_PATH}/assets/images/gallery/36.jpg` },
  { title: 'Customer Demo', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/38.jpg` },
  { title: 'Team at Work', category: 'Facility', image: `${ASSETS_BASE_PATH}/assets/images/gallery/39.jpg` },
  { title: 'Sprayer Testing', category: 'Field Work', image: `${ASSETS_BASE_PATH}/assets/images/gallery/40.jpg` },
  { title: 'Quality Check', category: 'Facility', image: `${ASSETS_BASE_PATH}/assets/images/gallery/41.jpg` }
];

// ============================================
// VIDEOS
// ============================================
export interface Video {
  title: string;
  videoId: string;
  description: string;
}

export const VIDEOS: Video[] = [
  {
    title: 'Shree Vallabh Agency - Agricultural Sprayer Demo',
    videoId: 'LiEr7HCNfQE',
    description: 'Watch our agricultural sprayer equipment in action. See how our sprayers provide efficient coverage for vineyards and orchards.'
  },
  {
    title: 'Agricultural Sprayer in Action',
    videoId: 'FlmJ_WwqN-Y',
    description: 'See our agricultural spraying equipment delivering effective coverage in the field.'
  },
  {
    title: 'Sprayer Equipment Demonstration',
    videoId: '6JvhQUQo0-E',
    description: 'Detailed demonstration of our sprayer equipment and its applications.'
  }
];

// ============================================
// ABOUT PAGE CONTENT
// ============================================
export const ABOUT_PAGE = {
  title: 'About Us',
  sections: [
    {
      title: 'Who We Are',
      content: 'Shree Vallabh Agency is an Importer & Trader of Agricultural Sprayer Equipment since 2014. We provide agricultural spraying solutions and are committed to continuous growth and innovation for the benefit of our customers and farmers.'
    },
    {
      title: 'Our Mission',
      content: 'To provide high-quality agricultural spraying equipment that helps farmers increase productivity while maintaining environmental sustainability.'
    },
    {
      title: 'Our Vision',
      content: 'To be the leading supplier of agricultural spraying solutions in India, known for quality products and excellent customer service.'
    }
  ],
  dealerships: [
    'Authorized dealer of Comet Diaphragm Pump',
    'Authorized dealer of Valvomeccanica SRL (Italy)',
    '600 liter Agricultural Blower',
    'Agricultural Air Blower',
    'Agricultural Blower Pump & Accessories'
  ]
};
