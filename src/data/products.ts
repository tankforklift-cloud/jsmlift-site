export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'maintenance', name: 'Maintenance Parts', icon: '🔧', description: 'Air filters, oil filters, fuel filters, water separators — all standard engine & hydraulic filtration' },
  { id: 'brake', name: 'Brake System', icon: '🛑', description: 'Master cylinders, brake drums, shoes, boosters & complete brake assemblies' },
  { id: 'steering-axle', name: 'Steering & Drive Axle', icon: '🔄', description: 'Steering knuckles, king pins, tie rods, half shafts & axle housings' },
  { id: 'electrical', name: 'Electrical & Electronic', icon: '⚡', description: 'Dashboards, switches, controllers, sensors, alternators & wiring harnesses' },
  { id: 'engine', name: 'Engine & Power', icon: '🏭', description: 'Engine assemblies, cylinder kits, crankshafts, pumps & fuel injectors' },
  { id: 'transmission', name: 'Transmission', icon: '⚙️', description: 'Torque converters, clutch packs, gears, differentials & transmission assemblies' },
  { id: 'hydraulic', name: 'Hydraulic System', icon: '💧', description: 'Gear pumps, control valves, lift/tilt/steering cylinders & hydraulic seal kits' },
  { id: 'wheel-tire', name: 'Wheels & Tires', icon: '🛞', description: 'Pneumatic tires, solid tires, wheel rims & hub assemblies' },
  { id: 'mast', name: 'Mast & Lifting', icon: '⬆️', description: 'Mast rollers, fork arms, lift chains & mast bearings' },
  { id: 'seat', name: 'Seat & Cabin', icon: '🪑', description: 'Seat assemblies, safety belts, mirrors, joysticks & pedals' },
  { id: 'attachment', name: 'Attachments', icon: '🔩', description: 'Side shifters, fork positioners & rotators' },
  { id: 'heli-hangcha', name: 'Heli / Hangcha OEM', icon: '🏗️', description: 'Genuine OEM parts for Heli & Hangcha forklifts' },
  { id: 'other', name: 'Other Parts', icon: '📦', description: 'Bearings, fasteners, hydraulic hoses, seals & bushings' },
];

