/* ============================================================
   MLIFT Product Data — Aligned with HELI Middle East
   ============================================================ */

export interface ForkliftModel {
  id: string;
  name: string;
  image: string;
  capacity?: string;
  description?: string;
}

export interface ForkliftCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  models: ForkliftModel[];
}

export const forkliftCategories: ForkliftCategory[] = [
  {
    id: "electric-forklift-trucks-lithium-ion",
    name: "ELECTRIC FORKLIFT TRUCKS (LITHIUM-ION)",
    description: "Advanced lithium-ion powered electric forklifts delivering zero emissions, rapid charging, and extended runtimes. Ideal for intensive indoor and outdoor material handling operations with lower total cost of ownership.",
    image: "/images/products/g3-15-35t-lithium.jpg",
    models: [
      { id: "g3-15-35t-80v", name: "G3 Series 1.5-3.5 Ton Double Drive Lithium Battery Forklift Truck (80V)", image: "/images/products/g3-15-35t-lithium.jpg", capacity: "1.5 - 3.5 T" },
      { id: "g3-15-2t-three-wheel", name: "G3 Series 1.5-2 Ton Three-wheel Double Drive Lithium Battery Forklift Truck (80V)", image: "/images/products/g3-15-2t-three-wheel.jpg", capacity: "1.5 - 2 T" },
      { id: "g3-6-7t", name: "G3 Series 6-7t Lithium Battery Forklift", image: "/images/products/g3-6-7t-lithium.jpg", capacity: "6 - 7 T" },
      { id: "g3-4-5t", name: "G3 series 4-5t Lithium-ion Forklift", image: "/images/products/g3-4-5t-lithium.jpg", capacity: "4 - 5 T" },
      { id: "h3-1-25t", name: "H3 series 1-2.5t Lithium Battery Forklift", image: "/images/products/h3-1-25t-lithium.jpg", capacity: "1 - 2.5 T" },
      { id: "g2-15-38t", name: "G2 series 1.5-3.8t lithium battery counterbalanced forklift", image: "/images/products/g2-15-38t-lithium.jpg", capacity: "1.5 - 3.8 T" },
      { id: "g-85-10t", name: "G series 8.5-10T Lithium Battery Forklift", image: "/images/products/g-85-10t-lithium.jpg", capacity: "8.5 - 10 T" },
    ],
  },
  {
    id: "ic-forklift-trucks",
    name: "IC FORKLIFT TRUCKS",
    description: "Robust internal combustion forklifts powered by diesel or LPG. Engineered for demanding outdoor applications with high torque, durable construction, and excellent fuel efficiency across diverse operating conditions.",
    image: "/images/products/h3-1-18t-ic.jpg",
    models: [
      { id: "h3-1-18t", name: "H3 series 1-1.8t", image: "/images/products/h3-1-18t-ic.jpg", capacity: "1 - 1.8 T" },
      { id: "g3-3-35t-diesel", name: "G3 series 3-3.5t diesel/LPG counterbalanced forklift", image: "/images/products/g3-3-35t-diesel.jpg", capacity: "3 - 3.5 T" },
      { id: "g2-2-25t", name: "G2 series 2-2.5T", image: "/images/products/g2-2-25t-ic.jpg", capacity: "2 - 2.5 T" },
      { id: "g-1-18t", name: "G series 1-1.8T", image: "/images/products/g-1-18t-ic.jpg", capacity: "1 - 1.8 T" },
    ],
  },
  {
    id: "electric-forklift-trucks-lead-acid",
    name: "ELECTRIC FORKLIFT TRUCKS (LEAD-ACID)",
    description: "Reliable lead-acid battery electric forklifts offering proven performance and cost-effective operation. Trusted technology for standard warehouse and manufacturing environments with straightforward maintenance.",
    image: "/images/products/g-2-25t-leadacid.jpg",
    models: [
      { id: "g-2-25t", name: "G series 2-2.5T", image: "/images/products/g-2-25t-leadacid.jpg", capacity: "2 - 2.5 T" },
    ],
  },
  {
    id: "warehouse-equipments",
    name: "WAREHOUSE EQUIPMENTS",
    description: "Specialized warehouse equipment designed to maximize storage density and operational efficiency in narrow aisle and high-bay racking environments. From reach trucks to stackers and order pickers.",
    image: "/images/products/g2-16-2t-warehouse.jpg",
    models: [
      { id: "g2-16-2t", name: "G2 series 1.6-2T", image: "/images/products/g2-16-2t-warehouse.jpg", capacity: "1.6 - 2 T" },
    ],
  },
  {
    id: "heavy-forklift",
    name: "HEAVY FORKLIFT",
    description: "Heavy-duty forklifts and container handling equipment engineered for ports, terminals, and heavy industry. High-capacity designs with reinforced frames for the most demanding material handling tasks.",
    image: "/images/products/45ton-reach-stacker.jpg",
    models: [
      { id: "45ton-reach-stacker", name: "45ton Reach Stacker", image: "/images/products/45ton-reach-stacker.jpg", capacity: "45 T" },
      { id: "18ton-container-handler", name: "18ton Empty Container Handler", image: "/images/products/18ton-container-handler.jpg", capacity: "18 T" },
      { id: "28-32t-ic", name: "28-32T IC Forklift Truck", image: "/images/products/28-32t-ic-heavy.jpg", capacity: "28 - 32 T" },
    ],
  },
  {
    id: "tractors",
    name: "TRACTORS",
    description: "Industrial tractors and tow tractors for efficient material transport within factories, airports, and logistics centers. High drawbar pull and robust construction for continuous duty cycles.",
    image: "/images/products/qycd60-80-tractor.jpg",
    models: [
      { id: "28-32t-ic-tractor", name: "28-32T IC Forklift Truck", image: "/images/products/28-32t-ic-heavy.jpg", capacity: "28 - 32 T" },
      { id: "qycd60-80", name: "QYCD60-~80", image: "/images/products/qycd60-80-tractor.jpg", capacity: "60 - 80 T" },
    ],
  },
  {
    id: "wheelloader",
    name: "WHEELLOADER",
    description: "Compact and versatile wheel loaders for construction, agriculture, and industrial applications. Agile maneuverability combined with powerful lifting capacity for diverse loading operations.",
    image: "/images/products/1-2t-wheel-loader.jpg",
    models: [
      { id: "1-2t-wheel-loader", name: "1-2T Wheel loader", image: "/images/products/1-2t-wheel-loader.jpg", capacity: "1 - 2 T" },
    ],
  },
  {
    id: "special-equipments",
    name: "SPECIAL EQUIPMENTS",
    description: "Specialized material handling equipment for hazardous and unique environments. Explosion-proof designs and custom configurations for industries with stringent safety requirements.",
    image: "/images/products/ac-1-35t-explosion-proof.jpg",
    models: [
      { id: "ac-1-35t-explosion-proof", name: "AC series 1-3.5t explosion-proof battery forklift", image: "/images/products/ac-1-35t-explosion-proof.jpg", capacity: "1 - 3.5 T" },
    ],
  },
  {
    id: "other-parts",
    name: "OTHER PARTS",
    description: "Genuine replacement parts and components to keep your fleet operating at peak performance. From gearboxes to hydraulic systems, ensuring reliability and extending equipment lifespan.",
    image: "/images/products/gearbox.jpg",
    models: [
      { id: "gearbox", name: "Gearbox", image: "/images/products/gearbox.jpg" },
    ],
  },
  {
    id: "attachments",
    name: "ATTACHMENTS",
    description: "Versatile forklift attachments to expand the capabilities of your material handling fleet. Custom solutions for specialized lifting, pushing, pulling, and rotating operations.",
    image: "/images/products/push-pull.jpg",
    models: [
      { id: "push-pull", name: "Push Pull", image: "/images/products/push-pull.jpg" },
    ],
  },
];

