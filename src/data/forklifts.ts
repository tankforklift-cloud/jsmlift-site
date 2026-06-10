// MLIFT Forklift Products — Complete Product Line
// Categories matching Heli Middle East structure

export interface ForkliftHighlight {
  label: string;
  value: string;
}

export interface ForkliftSpec {
  label: string;
  value: string;
}

export interface ForkliftSpecGroup {
  group: string;
  items: ForkliftSpec[];
}

export interface ForkliftFeature {
  title: string;
  desc: string;
}

export interface ForkliftModel {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  liftHeight: string;
  powerType: string;
  description: string;
  highlights: ForkliftHighlight[];
  specs: ForkliftSpecGroup[];
  features: ForkliftFeature[];
  options: string[];
}

export interface ForkliftCategory {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  icon: string;
  image: string;
  models: ForkliftModel[];
}

export const forkliftCategories: ForkliftCategory[] = [
  {
    id: "electric-forklifts",
    name: "Electric Forklift Trucks",
    nameZh: "电动叉车",
    description: "Lithium-Ion & Lead-Acid powered electric forklifts from 1.5 to 5.0 ton. Zero emission, low noise, ideal for indoor and outdoor material handling operations.",
    icon: "⚡",
    image: "/images/products/electric-forklift.jpg",
    models: [
      {
        id: "e30",
        name: "MLIFT E30",
        tagline: "3.0 Ton Electric Forklift",
        capacity: "3.0 ton",
        liftHeight: "3,000 – 6,000 mm",
        powerType: "Lithium-Ion / Lead-Acid",
        description: "The MLIFT E30 electric forklift delivers powerful, zero-emission performance for demanding material handling operations. With advanced AC drive technology and regenerative braking, it offers exceptional energy efficiency and lower total cost of ownership.",
        highlights: [
          { label: "Load Capacity", value: "3,000 kg" },
          { label: "Lift Height", value: "up to 6,000 mm" },
          { label: "Battery", value: "80V / 560Ah Li-Ion" },
          { label: "Travel Speed", value: "16 km/h" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "3,000 kg (6,600 lbs)" },
              { label: "Load Center", value: "500 mm" },
              { label: "Travel Speed (Loaded)", value: "15 km/h" },
              { label: "Travel Speed (Unloaded)", value: "16 km/h" },
              { label: "Lifting Speed (Loaded)", value: "0.35 m/s" },
              { label: "Gradeability (Loaded)", value: "15%" },
            ],
          },
          {
            group: "Dimensions",
            items: [
              { label: "Overall Length", value: "3,560 mm" },
              { label: "Overall Width", value: "1,225 mm" },
              { label: "Overall Height", value: "2,150 mm" },
              { label: "Wheelbase", value: "1,700 mm" },
              { label: "Turning Radius", value: "2,240 mm" },
              { label: "Service Weight", value: "5,100 kg" },
            ],
          },
          {
            group: "Power System",
            items: [
              { label: "Battery Voltage", value: "80V" },
              { label: "Battery Capacity", value: "560 Ah (Li-Ion)" },
              { label: "Drive Motor", value: "16.5 kW AC" },
              { label: "Lift Motor", value: "18 kW AC" },
              { label: "Controller", value: "ZAPI / Curtis AC" },
            ],
          },
        ],
        features: [
          { title: "AC Drive Technology", desc: "Advanced AC motors deliver smoother acceleration, higher efficiency, and lower maintenance compared to DC systems." },
          { title: "Lithium-Ion Battery", desc: "Fast charging in 1.5–2 hours, opportunity charging capable, zero maintenance, and 3,000+ cycle life." },
          { title: "Regenerative Braking", desc: "Energy is recovered during deceleration and lowering, extending battery runtime by up to 15%." },
          { title: "Ergonomic Operator Cabin", desc: "Adjustable steering column, full-suspension seat, and intuitive multifunction display for operator comfort." },
          { title: "Wet Disc Brakes", desc: "Fully enclosed oil-cooled disc brakes provide reliable stopping power in dusty, wet, or corrosive environments." },
          { title: "Smart Fleet Management", desc: "Optional IoT module for real-time monitoring of battery health, usage hours, fault codes, and location tracking." },
        ],
        options: [
          "Full Cabin with Heater & A/C",
          "Side Battery Extraction",
          "Cold Storage Package (-35°C)",
          "Integrated Side Shift",
          "Fork Positioner",
          "Blue Safety Spot Light",
          "360° Camera System",
          "IoT Fleet Management Module",
        ],
      },
      {
        id: "e15",
        name: "MLIFT E15",
        tagline: "1.5 Ton Compact Electric Forklift",
        capacity: "1.5 ton",
        liftHeight: "2,500 – 4,500 mm",
        powerType: "Lithium-Ion",
        description: "Compact 3-wheel electric forklift designed for tight warehouse aisles and confined spaces. Excellent maneuverability with dual drive motors and zero turning radius capability.",
        highlights: [
          { label: "Load Capacity", value: "1,500 kg" },
          { label: "Lift Height", value: "up to 4,500 mm" },
          { label: "Turning Radius", value: "1,540 mm" },
          { label: "Battery", value: "48V / 300Ah Li-Ion" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "1,500 kg" },
              { label: "Load Center", value: "500 mm" },
              { label: "Travel Speed", value: "14 km/h" },
              { label: "Lifting Speed", value: "0.38 m/s" },
              { label: "Gradeability", value: "15%" },
            ],
          },
          {
            group: "Dimensions",
            items: [
              { label: "Overall Length", value: "2,780 mm" },
              { label: "Overall Width", value: "1,080 mm" },
              { label: "Turning Radius", value: "1,540 mm" },
              { label: "Service Weight", value: "2,950 kg" },
            ],
          },
        ],
        features: [
          { title: "3-Wheel Design", desc: "Exceptional maneuverability with dual front drive wheels and single rear steer wheel." },
          { title: "Compact Footprint", desc: "Narrow 1,080 mm width for operation in tight aisles and confined warehouse spaces." },
        ],
        options: ["Side Shift", "Load Backrest", "Cold Storage Package", "Overhead Guard Lights"],
      },
    ],
  },
  {
    id: "diesel-forklifts",
    name: "Diesel Forklift Trucks",
    nameZh: "柴油叉车",
    description: "Robust diesel-powered forklifts from 2.0 to 10.0 ton for heavy outdoor applications. High torque, durable construction, and excellent fuel efficiency.",
    icon: "⛽",
    image: "/images/products/ic-forklift.jpg",
    models: [
      {
        id: "d35",
        name: "MLIFT D35",
        tagline: "3.5 Ton Diesel Forklift",
        capacity: "3.5 ton",
        liftHeight: "3,000 – 6,000 mm",
        powerType: "Diesel",
        description: "The MLIFT D35 is a rugged diesel forklift built for demanding outdoor applications. Powered by a fuel-efficient engine meeting EPA/Stage V standards, it delivers reliable performance in construction, lumber, and heavy manufacturing environments.",
        highlights: [
          { label: "Load Capacity", value: "3,500 kg" },
          { label: "Engine Power", value: "36.8 kW / 50 HP" },
          { label: "Lift Height", value: "up to 6,000 mm" },
          { label: "Gradeability", value: "25%" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "3,500 kg" },
              { label: "Load Center", value: "500 mm" },
              { label: "Travel Speed (Loaded)", value: "19 km/h" },
              { label: "Lifting Speed (Loaded)", value: "0.50 m/s" },
              { label: "Gradeability (Loaded)", value: "25%" },
              { label: "Drawbar Pull", value: "22 kN" },
            ],
          },
          {
            group: "Engine",
            items: [
              { label: "Engine Model", value: "ISUZU C240 / XINCHAI 490" },
              { label: "Rated Power", value: "36.8 kW @ 2,500 rpm" },
              { label: "Displacement", value: "2.67 L" },
              { label: "Emission Standard", value: "EU Stage V / EPA Tier 4" },
              { label: "Fuel Tank", value: "60 L" },
            ],
          },
          {
            group: "Dimensions",
            items: [
              { label: "Overall Length", value: "3,870 mm" },
              { label: "Overall Width", value: "1,315 mm" },
              { label: "Overall Height", value: "2,230 mm" },
              { label: "Wheelbase", value: "1,800 mm" },
              { label: "Turning Radius", value: "2,490 mm" },
              { label: "Service Weight", value: "5,400 kg" },
            ],
          },
        ],
        features: [
          { title: "Powerful Diesel Engine", desc: "ISUZU-derived engine delivers high torque at low RPM for demanding applications and steep gradients." },
          { title: "Heavy-Duty Frame", desc: "Full-box section frame with reinforced mast channel provides exceptional structural rigidity under extreme loads." },
          { title: "Wet Disc Brakes", desc: "Fully sealed oil-cooled braking system, maintenance-free and reliable in dusty and muddy environments." },
          { title: "High-Visibility Mast", desc: "Wide-view mast design maximizes forward visibility for safe and precise load handling." },
        ],
        options: [
          "Full Cabin with Heater & A/C",
          "Integrated Side Shift",
          "Fork Positioner",
          "Load Weight Indicator",
          "Reverse Camera",
          "Dual Air Filter (Dusty Environment)",
        ],
      },
    ],
  },
  {
    id: "lpg-forklifts",
    name: "LPG Forklift Trucks",
    nameZh: "液化气叉车",
    description: "LPG/gasoline dual-fuel forklifts from 2.0 to 5.0 ton. Clean-burning, versatile power for indoor/outdoor operations with quick cylinder changeover.",
    icon: "🔥",
    image: "/images/products/heavy-diesel.jpg",
    models: [
      {
        id: "g25",
        name: "MLIFT G25",
        tagline: "2.5 Ton LPG Forklift",
        capacity: "2.5 ton",
        liftHeight: "3,000 – 5,500 mm",
        powerType: "LPG / Gasoline",
        description: "Versatile LPG forklift offering clean emissions for indoor use and powerful performance for outdoor applications. Quick-change LPG cylinder system for minimal downtime.",
        highlights: [
          { label: "Load Capacity", value: "2,500 kg" },
          { label: "Fuel Type", value: "LPG / Gasoline" },
          { label: "Engine Power", value: "42 kW / 57 HP" },
          { label: "Travel Speed", value: "18 km/h" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "2,500 kg" },
              { label: "Load Center", value: "500 mm" },
              { label: "Travel Speed", value: "18 km/h" },
              { label: "Lifting Speed", value: "0.55 m/s" },
              { label: "Gradeability", value: "20%" },
            ],
          },
          {
            group: "Engine",
            items: [
              { label: "Engine Model", value: "GM 2.4L / PSI 2.4L LPG" },
              { label: "Rated Power", value: "42 kW @ 2,300 rpm" },
              { label: "Fuel System", value: "Electronic Fuel Injection" },
              { label: "Emission Standard", value: "EU Stage V" },
            ],
          },
        ],
        features: [
          { title: "Dual Fuel Capability", desc: "Operates on LPG or gasoline for maximum operational flexibility and fuel availability." },
          { title: "Clean Emissions", desc: "LPG combustion produces significantly fewer particulates, making it suitable for indoor warehouse use." },
          { title: "Quick Cylinder Change", desc: "Tool-free LPG cylinder replacement in under 2 minutes for continuous multi-shift operation." },
        ],
        options: ["Cabin with Heater", "Side Shift", "Overhead Guard", "Spark Arrestor", "Fuel Gauge & Level Sensor"],
      },
    ],
  },
  {
    id: "reach-trucks",
    name: "Reach Trucks",
    nameZh: "前移式叉车",
    description: "High-lift reach trucks for narrow aisle warehousing. Lift heights up to 12 meters, 1.4–2.0 ton capacity. Maximize storage density in high-bay racking.",
    icon: "🏗️",
    image: "/images/products/warehouse-forklift.jpg",
    models: [
      {
        id: "r20",
        name: "MLIFT R20",
        tagline: "2.0 Ton Reach Truck",
        capacity: "2.0 ton",
        liftHeight: "6,000 – 12,000 mm",
        powerType: "Electric / Lithium-Ion",
        description: "High-performance reach truck designed for narrow aisle warehousing and high-bay racking. Precise mast control and excellent residual capacity at height.",
        highlights: [
          { label: "Load Capacity", value: "2,000 kg" },
          { label: "Max Lift Height", value: "12,000 mm" },
          { label: "Aisle Width", value: "2,700 mm" },
          { label: "Travel Speed", value: "12 km/h" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "2,000 kg" },
              { label: "Max Lift Height", value: "12,000 mm" },
              { label: "Travel Speed", value: "12 km/h" },
              { label: "Lifting Speed", value: "0.42 m/s" },
              { label: "Min Aisle Width", value: "2,700 mm (AST)" },
            ],
          },
          {
            group: "Power",
            items: [
              { label: "Battery Voltage", value: "48V" },
              { label: "Battery Capacity", value: "775 Ah" },
              { label: "Drive Motor", value: "8 kW AC" },
            ],
          },
        ],
        features: [
          { title: "High-Bay Capable", desc: "Lifts to 12 meters with electronic mast control for smooth positioning at any height." },
          { title: "Narrow Aisle Ready", desc: "Operates in aisles as narrow as 2.7 meters, maximizing warehouse storage density." },
        ],
        options: ["Cold Storage Package", "Camera System", "Height Selector", "Load Weight Indicator", "Rail Guidance"],
      },
    ],
  },
  {
    id: "pallet-trucks",
    name: "Electric Pallet Trucks",
    nameZh: "电动搬运车",
    description: "Electric pallet trucks from 1.5 to 3.0 ton. Compact, efficient horizontal transport for warehouse, retail, and logistics operations.",
    icon: "🔌",
    image: "/images/products/push-pull.jpg",
    models: [
      {
        id: "pt20",
        name: "MLIFT PT20",
        tagline: "2.0 Ton Electric Pallet Truck",
        capacity: "2.0 ton",
        liftHeight: "125 mm",
        powerType: "Electric / Lithium-Ion",
        description: "Compact electric pallet truck with lithium-ion battery for efficient horizontal transport. Ideal for loading/unloading and short-distance material movement.",
        highlights: [
          { label: "Load Capacity", value: "2,000 kg" },
          { label: "Travel Speed", value: "6 km/h" },
          { label: "Battery", value: "24V / 30Ah Li-Ion" },
          { label: "Service Weight", value: "165 kg" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "2,000 kg" },
              { label: "Travel Speed", value: "6 km/h" },
              { label: "Gradeability", value: "8%" },
              { label: "Turning Radius", value: "1,360 mm" },
              { label: "Service Weight", value: "165 kg" },
            ],
          },
        ],
        features: [
          { title: "Ultra-Compact", desc: "Lightweight design with lithium battery enables easy maneuverability in tight spaces." },
          { title: "Quick Charge", desc: "Fully charged in 2 hours for continuous multi-shift operation." },
        ],
        options: ["Foldable Platform", "Load Backrest", "Cold Storage Package", "Remote Control"],
      },
    ],
  },
  {
    id: "stackers",
    name: "Electric Stackers",
    nameZh: "电动堆垛机",
    description: "Electric stackers from 1.0 to 2.0 ton with lift heights up to 5.5 meters. Cost-effective vertical storage solution for small and medium warehouses.",
    icon: "📦",
    image: "/images/products/wheel-loader.jpg",
    models: [
      {
        id: "s15",
        name: "MLIFT S15",
        tagline: "1.5 Ton Electric Stacker",
        capacity: "1.5 ton",
        liftHeight: "2,500 – 5,500 mm",
        powerType: "Electric / Lead-Acid",
        description: "Versatile pedestrian stacker combining horizontal transport and vertical stacking in one machine. Cost-effective solution for warehouse racking.",
        highlights: [
          { label: "Load Capacity", value: "1,500 kg" },
          { label: "Max Lift Height", value: "5,500 mm" },
          { label: "Battery", value: "24V / 210Ah" },
          { label: "Turning Radius", value: "1,560 mm" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "1,500 kg" },
              { label: "Max Lift Height", value: "5,500 mm" },
              { label: "Travel Speed", value: "5.5 km/h" },
              { label: "Lifting Speed", value: "0.15 m/s" },
              { label: "Service Weight", value: "880 kg" },
            ],
          },
        ],
        features: [
          { title: "Pedestrian Operation", desc: "Ergonomic tiller head with all controls at fingertip reach for operator comfort." },
          { title: "Straddle Leg Design", desc: "Stable straddle legs provide excellent residual capacity and stability at height." },
        ],
        options: ["Lithium-Ion Battery", "Load Backrest", "Fork Length Options", "Cold Storage Package"],
      },
    ],
  },
  {
    id: "order-pickers",
    name: "Order Pickers",
    nameZh: "拣选车",
    description: "Electric order pickers for efficient case and item-level picking. Operator lifts with the platform for ergonomic access at all rack levels.",
    icon: "📋",
    image: "/images/products/container-handler.jpg",
    models: [
      {
        id: "op10",
        name: "MLIFT OP10",
        tagline: "1.0 Ton Order Picker",
        capacity: "1.0 ton",
        liftHeight: "3,000 – 9,500 mm",
        powerType: "Electric / Lithium-Ion",
        description: "Efficient low-level order picker for warehouse picking operations. Operator platform lifts to ergonomic pick height for fast, accurate order fulfillment.",
        highlights: [
          { label: "Load Capacity", value: "1,000 kg" },
          { label: "Platform Height", value: "up to 9,500 mm" },
          { label: "Travel Speed", value: "10 km/h" },
          { label: "Battery", value: "24V / 350Ah Li-Ion" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "1,000 kg" },
              { label: "Max Platform Height", value: "9,500 mm" },
              { label: "Travel Speed", value: "10 km/h" },
              { label: "Service Weight", value: "2,450 kg" },
            ],
          },
        ],
        features: [
          { title: "Operator-Up Design", desc: "Operator lifts with the platform for direct access to items at every pick face." },
          { title: "Wire Guidance Ready", desc: "Optional wire guidance system for hands-free steering in very narrow aisles." },
        ],
        options: ["Wire Guidance", "RF Terminal Mount", "Cold Storage Package", "On-Board Charger"],
      },
    ],
  },
  {
    id: "heavy-forklifts",
    name: "Heavy Duty Forklifts",
    nameZh: "重型叉车",
    description: "Heavy-duty forklifts from 10 to 25 ton for ports, steel mills, and heavy manufacturing. High-capacity diesel engines with reinforced frames.",
    icon: "🏭",
    image: "/images/products/reach-stacker.jpg",
    models: [
      {
        id: "h160",
        name: "MLIFT H160",
        tagline: "16 Ton Heavy Duty Forklift",
        capacity: "16 ton",
        liftHeight: "3,000 – 5,000 mm",
        powerType: "Diesel",
        description: "Heavy-duty forklift for demanding industrial applications. Container handling, steel coil transport, and heavy equipment logistics in ports, steel mills, and heavy manufacturing.",
        highlights: [
          { label: "Load Capacity", value: "16,000 kg" },
          { label: "Engine Power", value: "119 kW / 162 HP" },
          { label: "Service Weight", value: "22,500 kg" },
          { label: "Wheelbase", value: "3,500 mm" },
        ],
        specs: [
          {
            group: "Performance",
            items: [
              { label: "Load Capacity", value: "16,000 kg" },
              { label: "Load Center", value: "900 mm" },
              { label: "Travel Speed", value: "25 km/h" },
              { label: "Lifting Speed (Loaded)", value: "0.28 m/s" },
              { label: "Gradeability", value: "22%" },
            ],
          },
          {
            group: "Engine",
            items: [
              { label: "Engine Model", value: "WEICHAI WP6 / CUMMINS QSB6.7" },
              { label: "Rated Power", value: "119 kW @ 2,200 rpm" },
              { label: "Displacement", value: "6.7 L" },
              { label: "Emission Standard", value: "EU Stage V / EPA Tier 4" },
              { label: "Fuel Tank", value: "200 L" },
            ],
          },
          {
            group: "Dimensions",
            items: [
              { label: "Overall Length", value: "6,200 mm" },
              { label: "Overall Width", value: "2,500 mm" },
              { label: "Overall Height", value: "3,480 mm" },
              { label: "Wheelbase", value: "3,500 mm" },
              { label: "Turning Radius", value: "5,200 mm" },
              { label: "Service Weight", value: "22,500 kg" },
            ],
          },
        ],
        features: [
          { title: "Heavy-Duty Powertrain", desc: "Cummins/Weichai engine with reinforced transmission and drive axle for continuous heavy-load operation." },
          { title: "Reinforced Frame", desc: "Double-box section frame with steel casting reinforcement at critical stress points." },
          { title: "Advanced Hydraulics", desc: "Load-sensing hydraulic system with proportional control for precise, smooth lifting of heavy loads." },
          { title: "Operator Cabin", desc: "ROPS/FOPS certified cabin with panoramic visibility, climate control, and suspension seat." },
        ],
        options: ["Container Spreader", "Coil Ram", "Fork Positioner", "360° Camera", "Tire Pressure Monitoring", "Auto Lubrication", "Load Moment Indicator"],
      },
    ],
  },
];