export const products: Product[] = [
  // ==========================================
  // 1. Maintenance Parts
  // ==========================================
  {
    id: 'filter-air',
    name: 'Air Filter Element',
    category: 'maintenance',
    description: 'High-efficiency air filter element for Hangcha & Heli 1-10T diesel/LPG forklifts. Multi-layer filtration media, excellent dust holding capacity.',
    image: '/images/products/filter-air.png',
    specs: ['OD: 120-280mm', 'Filtration: ≥99.5%', 'Material: Microfiber + metal mesh'],
  },
  {
    id: 'filter-oil',
    name: 'Engine Oil Filter',
    category: 'maintenance',
    description: 'Spin-on engine oil filter with high-performance filtration media. Removes contaminants, extends engine service life.',
    image: '/images/products/filter-oil.png',
    specs: ['Thread: M20×1.5 / 3/4-16UNF', 'Filtration rating: 25μm', 'Bypass valve: built-in'],
  },
  {
    id: 'filter-diesel',
    name: 'Diesel Fuel Filter',
    category: 'maintenance',
    description: 'Diesel fuel filter element with water separation. Protects injection system from contaminants & moisture.',
    image: '/images/products/filter-diesel.png',
    specs: ['Thread: M16×1.5 / 1-14UNS', 'Rating: 5-10μm', 'Water separation: ≥95%'],
  },
  {
    id: 'filter-water-separator',
    name: 'Oil-Water Separator',
    category: 'maintenance',
    description: 'Fuel water separator with integrated pre-filter. Effectively removes water from diesel, protecting injectors & pumps.',
    image: '/images/products/filter-water-separator.png',
    specs: ['Capacity: 200-500ml water bowl', 'Filtration: 10-30μm', 'Sensor: Water-in-fuel warning'],
  },
  {
    id: 'filter-hydraulic',
    name: 'Hydraulic Oil Filter',
    category: 'maintenance',
    description: 'Hydraulic oil suction strainer & return filter element. Precision mesh protects pumps & valves.',
    image: '/images/products/filter-hydraulic.png',
    specs: ['Rating: 60-100μm suction / 10μm return', 'Flow: 40-200L/min', 'Material: Stainless steel mesh'],
  },
  {
    id: 'filter-transmission',
    name: 'Transmission Oil Filter',
    category: 'maintenance',
    description: 'Transmission oil filter for powershift gearboxes. Ensures clean ATF circulation for clutch pack longevity.',
    image: '/images/products/filter-transmission.png',
    specs: ['Media: Synthetic fiber', 'Rating: 25μm', 'Includes: O-ring seal'],
  },

  // ==========================================
  // 2. Brake System
  // ==========================================
  {
    id: 'brake-master-cylinder',
    name: 'Brake Master Cylinder',
    category: 'brake',
    description: 'Hydraulic brake master cylinder with vacuum booster. Provides responsive braking for 1-10T forklifts.',
    image: '/images/products/brake-master-cylinder.png',
    specs: ['Bore: φ22-32mm', 'Type: Dual / Single circuit', 'Fluid: DOT3/DOT4'],
  },
  {
    id: 'brake-drum',
    name: 'Brake Drum Assembly',
    category: 'brake',
    description: 'Precision-machined cast iron brake drum. Excellent heat dissipation & wear resistance for heavy-duty braking.',
    image: '/images/products/brake-drum.png',
    specs: ['Diameter: φ260-φ400mm', 'Width: 50-80mm', 'Material: HT250 cast iron'],
  },
  {
    id: 'brake-shoe',
    name: 'Brake Shoe Set',
    category: 'brake',
    description: 'Bonded brake shoe assembly with non-asbestos friction material. Consistent friction coefficient across temperature range.',
    image: '/images/products/brake-shoe.png',
    specs: ['Width: 40-80mm', 'Material: Non-asbestos organic', 'Friction: 0.35-0.45μ'],
  },
  {
    id: 'brake-wheel-cylinder',
    name: 'Wheel Brake Cylinder',
    category: 'brake',
    description: 'Wheel cylinder for drum brake systems. Premium seals ensure leak-free long-term operation.',
    image: '/images/products/brake-wheel-cylinder.png',
    specs: ['Bore: φ19-φ28mm', 'Material: Cast iron / Aluminum', 'Includes: Dust boot, bleeder'],
  },
  {
    id: 'brake-handbrake',
    name: 'Hand Brake Assembly',
    category: 'brake',
    description: 'Parking brake lever with ratchet mechanism & cable connection. Ergonomic grip for easy engagement.',
    image: '/images/products/brake-handbrake.png',
    specs: ['Type: Ratchet lock', 'Cable length: Custom', 'Fits: 1-10T forklifts'],
  },
  {
    id: 'brake-booster',
    name: 'Brake Booster Pump',
    category: 'brake',
    description: 'Hydraulic brake booster providing power-assisted braking. Reduces pedal effort for operator comfort.',
    image: '/images/products/brake-booster.png',
    specs: ['Type: Vacuum / Hydraulic', 'Boost ratio: 3:1-5:1', 'Input: DOT3/DOT4 fluid'],
  },

  // ==========================================
  // 3. Steering & Drive Axle
  // ==========================================
  {
    id: 'steering-knuckle',
    name: 'Steering Knuckle',
    category: 'steering-axle',
    description: 'Complete steering knuckle assembly with bearings, seals & grease fittings. For smooth steering operation.',
    image: '/images/products/steering-knuckle.png',
    specs: ['Type: Left / Right', 'Taper: 1:8 / 1:10', 'Includes: Nut, cotter pin, grease zerk'],
  },
  {
    id: 'steering-kingpin',
    name: 'King Pin Kit',
    category: 'steering-axle',
    description: 'Steering king pin repair kit with thrust bearings & washers. Precision ground for exact OEM fit.',
    image: '/images/products/steering-kingpin.png',
    specs: ['Pin diameter: φ25-φ45mm', 'Material: 40Cr hardened', 'Includes: Bearings, washers, seals'],
  },
  {
    id: 'steering-cylinder',
    name: 'Steering Cylinder',
    category: 'steering-axle',
    description: 'Double-acting steering cylinder for rear axle. Hard chrome rod with premium seal kit.',
    image: '/images/products/steering-cylinder.png',
    specs: ['Bore: φ50-φ80mm', 'Stroke: 150-300mm', 'Mount: Trunnion / Clevis'],
  },
  {
    id: 'steering-link',
    name: 'Steering Link Rod',
    category: 'steering-axle',
    description: 'Adjustable steering tie rod / drag link assembly. Maintains proper wheel alignment & toe setting.',
    image: '/images/products/steering-link.png',
    specs: ['Length: 400-1200mm', 'Thread: M14-M24', 'End type: Ball joint / Clevis'],
  },
  {
    id: 'steering-axle-shaft',
    name: 'Drive Axle Half Shaft',
    category: 'steering-axle',
    description: 'Drive axle half shaft with CV joints. Transmits power from differential to wheel hubs.',
    image: '/images/products/steering-axle-shaft.png',
    specs: ['Spline: 24-30 tooth', 'Length: 400-800mm', 'Material: 40Cr / 20CrMnTi'],
  },
  {
    id: 'steering-hub',
    name: 'Wheel Hub Assembly',
    category: 'steering-axle',
    description: 'Drive/steering wheel hub with studs & bearings. Direct bolt-on for various axle configurations.',
    image: '/images/products/steering-hub.png',
    specs: ['Bolt pattern: 6/8/10-stud', 'PCD: φ180-φ335mm', 'Includes: Bearings, oil seal'],
  },

  // ==========================================
  // 4. Electrical & Electronic
  // ==========================================
  {
    id: 'elec-dashboard',
    name: 'Dashboard Instrument Panel',
    category: 'electrical',
    description: 'LCD + analog instrument cluster displaying fuel, temperature, hour meter & warning indicators. 12V/24V.',
    image: '/images/products/elec-dashboard.png',
    specs: ['Type: LCD + Analog hybrid', 'Voltage: 12V/24V DC', 'Functions: Fuel, temp, hours, warnings'],
  },
  {
    id: 'elec-combination-switch',
    name: 'Combination Switch',
    category: 'electrical',
    description: 'Multi-function steering column switch: turn signals, headlights, wiper & horn activation.',
    image: '/images/products/elec-combination-switch.png',
    specs: ['Functions: Turn/light/wiper/horn', 'Voltage: 12V/24V', 'Mount: Steering column clamp'],
  },
  {
    id: 'elec-ignition-switch',
    name: 'Ignition Switch',
    category: 'electrical',
    description: 'Key ignition switch with ACC-ON-START positions. Heavy-duty contacts for reliable starting.',
    image: '/images/products/elec-ignition-switch.png',
    specs: ['Positions: OFF-ACC-ON-START', 'Rated current: 30A', 'Terminals: 4-6 pin'],
  },
  {
    id: 'elec-controller',
    name: 'Controller Unit',
    category: 'electrical',
    description: 'MOSFET/AC traction & pump controller for electric forklifts. CAN bus interface, programmable.',
    image: '/images/products/elec-controller.png',
    specs: ['Voltage: 24V-80V DC', 'Current: 300-600A', 'Interface: CAN bus / Serial'],
  },
  {
    id: 'elec-sensor',
    name: 'Sensor Assembly',
    category: 'electrical',
    description: 'Various forklift sensors: temperature, pressure, speed, fuel level. Compatible with most models.',
    image: '/images/products/elec-sensor.png',
    specs: ['Types: Temp/Pressure/Speed/Level', 'Output: Analog / Digital', 'Connector: Various OEM'],
  },
  {
    id: 'elec-wiring-harness',
    name: 'Wiring Harness',
    category: 'electrical',
    description: 'Complete forklift wiring harness with labeled connectors. Plug-and-play installation, includes fuse box.',
    image: '/images/products/elec-wiring-harness.png',
    specs: ['Wire gauge: AWG 18-4', 'Connectors: Deutsch / Weatherpack', 'Includes: Fuse box, relays'],
  },

  // ==========================================
  // 5. Engine & Power
  // ==========================================
  {
    id: 'engine-assembly',
    name: 'Engine Assembly',
    category: 'engine',
    description: 'Complete diesel/LPG engine assemblies: 490BPG, 495BPG, 498BPG series. Drop-in replacement ready.',
    image: '/images/products/engine-assembly.png',
    specs: ['Model: 490/495/498 series', 'Power: 35-75kW', 'Fuel: Diesel / LPG / Gasoline'],
  },
  {
    id: 'engine-cylinder-liner',
    name: 'Cylinder Liner Kit',
    category: 'engine',
    description: '4-cylinder liner kit with pistons, rings & pins. Precision-honed liners for optimal sealing.',
    image: '/images/products/engine-cylinder-liner.png',
    specs: ['Bore: φ90-φ105mm', 'Material: Cast iron + Al-Si piston', 'Includes: Rings, pin, circlips'],
  },
  {
    id: 'engine-cylinder-head',
    name: 'Cylinder Head',
    category: 'engine',
    description: 'Complete cylinder head assembly with valves, springs & guides. Pressure tested & ready to install.',
    image: '/images/products/engine-cylinder-head.png',
    specs: ['Material: Cast iron / Aluminum', 'Valves: Intake + Exhaust', 'Includes: Gasket set'],
  },
  {
    id: 'engine-crankshaft',
    name: 'Crankshaft',
    category: 'engine',
    description: 'Forged steel crankshaft with precision-ground journals. Dynamically balanced for smooth operation.',
    image: '/images/products/engine-crankshaft.png',
    specs: ['Material: Forged 42CrMo', 'Journals: Main x5 / Rod x4', 'Stroke: 100-115mm'],
  },
  {
    id: 'engine-water-pump',
    name: 'Water Pump',
    category: 'engine',
    description: 'Centrifugal engine cooling pump with ceramic mechanical seal. High-flow, reliable circulation.',
    image: '/images/products/engine-water-pump.png',
    specs: ['Type: Centrifugal', 'Flow: 80-200L/min', 'Bearing: Double-row ball'],
  },
  {
    id: 'engine-oil-pump',
    name: 'Engine Oil Pump',
    category: 'engine',
    description: 'External gear-type oil pump. Maintains proper oil pressure at all engine speeds.',
    image: '/images/products/engine-oil-pump.png',
    specs: ['Type: External gear', 'Flow rate: 20-45L/min', 'Drive: Gear / Chain'],
  },
  {
    id: 'engine-injector',
    name: 'Fuel Injector',
    category: 'engine',
    description: 'Diesel fuel injector nozzle assembly. Precise spray pattern for optimal combustion.',
    image: '/images/products/engine-injector.png',
    specs: ['Type: Mechanical / Common rail', 'Pressure: 200-1600 bar', 'Nozzle: Single/multi-hole'],
  },
  {
    id: 'engine-glow-plug',
    name: 'Glow Plug',
    category: 'engine',
    description: 'Pre-heating glow plug for cold start assistance. Fast heat-up, long service life.',
    image: '/images/products/engine-glow-plug.png',
    specs: ['Voltage: 12V', 'Thread: M10×1.25', 'Heat time: 5-10 seconds'],
  },

  // ==========================================
  // 6. Transmission
  // ==========================================
  {
    id: 'transmission-assembly',
    name: 'Transmission Assembly',
    category: 'transmission',
    description: 'Complete powershift transmission with 1F+1R or 2F+2R speeds. Drop box output, direct bolt-on.',
    image: '/images/products/transmission-assembly.png',
    specs: ['Speeds: 1F+1R / 2F+2R', 'Capacity: 1-10T', 'Drop box ratio: 1:1 / 1.2:1'],
  },
  {
    id: 'transmission-torque-converter',
    name: 'Torque Converter',
    category: 'transmission',
    description: 'Hydraulic torque converter with stall ratio 2.8-3.2. Smooth power transfer, torque multiplication.',
    image: '/images/products/transmission-torque-converter.png',
    specs: ['Capacity: 1-10T', 'Stall ratio: 2.8-3.2', 'Input: 2800rpm max'],
  },
  {
    id: 'transmission-clutch-disc',
    name: 'Clutch Disc',
    category: 'transmission',
    description: 'Paper-based friction disc for transmission clutch packs. Consistent engagement characteristics.',
    image: '/images/products/transmission-clutch-disc.png',
    specs: ['OD: φ125-φ180mm', 'Material: Paper-based friction', 'Spline: Internal / External'],
  },
  {
    id: 'transmission-friction-plate',
    name: 'Friction Plate Set',
    category: 'transmission',
    description: 'Full set of friction + separator plates for clutch pack overhaul. Pre-matched for even wear.',
    image: '/images/products/transmission-friction-plate.png',
    specs: ['Disc count: 8-16 per set', 'Thickness: 1.5-2.5mm', 'Material: Paper + 65Mn steel'],
  },
  {
    id: 'transmission-gear',
    name: 'Transmission Gear',
    category: 'transmission',
    description: 'Precision-cut transmission gear for powershift gearbox. Hardened & ground tooth profile.',
    image: '/images/products/transmission-gear.png',
    specs: ['Module: 2.5-4', 'Tooth: 20-60 count', 'Material: 20CrMnTi carburized'],
  },
  {
    id: 'transmission-differential',
    name: 'Differential Assembly',
    category: 'transmission',
    description: 'Drive axle differential with side gears & spider. Allows wheel speed difference during cornering.',
    image: '/images/products/transmission-differential.png',
    specs: ['Type: Bevel gear', 'Ratio: 3.5:1-6.8:1', 'Capacity: 2-10T'],
  },

  // ==========================================
  // 7. Hydraulic System
  // ==========================================
  {
    id: 'hydraulic-gear-pump',
    name: 'Hydraulic Gear Pump',
    category: 'hydraulic',
    description: 'High-pressure aluminum gear pump: 16-50ml/r displacement. Working pressure up to 25MPa.',
    image: '/images/products/hydraulic-gear-pump.png',
    specs: ['Displacement: 16-50ml/r', 'Pressure: 20-25MPa', 'Shaft: Tapered / Splined / Straight'],
  },
  {
    id: 'hydraulic-control-valve',
    name: 'Multi-way Control Valve',
    category: 'hydraulic',
    description: '2-4 spool monoblock valve for lift, tilt & auxiliary functions. Manual or pilot control.',
    image: '/images/products/hydraulic-control-valve.png',
    specs: ['Spools: 2-4', 'Flow: 40-100L/min', 'Control: Manual / Pilot operated'],
  },
  {
    id: 'hydraulic-tilt-cylinder',
    name: 'Tilt Cylinder',
    category: 'hydraulic',
    description: 'Double-acting tilt cylinder. Chrome-plated rod, premium seals. Controls mast tilt angle.',
    image: '/images/products/hydraulic-tilt-cylinder.png',
    specs: ['Bore: φ50-φ100mm', 'Stroke: 100-250mm', 'Rod: Chrome φ30-φ55mm'],
  },
  {
    id: 'hydraulic-lift-cylinder',
    name: 'Lift Cylinder',
    category: 'hydraulic',
    description: 'Single-acting lift cylinder for mast elevation. Hard chrome rod, imported seal kit.',
    image: '/images/products/hydraulic-lift-cylinder.png',
    specs: ['Bore: φ63-φ140mm', 'Stroke: Per mast spec', 'Seal: Imported polyurethane'],
  },
  {
    id: 'hydraulic-steering-cylinder',
    name: 'Power Steering Cylinder',
    category: 'hydraulic',
    description: 'Double-acting steering cylinder with equal-area design. Smooth, responsive steering control.',
    image: '/images/products/hydraulic-steering-cylinder.png',
    specs: ['Bore: φ40-φ63mm', 'Stroke: ±100mm', 'Mount: Clevis both ends'],
  },
  {
    id: 'hydraulic-seal-kit',
    name: 'Hydraulic Seal Kit',
    category: 'hydraulic',
    description: 'Complete hydraulic cylinder seal kit. Premium PU & NBR materials, fits all standard cylinders.',
    image: '/images/products/hydraulic-seal-kit.png',
    specs: ['Material: PU / NBR / PTFE', 'Contents: Piston + Rod + Wiper + O-rings', 'Fits: All cylinder sizes'],
  },

  // ==========================================
  // 8. Wheels & Tires
  // ==========================================
  {
    id: 'wheel-pneumatic',
    name: 'Pneumatic Tire',
    category: 'wheel-tire',
    description: 'Heavy-duty pneumatic tire 28×9-15, 7.00-12 etc. Excellent traction on rough/uneven surfaces.',
    image: '/images/products/wheel-pneumatic.png',
    specs: ['Size: 28×9-15 / 7.00-12 / 8.25-15', 'Ply: 14-16PR', 'Tread: Traction / Smooth'],
  },
  {
    id: 'wheel-solid',
    name: 'Solid Tire',
    category: 'wheel-tire',
    description: 'Press-on solid tire 6.50-10, 7.00-12. Puncture-proof for warehouse & indoor applications.',
    image: '/images/products/wheel-solid.png',
    specs: ['Size: 6.50-10 / 7.00-12', 'Compound: Natural rubber', 'Hardness: 70-85 Shore A'],
  },
  {
    id: 'wheel-rim',
    name: 'Wheel Rim',
    category: 'wheel-tire',
    description: 'Steel wheel rim for pneumatic & solid tires. 4.00E-9 to 8.00-15 sizes available.',
    image: '/images/products/wheel-rim.png',
    specs: ['Size: 4.00E-9 to 8.00-15', 'Bolt: 6/8/10 stud', 'Material: Q235 steel'],
  },
  {
    id: 'wheel-hub-assy',
    name: 'Wheel Hub Assembly',
    category: 'wheel-tire',
    description: 'Complete wheel hub with bearings pre-installed. Direct bolt-on, factory pre-greased.',
    image: '/images/products/wheel-hub-assy.png',
    specs: ['Capacity: 1-10T', 'Bearings: Pre-installed', 'Includes: Oil seal, castle nut'],
  },
  {
    id: 'wheel-bolt',
    name: 'Wheel Bolt & Nut Set',
    category: 'wheel-tire',
    description: 'High-strength wheel studs & lug nuts. Metric fine thread for secure wheel mounting.',
    image: '/images/products/wheel-bolt.png',
    specs: ['Size: M14×1.5 / M18×1.5', 'Grade: 10.9', 'Finish: Zinc-plated'],
  },

  // ==========================================
  // 9. Mast & Lifting
  // ==========================================
  {
    id: 'mast-roller',
    name: 'Mast Roller Bearing',
    category: 'mast',
    description: 'Heavy-duty mast roller with double-lip seals. Handles radial & axial loads for smooth mast movement.',
    image: '/images/products/mast-roller.png',
    specs: ['OD: φ60-φ120mm', 'Type: Ball / Tapered roller', 'Seal: Double-lip rubber'],
  },
  {
    id: 'mast-fork',
    name: 'Fork Arm',
    category: 'mast',
    description: 'Forged fork arm, ISO 2330 compliant. Various lengths & capacities for all forklift classes.',
    image: '/images/products/mast-fork.png',
    specs: ['Length: 1000-2400mm', 'Capacity: 2-10T per pair', 'Class: ISO 2A/3A/4A'],
  },
  {
    id: 'mast-chain',
    name: 'Lifting Chain',
    category: 'mast',
    description: 'Leaf chain LH0844/LH1044/LH1244 for mast lifting. High tensile strength, corrosion-resistant.',
    image: '/images/products/mast-chain.png',
    specs: ['Pitch: LH0844/LH1044/LH1244', 'Tensile: 80-200kN', 'Finish: Zinc-plated'],
  },
  {
    id: 'mast-side-roller',
    name: 'Side Roller Assembly',
    category: 'mast',
    description: 'Mast side roller complete with bearing & shaft. Maintains proper clearance between mast sections.',
    image: '/images/products/mast-side-roller.png',
    specs: ['OD: φ40-φ80mm', 'Type: Sealed ball bearing', 'Includes: Shaft, snap rings'],
  },
  {
    id: 'mast-bearing',
    name: 'Mast Bearing',
    category: 'mast',
    description: 'Thrust & radial bearing set for mast assembly. Premium quality, extended service life.',
    image: '/images/products/mast-bearing.png',
    specs: ['Types: Thrust ball / Taper roller', 'Bore: Various', 'Brand: SKF/NSK/KOYO equivalent'],
  },

  // ==========================================
  // 10. Seat & Cabin
  // ==========================================
  {
    id: 'seat-assembly',
    name: 'Seat Assembly',
    category: 'seat',
    description: 'Ergonomic forklift seat with mechanical suspension. Adjustable backrest, slide & weight setting.',
    image: '/images/products/seat-assembly.png',
    specs: ['Suspension: Mechanical spring', 'Adjustment: Slide + Backrest + Weight', 'Certification: ISO 7096'],
  },
  {
    id: 'seat-belt',
    name: 'Safety Belt',
    category: 'seat',
    description: '3-point retractable seat belt with ELR (Emergency Locking Retractor). Essential safety equipment.',
    image: '/images/products/seat-belt.png',
    specs: ['Type: 3-point retractable', 'Buckle: Push-button release', 'Length: 1500-2000mm'],
  },
  {
    id: 'cabin-mirror',
    name: 'Rear View Mirror',
    category: 'seat',
    description: 'Wide-angle rear view mirror with adjustable ball joint mount. Anti-glare glass option available.',
    image: '/images/products/cabin-mirror.png',
    specs: ['Size: 200×150mm', 'Type: Flat / Convex', 'Mount: Ball joint adjustable'],
  },
  {
    id: 'cabin-joystick',
    name: 'Control Joystick',
    category: 'seat',
    description: 'Ergonomic hydraulic joystick for lift/tilt/side-shift control. Integrated buttons for attachments.',
    image: '/images/products/cabin-joystick.png',
    specs: ['Functions: 2-4 axis', 'Type: Hydraulic cable / Electronic', 'Mount: Armrest / Console'],
  },
  {
    id: 'cabin-pedal',
    name: 'Accelerator Pedal',
    category: 'seat',
    description: 'Electronic accelerator pedal assembly with Hall-effect sensor. Smooth, precise engine speed control.',
    image: '/images/products/cabin-pedal.png',
    specs: ['Type: Electronic (Hall sensor)', 'Output: 0.5-4.5V', 'Mount: Floor-mounted'],
  },

  // ==========================================
  // 11. Attachments
  // ==========================================
  {
    id: 'attach-sideshift',
    name: 'Sideshift Attachment',
    category: 'attachment',
    description: 'Hydraulic sideshift ±100mm lateral fork movement. Increases pallet handling efficiency.',
    image: '/images/products/attach-sideshift.png',
    specs: ['Shift: ±100mm', 'Capacity: 2-5T', 'Mounting: ISO 2A/3A class'],
  },
  {
    id: 'attach-fork-positioner',
    name: 'Fork Positioner',
    category: 'attachment',
    description: 'Hydraulic fork positioner for adjustable fork spread from operator seat. Handles various pallet sizes.',
    image: '/images/products/attach-fork-positioner.png',
    specs: ['Range: 300-1800mm', 'Capacity: 2-5T', 'Operation: Hydraulic cylinder'],
  },
  {
    id: 'attach-rotator',
    name: 'Fork Rotator',
    category: 'attachment',
    description: '360° continuous hydraulic rotator for dumping & pouring operations. Bi-directional rotation.',
    image: '/images/products/attach-rotator.png',
    specs: ['Rotation: 360° continuous', 'Capacity: 1.5-3T', 'Motor: Hydraulic gerotor'],
  },

  // ==========================================
  // 12. Heli / Hangcha OEM
  // ==========================================
  {
    id: 'oem-hangcha-parts',
    name: 'Hangcha Genuine Parts',
    category: 'heli-hangcha',
    description: 'OEM-spec Hangcha forklift parts: filters, seals, brake components. Direct fit, no modification needed.',
    image: '/images/products/oem-hangcha-parts.png',
    specs: ['Fits: Hangcha A/XF/G series', 'Type: OEM equivalent', 'Range: 1-10T'],
  },
  {
    id: 'oem-heli-parts',
    name: 'Heli Genuine Parts',
    category: 'heli-hangcha',
    description: 'OEM-spec Heli forklift parts: master cylinders, seal kits, filters. Matches Heli factory specifications.',
    image: '/images/products/oem-heli-parts.png',
    specs: ['Fits: Heli H2000/G series', 'Type: OEM equivalent', 'Range: 1-10T'],
  },
  {
    id: 'oem-oem-kit',
    name: 'OEM Service Kit',
    category: 'heli-hangcha',
    description: 'Complete OEM service kit with filters, seals & gaskets for routine maintenance of Hangcha & Heli forklifts.',
    image: '/images/products/oem-oem-kit.png',
    specs: ['Contents: Filters + seals + gaskets', 'Models: Various Hangcha & Heli', 'Application: 500hr service'],
  },

  // ==========================================
  // 13. Other Parts
  // ==========================================
  {
    id: 'other-bearing',
    name: 'Bearing Assembly',
    category: 'other',
    description: 'Assorted forklift bearings: ball, roller, taper types. Premium brand quality for mast, steering & transmission.',
    image: '/images/products/other-bearing.png',
    specs: ['Types: Ball / Roller / Taper', 'Sizes: Various', 'Brand: NSK/SKF/KOYO equivalent'],
  },
  {
    id: 'other-fastener',
    name: 'Bolt & Fastener Kit',
    category: 'other',
    description: 'High-strength fastener kit Grade 8.8/10.9/12.9. Zinc, black oxide & Dacromet finishes.',
    image: '/images/products/other-fastener.png',
    specs: ['Grades: 8.8 / 10.9 / 12.9', 'Sizes: M6-M24', 'Finish: Zinc / Black oxide / Dacromet'],
  },
  {
    id: 'other-hose',
    name: 'Hydraulic Hose Assembly',
    category: 'other',
    description: 'High-pressure hydraulic hose with crimped fittings. Custom lengths, 1-2 wire braid construction.',
    image: '/images/products/other-hose.png',
    specs: ['Pressure: 1-2 wire braid', 'ID: 1/4" - 1"', 'Fittings: JIC / BSP / ORFS'],
  },
  {
    id: 'other-seal',
    name: 'Oil Seal Set',
    category: 'other',
    description: 'Assorted oil seals for forklift axles, transmission & engine. NBR & FKM materials.',
    image: '/images/products/other-seal.png',
    specs: ['Material: NBR / FKM', 'Types: TC / SC / TB profile', 'Sizes: Various metric'],
  },
  {
    id: 'other-bushing',
    name: 'Bushing & Shim Kit',
    category: 'other',
    description: 'Bronze & steel bushings, adjustment shims for steering, mast & linkage assemblies.',
    image: '/images/products/other-bushing.png',
    specs: ['Material: Bronze / Steel', 'Types: Plain / Flanged / Thrust', 'Thickness: 0.1-3.0mm shims'],
  },
];