export function getCategoryById(id: string): ForkliftCategory | undefined {
  return forkliftCategories.find(c => c.id === id);
}

export function getModelById(categoryId: string, modelId: string): ForkliftModel | undefined {
  const cat = getCategoryById(categoryId);
  return cat?.models.find(m => m.id === modelId);
}

/* ============================================================
   Homepage Data
   ============================================================ */

export const heroSlides = [
  {
    title: "Empower the Material Handling World",
    subtitle: "Leading manufacturer of electric, diesel, and heavy-duty forklifts. ISO 9001 & CE certified. Exporting to 50+ countries.",
    cta: "Explore Products",
    link: "/products",
  },
  {
    title: "Reliable Forklifts, Global Reach",
    subtitle: "From compact warehouse trucks to 45-ton container handlers. Comprehensive after-sales support and spare parts worldwide.",
    cta: "View Products",
    link: "/products",
  },
  {
    title: "Innovation in Every Lift",
    subtitle: "Advanced lithium-ion technology, explosion-proof designs, and custom material handling solutions for every industry.",
    cta: "Contact Us",
    link: "/contact",
  },
];

export const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "10+", label: "Product Categories" },
  { value: "24/7", label: "Technical Support" },
  { value: "100%", label: "Factory Tested" },
];

export const testimonials = [
  {
    quote: "MLIFT forklifts have significantly improved our warehouse efficiency. The lithium-ion models are reliable and the after-sales support is excellent.",
    author: "James Wilson",
    company: "LogiTech Distribution, UK",
  },
  {
    quote: "We've been importing MLIFT heavy-duty forklifts for 3 years. The build quality rivals European brands at a much better price point.",
    author: "Ahmed Al-Rashid",
    company: "Gulf Heavy Equipment, UAE",
  },
  {
    quote: "The explosion-proof forklifts from MLIFT are exactly what our chemical plant needed. Certified, safe, and professionally supported.",
    author: "Chen Wei",
    company: "EastChem Industries, China",
  },
];

export const blogPosts = [
  {
    title: "Lithium-Ion vs Lead-Acid: Choosing the Right Electric Forklift",
    date: "June 5, 2026",
    excerpt: "Understanding the key differences between lithium-ion and lead-acid battery technologies for electric forklifts.",
  },
  {
    title: "Heavy Forklift Maintenance: Best Practices for Ports & Terminals",
    date: "May 20, 2026",
    excerpt: "Essential maintenance tips to maximize uptime and extend the lifespan of heavy-duty container handling equipment.",
  },
  {
    title: "MLIFT Expands Warehouse Equipment Line with New Reach Truck Series",
    date: "April 12, 2026",
    excerpt: "Introducing the latest additions to our warehouse equipment portfolio — designed for narrow aisle and high-bay operations.",
  },
];