// Helper: get a model by category and model id
export function getModel(categoryId: string, modelId: string): ForkliftModel | undefined {
  const cat = forkliftCategories.find(c => c.id === categoryId);
  return cat?.models.find(m => m.id === modelId);
}

// Helper: get all models (flat list for search / overview)
export function getAllModels(): { category: ForkliftCategory; model: ForkliftModel }[] {
  const result: { category: ForkliftCategory; model: ForkliftModel }[] = [];
  for (const cat of forkliftCategories) {
    for (const model of cat.models) {
      result.push({ category: cat, model });
    }
  }
  return result;
}

// Hero data for homepage slider
export const heroSlides = [
  {
    title: "LIFTING THE FUTURE",
    subtitle: "MLIFT delivers comprehensive material handling solutions to global markets through precision engineering and relentless innovation.",
    cta: "Explore Products",
    link: "/products",
    gradient: "linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 40%, #16213e 70%, #0D0D0D 100%)",
  },
  {
    title: "POWER & PRECISION",
    subtitle: "From electric warehouse trucks to heavy-duty diesel forklifts — MLIFT covers every material handling need with world-class performance.",
    cta: "Request a Quote",
    link: "/contact",
    gradient: "linear-gradient(135deg, #0D0D0D 0%, #1a0a0a 40%, #2e1a1a 70%, #0D0D0D 100%)",
  },
  {
    title: "ENGINEERED TO LAST",
    subtitle: "Built with premium components and rigorous quality control. Every MLIFT forklift undergoes 100+ inspection points before leaving the factory.",
    cta: "About MLIFT",
    link: "/about",
    gradient: "linear-gradient(135deg, #0D0D0D 0%, #0a1a0a 40%, #1a2e1a 70%, #0D0D0D 100%)",
  },
];

// Stats data
export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Exported" },
  { value: "8", label: "Product Categories" },
  { value: "40+", label: "Forklift Models" },
  { value: "100%", label: "Factory Tested" },
  { value: "24/7", label: "After-Sales Support" },
  { value: "500+", label: "Global Clients" },
  { value: "200+", label: "Team Members" },
];

// Testimonials
export const testimonials = [
  {
    quote: "MLIFT electric forklifts have transformed our warehouse operations. The lithium-ion fast charging means zero downtime across three shifts.",
    author: "Mohammed Al-Rashid",
    company: "Logistics Director — Dammam, Saudi Arabia",
  },
  {
    quote: "We purchased 12 MLIFT D35 diesel forklifts for our steel processing facility. After 5,000 hours, they still perform like new. Exceptional build quality.",
    author: "Viktor Petrov",
    company: "Operations Manager — Moscow, Russia",
  },
  {
    quote: "The MLIFT H160 handles our 16-ton steel coils with ease. The load-sensing hydraulics make precise positioning effortless.",
    author: "Carlos Mendez",
    company: "Port Operations — Veracruz, Mexico",
  },
  {
    quote: "Their electric pallet trucks are the most reliable in our fleet. We've standardized on MLIFT for all our DC operations across Southeast Asia.",
    author: "Priya Sharma",
    company: "Supply Chain Director — Mumbai, India",
  },
];

// Blog posts
export const blogPosts = [
  {
    date: "June 2026",
    title: "MLIFT Expands into Middle East Market — New Dubai Distribution Center Opens",
    excerpt: "Strategic expansion brings MLIFT forklifts closer to GCC customers with full service and parts support from our new Dubai facility.",
    image: "bg",
  },
  {
    date: "May 2026",
    title: "Lithium-Ion vs Lead-Acid: Which Forklift Battery Is Right for Your Operation?",
    excerpt: "A practical comparison of total cost of ownership, charging times, and operational flexibility for electric forklift fleets.",
    image: "bg",
  },
  {
    date: "April 2026",
    title: "How to Choose the Right Forklift for Your Warehouse: A Complete Guide",
    excerpt: "From aisle width to lift height to power type — the essential factors to evaluate when selecting material handling equipment.",
    image: "bg",
  },
];
