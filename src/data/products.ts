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
  { id: 'maintenance', name: 'Maintenance Parts', icon: '🔧', description: 'Air filters, oil filters, fuel filters, water separators & special fluids' },
  { id: 'brake', name: 'Brake System', icon: '🛑', description: 'Master cylinders, brake drums, shoes, cables & complete brake assemblies' },
  { id: 'steering-axle', name: 'Steering & Drive Axle', icon: '🔄', description: 'Steering joints, king pins, tie rods, half shafts & axle housings' },
  { id: 'electrical', name: 'Electrical & Electronic', icon: '⚡', description: 'Dashboards, switches, controllers, alternators, lighting & wiring' },
  { id: 'engine', name: 'Engine & Power', icon: '🏭', description: 'Engine assemblies, cylinder kits, pumps, radiators & injectors' },
  { id: 'transmission', name: 'Transmission', icon: '⚙️', description: 'Torque converters, clutch packs, control valves & gearboxes' },
  { id: 'hydraulic', name: 'Hydraulic System', icon: '💧', description: 'Pumps, cylinders, valves, seals & hose assemblies' },
  { id: 'wheel-tire', name: 'Wheels & Tires', icon: '🛞', description: 'Pneumatic tires, solid tires, wheel rims & inner tubes' },
  { id: 'mast', name: 'Mast & Lifting', icon: '⬆️', description: 'Mast rollers, fork arms, lift chains & carriages' },
  { id: 'seat', name: 'Seat & Cabin', icon: '🪑', description: 'Seat assemblies, seat belts & cabin mounts' },
  { id: 'attachment', name: 'Attachments', icon: '🔩', description: 'Side shifters, fork positioners & rotators' },
  { id: 'heli-hangcha', name: 'Heli / Hangcha OEM', icon: '🏗️', description: 'Genuine OEM parts for Heli & Hangcha forklifts' },
  { id: 'other', name: 'Other Parts', icon: '📦', description: 'Bearings, fasteners, hydraulic hoses & exhaust components' },
];

export const products: Product[] = [
  // ==========================================
  // 1. Maintenance Parts (13 products)
  // ==========================================
  {
    id: 'air-filter',
    name: 'Air Filter Element',
    category: 'maintenance',
    description: 'High-efficiency air filter elements for Hangcha/Heli 1-10 ton diesel & LPG forklifts. Multi-layer filtration with excellent dust holding capacity.',
    image: '/images/products/air-filter.png',
    specs: ['Outer diameter: 120-280mm', 'Filtration efficiency: ≥99.5%', 'Material: Microfiber + metal mesh'],
  },
  {
    id: 'oil-filter-2',
    name: 'Engine Oil Filter',
    category: 'maintenance',
    description: 'Spin-on engine oil filter with high-performance filtration media. Removes contaminants to extend engine life.',
    image: '/images/products/oil-filter-2.png',
    specs: ['Thread: M20×1.5 / 3/4-16UNF', 'Filtration rating: 25μm', 'Bypass valve: Yes'],
  },
  {
    id: 'fuel-filter',
    name: 'Diesel Fuel Filter',
    category: 'maintenance',
    description: 'Diesel fuel filter element with water separation capability. Protects injection system from contaminants.',
    image: '/images/products/fuel-filter.png',
    specs: ['Thread: M16×1.5 / 1-14UNS', 'Filtration rating: 5-10μm', 'Water separation: ≥95%'],
  },
  {
    id: 'air-filter-housing',
    name: 'Air Filter Housing & Accessories',
    category: 'maintenance',
    description: 'Complete air filter housing assembly with mounting brackets. Dust-proof and weather-resistant design.',
    image: '/images/products/air-filter-housing.png',
    specs: ['Material: Steel / Plastic', 'Inlet/Outlet: Φ60-120mm', 'Includes: Cover, clamp, bracket'],
  },
  {
    id: 'oil-strainer',
    name: 'Oil Strainer / Mesh Filter',
    category: 'maintenance',
    description: 'Hydraulic oil suction strainer and return line filter. Precision mesh prevents contamination in hydraulic systems.',
    image: '/images/products/oil-strainer.png',
    specs: ['Filtration rating: 60-100μm', 'Flow rate: 40-200L/min', 'Material: Stainless steel mesh'],
  },
  {
    id: 'water-separator',
    name: 'Fuel Water Separator',
    category: 'maintenance',
    description: 'Fuel water separator with integrated pre-filter. Effectively separates water from diesel fuel to protect injection system.',
    image: '/images/products/water-separator.png',
    specs: ['Capacity: 200-500ml water bowl', 'Filtration: 10-30μm', 'Sensor: Water-in-fuel warning'],
  },
  {
    id: 'filter-body',
    name: 'Filter Housing Assembly',
    category: 'maintenance',
    description: 'Replacement filter housing body for various forklift engine types. Direct fit, no modification needed.',
    image: '/images/products/filter-body.png',
    specs: ['Material: Cast aluminum', 'Connection: Thread-on / Cartridge', 'Includes: O-ring, gasket'],
  },
  {
    id: 'forklift-oil',
    name: 'Special Oil & Antifreeze',
    category: 'maintenance',
    description: 'High-performance hydraulic oil, transmission fluid, and engine coolant specifically formulated for forklift applications.',
    image: '/images/products/forklift-oil.png',
    specs: ['Hydraulic oil: ISO VG32/46/68', 'Transmission fluid: ATF/UTF', 'Coolant: -35°C to +110°C'],
  },

  // ==========================================
  // 2. Brake System (8 products)
  // ==========================================
  {
    id: 'hand-brake',
    name: 'Hand Brake Lever',
    category: 'brake',
    description: 'Hand brake lever assembly with parking brake cable. Ergonomic design with ratchet locking mechanism.',
    image: '/images/products/hand-brake.png',
    specs: ['Type: Ratchet lock', 'Cable length: Custom', 'Fits: 1-10T forklifts'],
  },
  {
    id: 'brake-master',
    name: 'Brake Master Cylinder / Booster',
    category: 'brake',
    description: 'Hydraulic brake master cylinder with vacuum booster. Provides strong and responsive braking performance.',
    image: '/images/products/brake-master.png',
    specs: ['Bore: φ22-32mm', 'Type: Dual circuit / Single circuit', 'Fluid: DOT3/DOT4'],
  },
  {
    id: 'brake-wheel-cyl',
    name: 'Wheel Brake Cylinder',
    category: 'brake',
    description: 'Wheel brake cylinder for drum brake systems. High-quality seals ensure leak-free operation.',
    image: '/images/products/brake-wheel-cyl.png',
    specs: ['Bore: φ19-φ28mm', 'Material: Cast iron / Aluminum', 'Includes: Dust boot, bleeder screw'],
  },
  {
    id: 'brake-drum',
    name: 'Brake Drum',
    category: 'brake',
    description: 'Cast iron brake drum with precision machined inner surface. High heat dissipation and wear resistance.',
    image: '/images/products/brake-drum.png',
    specs: ['Diameter: φ260-φ400mm', 'Width: 50-80mm', 'Material: HT250 cast iron'],
  },
  {
    id: 'brake-shoe',
    name: 'Brake Shoe / Caliper Assembly',
    category: 'brake',
    description: 'Brake shoe assembly with bonded friction material. Asbestos-free, high friction coefficient.',
    image: '/images/products/brake-shoe.png',
    specs: ['Width: 40-80mm', 'Material: Non-asbestos organic', 'Friction coefficient: 0.35-0.45'],
  },
  {
    id: 'brake-cable',
    name: 'Brake Cable',
    category: 'brake',
    description: 'Parking brake cable with PTFE inner lining for smooth operation. Various lengths available.',
    image: '/images/products/brake-cable.png',
    specs: ['Cable diameter: φ3-5mm', 'Outer sheath: PVC coated', 'End fitting: Ball / Clevis'],
  },
  {
    id: 'brake-assembly',
    name: 'Brake Assembly & Parts',
    category: 'brake',
    description: 'Complete brake assembly including all mounting hardware. Direct bolt-on replacement for major forklift models.',
    image: '/images/products/brake-assembly.png',
    specs: ['Type: Drum / Wet disc', 'Capacity: 1-10T', 'Includes: All seals, springs, hardware'],
  },
  {
    id: 'brake-disc',
    name: 'Brake Disc Plate',
    category: 'brake',
    description: 'Wet brake disc plate set for forklift drive axles. High-quality sintered friction material.',
    image: '/images/products/brake-disc.png',
    specs: ['OD: φ160-φ280mm', 'Thickness: 2.5-4.0mm', 'Material: Sintered bronze + steel'],
  },

  // ==========================================
  // 3. Steering & Drive Axle (7 products)
  // ==========================================
  {
    id: 'steering-joint',
    name: 'Steering Joint & Accessories',
    category: 'steering-axle',
    description: 'Complete steering joint assembly with bearings, seals, and grease fittings. Smooth steering operation.',
    image: '/images/products/steering-joint.png',
    specs: ['Type: Knuckle / Ball joint', 'Taper: 1:8 / 1:10', 'Includes: Nut, cotter pin, grease zerk'],
  },
  {
    id: 'king-pin',
    name: 'King Pin Set',
    category: 'steering-axle',
    description: 'Steering king pin kit with bearings and thrust washers. Precision ground for exact fit.',
    image: '/images/products/king-pin.png',
    specs: ['Pin diameter: φ25-φ45mm', 'Material: 40Cr hardened', 'Includes: Bearings, washers, seals'],
  },
  {
    id: 'tie-rod',
    name: 'Tie Rod / Drag Link',
    category: 'steering-axle',
    description: 'Steering tie rod assembly with adjustable ends. Maintains proper wheel alignment and toe settings.',
    image: '/images/products/tie-rod.png',
    specs: ['Length: 400-1200mm', 'Thread: M14-M24', 'End type: Ball joint / Clevis'],
  },
  {
    id: 'steering-wheel',
    name: 'Steering Wheel & Accessories',
    category: 'steering-axle',
    description: 'Steering wheel with ergonomic grip. Compatible with steering knob spinner for one-hand operation.',
    image: '/images/products/steering-wheel.png',
    specs: ['Diameter: φ350-φ400mm', 'Spline: 36-tooth', 'Material: Polyurethane + steel core'],
  },
  {
    id: 'steering-axle-housing',
    name: 'Steering Axle Housing',
    category: 'steering-axle',
    description: 'Rear steering axle beam housing. Heavy-duty cast construction for maximum durability.',
    image: '/images/products/steering-axle-housing.png',
    specs: ['Material: Cast steel', 'Capacity: 1.5-10T', 'Type: Center-pivot / Dual-cylinder'],
  },
  {
    id: 'drive-hub',
    name: 'Drive Hub / Steering Hub',
    category: 'steering-axle',
    description: 'Drive wheel hub assembly with wheel studs and bearings. Fits various axle configurations.',
    image: '/images/products/drive-hub.png',
    specs: ['Bolt pattern: 6/8/10-stud', 'PCD: φ180-φ335mm', 'Includes: Bearings, oil seal'],
  },
  {
    id: 'half-shaft',
    name: 'Half Shaft / Axle Shaft',
    category: 'steering-axle',
    description: 'Drive axle half shaft with CV joints. Transmits power from differential to wheel hubs.',
    image: '/images/products/half-shaft.png',
    specs: ['Spline: 24-30 tooth', 'Length: 400-800mm', 'Material: 40Cr / 20CrMnTi'],
  },

  // ==========================================
  // 4. Electrical & Electronic (8 products)
  // ==========================================
  {
    id: 'dashboard',
    name: 'Instrument Panel / Gauge',
    category: 'electrical',
    description: 'LCD and analog instrument cluster displaying fuel level, engine temperature, hour meter, and warning indicators.',
    image: '/images/products/dashboard.png',
    specs: ['Type: LCD + Analog hybrid', 'Voltage: 12V/24V DC', 'Functions: Fuel, temp, hours, warnings'],
  },
  {
    id: 'ignition-switch',
    name: 'Ignition / Start Switch',
    category: 'electrical',
    description: 'Key ignition switch with ACC-ON-START positions. Heavy-duty contacts for consistent starting.',
    image: '/images/products/ignition-switch.png',
    specs: ['Positions: OFF-ACC-ON-START', 'Rated current: 30A', 'Terminals: 4-6 pin'],
  },
  {
    id: 'battery',
    name: 'Storage Battery',
    category: 'electrical',
    description: 'Maintenance-free lead-acid battery for IC forklifts. High CCA rating for reliable cold starts.',
    image: '/images/products/battery.png',
    specs: ['Voltage: 12V', 'Capacity: 60-120Ah', 'CCA: 550-900A'],
  },
  {
    id: 'alternator',
    name: 'Alternator / Starter Motor',
    category: 'electrical',
    description: 'High-output alternator with built-in voltage regulator. Keeps battery charged during operation.',
    image: '/images/products/alternator.png',
    specs: ['Voltage: 12V/14V', 'Current: 55-120A', 'Rotation: CW (standard)'],
  },
  {
    id: 'lighting',
    name: 'Lighting Assembly',
    category: 'electrical',
    description: 'LED and halogen lighting kits for forklifts. Including headlights, tail lights, warning beacons, and work lights.',
    image: '/images/products/lighting.png',
    specs: ['Type: LED / Halogen', 'Voltage: 12V/24V', 'IP rating: IP67'],
  },
  {
    id: 'contactor',
    name: 'Electrical Contactor',
    category: 'electrical',
    description: 'Heavy-duty DC contactor for electric forklift power control. High current capacity with arc suppression.',
    image: '/images/products/contactor.png',
    specs: ['Coil: 12V/24V/48V DC', 'Current: 100-400A', 'Type: SPST NO'],
  },
  {
    id: 'controller',
    name: 'Electronic Controller',
    category: 'electrical',
    description: 'MOSFET/AC motor controller for electric forklift traction and pump systems. Programmable parameters.',
    image: '/images/products/controller.png',
    specs: ['Voltage: 24V-80V', 'Current: 300-600A', 'Interface: CAN bus / Serial'],
  },
  {
    id: 'wiring-harness',
    name: 'Wiring Harness',
    category: 'electrical',
    description: 'Complete forklift wiring harness with labeled connectors. Plug-and-play installation.',
    image: '/images/products/wiring-harness.png',
    specs: ['Wire gauge: AWG 18-4', 'Connectors: Weatherpack / Deutsch', 'Includes: Fuse box, relays'],
  },

  // ==========================================
  // 5. Engine & Power (8 products)
  // ==========================================
  {
    id: 'engine-assembly',
    name: 'Engine Assembly',
    category: 'engine',
    description: 'Complete diesel/LPG engine assembly for forklift replacement. 490BPG, 495BPG, 498BPG and other series available.',
    image: '/images/products/engine-assembly.png',
    specs: ['Model: 490/495/498 series', 'Power: 35-75kW', 'Fuel: Diesel / LPG / Gasoline'],
  },
  {
    id: 'cylinder-kit',
    name: 'Cylinder Liner / Piston Kit',
    category: 'engine',
    description: 'Engine cylinder liner kit with pistons, rings, and pins. Precision-honed liners for optimal sealing.',
    image: '/images/products/cylinder-kit.png',
    specs: ['Bore: φ90-φ105mm', 'Material: Cast iron liner + Al-Si piston', 'Includes: Rings, pin, circlips'],
  },
  {
    id: 'oil-pump',
    name: 'Engine Oil Pump',
    category: 'engine',
    description: 'Gear-type engine oil pump ensuring proper lubrication to all engine components at all RPMs.',
    image: '/images/products/oil-pump.png',
    specs: ['Type: External gear', 'Flow rate: 20-45L/min', 'Drive: Gear / Chain'],
  },
  {
    id: 'crankshaft',
    name: 'Crankshaft / Camshaft',
    category: 'engine',
    description: 'Forged steel crankshaft with precision-ground journals. Balanced for smooth engine operation.',
    image: '/images/products/crankshaft.png',
    specs: ['Material: Forged 42CrMo', 'Journals: Main x5 / Rod x4', 'Stroke: 100-115mm'],
  },
  {
    id: 'water-pump',
    name: 'Water Pump',
    category: 'engine',
    description: 'Engine cooling water pump with ceramic mechanical seal. Reliable coolant circulation.',
    image: '/images/products/water-pump.png',
    specs: ['Type: Centrifugal', 'Flow rate: 80-200L/min', 'Bearing: Double-row ball'],
  },
  {
    id: 'radiator',
    name: 'Radiator / Water Tank',
    category: 'engine',
    description: 'Aluminum radiator with high-density fin core. Efficient engine cooling for continuous operation.',
    image: '/images/products/radiator.png',
    specs: ['Core size: Custom', 'Material: Aluminum', 'Rows: 2-4 row'],
  },
  {
    id: 'fuel-injector',
    name: 'Fuel Injector / Pump',
    category: 'engine',
    description: 'Diesel fuel injector nozzle and high-pressure pump. Precise fuel delivery for optimal combustion.',
    image: '/images/products/fuel-injector.png',
    specs: ['Type: Mechanical / Common rail', 'Pressure: 200-1600 bar', 'Nozzle: Single/multi-hole'],
  },
  {
    id: 'fan-belt',
    name: 'Fan Belt / Pulley',
    category: 'engine',
    description: 'V-ribbed fan belt with matching tensioner pulley. Quiet operation with long service life.',
    image: '/images/products/fan-belt.png',
    specs: ['Profile: V-belt / PK ribbed', 'Length: 800-1400mm', 'Material: EPDM + polyester cord'],
  },

  // ==========================================
  // 6. Transmission (7 products)
  // ==========================================
  {
    id: 'torque-converter',
    name: 'Hydraulic Torque Converter',
    category: 'transmission',
    description: 'Hydraulic torque converter for powershift transmissions. Smooth power transfer with torque multiplication.',
    image: '/images/products/torque-converter.png',
    specs: ['Capacity: 1-10T', 'Stall ratio: 2.8-3.2', 'Input speed: 2800rpm max'],
  },
  {
    id: 'gear-pump',
    name: 'Transmission Oil Pump',
    category: 'transmission',
    description: 'Transmission charge pump providing hydraulic pressure for clutch engagement and lubrication.',
    image: '/images/products/gear-pump.png',
    specs: ['Displacement: 16-32ml/r', 'Pressure: 1.5-2.5MPa', 'Rotation: CW/CCW'],
  },
  {
    id: 'clutch-pack',
    name: 'Clutch Pack / Friction Disc',
    category: 'transmission',
    description: 'Complete clutch pack assembly with friction discs and separator plates. Smooth engagement for forward/reverse shifting.',
    image: '/images/products/clutch-pack.png',
    specs: ['Disc count: 4-8 per pack', 'Material: Paper-based friction', 'OD: φ125-φ180mm'],
  },
  {
    id: 'clutch-plate',
    name: 'Clutch Separator Plate',
    category: 'transmission',
    description: 'Steel separator plate for transmission clutch packs. Precision flat for consistent clutch engagement.',
    image: '/images/products/clutch-plate.png',
    specs: ['Thickness: 1.5-2.5mm', 'Material: 65Mn steel', 'Hardness: HRC 38-45'],
  },
  {
    id: 'control-valve',
    name: 'Control Valve / Modulator',
    category: 'transmission',
    description: 'Transmission hydraulic control valve regulating clutch pressure and shift timing.',
    image: '/images/products/control-valve.png',
    specs: ['Type: Electro-hydraulic', 'Voltage: 12V/24V DC', 'Pressure range: 0.5-2.0MPa'],
  },
  {
    id: 'transmission-assy',
    name: 'Transmission Assembly',
    category: 'transmission',
    description: 'Complete powershift transmission assembly. 1-2 speed forward/reverse with drop box output.',
    image: '/images/products/transmission-assy.png',
    specs: ['Speeds: 1F+1R / 2F+2R', 'Capacity: 1-10T', 'Drop box ratio: 1:1 / 1.2:1'],
  },
  {
    id: 'shift-lever',
    name: 'Gear Shift Lever',
    category: 'transmission',
    description: 'Transmission shift lever assembly with F-N-R control. Direct mount or cable-operated options.',
    image: '/images/products/shift-lever.png',
    specs: ['Type: Column / Dash mount', 'Positions: F-N-R', 'Switch: Neutral safety switch built-in'],
  },

  // ==========================================
  // 7. Hydraulic System (8 products)
  // ==========================================
  {
    id: 'hydraulic-pump',
    name: 'Gear Pump / Hydraulic Pump',
    category: 'hydraulic',
    description: 'High-pressure hydraulic gear pump for forklift working hydraulics. Various displacements and rotations available.',
    image: '/images/products/hydraulic-pump.png',
    specs: ['Displacement: 16-50ml/r', 'Pressure: 20-25MPa', 'Shaft: Tapered / Splined / Straight'],
  },
  {
    id: 'steering-unit',
    name: 'Steering Unit / Orbitrol',
    category: 'hydraulic',
    description: 'Hydraulic orbitrol steering unit with load reaction. Precise steering control with emergency manual capability.',
    image: '/images/products/steering-unit.png',
    specs: ['Displacement: 80-200ml/r', 'Type: Open center', 'Ports: P,T,L,R (4-port)'],
  },
  {
    id: 'multi-valve',
    name: 'Multi-Spool Control Valve',
    category: 'hydraulic',
    description: '2-4 spool monoblock directional control valve for lift, tilt, and auxiliary functions.',
    image: '/images/products/multi-valve.png',
    specs: ['Spools: 2-4', 'Flow rate: 40-100L/min', 'Control: Manual / Pilot'],
  },
  {
    id: 'relief-valve',
    name: 'Relief Valve / Pressure Valve',
    category: 'hydraulic',
    description: 'Hydraulic relief valve protecting system from over-pressure. Adjustable setting with anti-tamper cap.',
    image: '/images/products/relief-valve.png',
    specs: ['Type: Direct-acting / Pilot', 'Pressure range: 5-25MPa', 'Port size: G1/4-G1/2'],
  },
  {
    id: 'tilt-cylinder',
    name: 'Tilt Cylinder Assembly',
    category: 'hydraulic',
    description: 'Double-acting tilt cylinder with chrome-plated rod. Controls mast forward/backward tilt angle.',
    image: '/images/products/tilt-cylinder.png',
    specs: ['Bore: φ50-φ100mm', 'Stroke: 100-250mm', 'Rod: Chrome-plated φ30-φ55mm'],
  },
  {
    id: 'lift-cylinder',
    name: 'Lift Cylinder Assembly',
    category: 'hydraulic',
    description: 'Single-acting lift cylinder for mast elevation. Hard chrome-plated rod with premium seal kit.',
    image: '/images/products/lift-cylinder.png',
    specs: ['Bore: φ63-φ140mm', 'Stroke: Per mast spec', 'Seal kit: Imported polyurethane'],
  },
  {
    id: 'side-shift-cyl',
    name: 'Side Shift Cylinder',
    category: 'hydraulic',
    description: 'Double-acting side shift cylinder for fork positioning. Compact design for attachment integration.',
    image: '/images/products/side-shift-cyl.png',
    specs: ['Bore: φ40-φ63mm', 'Stroke: ±100mm', 'Mounting: Trunnion / Clevis'],
  },
  {
    id: 'hydraulic-seal',
    name: 'Hydraulic Seal Kit',
    category: 'hydraulic',
    description: 'Complete seal kit for hydraulic cylinders. Premium polyurethane and NBR materials for long service life.',
    image: '/images/products/hydraulic-seal.png',
    specs: ['Material: PU / NBR / PTFE', 'Type: Piston + Rod + Wiper', 'Fits: All standard cylinders'],
  },

  // ==========================================
  // 8. Wheels & Tires (4 products)
  // ==========================================
  {
    id: 'pneumatic-tire-28',
    name: 'Pneumatic Tire 28×9-15',
    category: 'wheel-tire',
    description: 'Heavy-duty pneumatic tire 28×9-15 for large forklifts. Excellent traction on rough terrain.',
    image: '/images/products/pneumatic-tire-28.png',
    specs: ['Size: 28×9-15', 'Ply rating: 14-16PR', 'Tread: Traction / Smooth'],
  },
  {
    id: 'solid-tire-650',
    name: 'Solid Tire 6.50-10',
    category: 'wheel-tire',
    description: 'Cushion solid tire 6.50-10 for 1-3 ton forklifts. Puncture-proof, ideal for warehouse use.',
    image: '/images/products/solid-tire-650.png',
    specs: ['Size: 6.50-10', 'Compound: Natural rubber', 'Hardness: 70-85 Shore A'],
  },
  {
    id: 'wheel-rim',
    name: 'Forklift Wheel Rim',
    category: 'wheel-tire',
    description: 'Steel wheel rim for pneumatic and solid tires. Various sizes for different forklift capacities.',
    image: '/images/products/wheel-rim.png',
    specs: ['Size: 4.00E-9 to 8.00-15', 'Bolt pattern: 6/8/10 stud', 'Material: Q235 steel'],
  },
  {
    id: 'tire-tube',
    name: 'Inner Tube & Flap',
    category: 'wheel-tire',
    description: 'Butyl rubber inner tube and rim flap for pneumatic tires. Air-tight construction for reliable inflation.',
    image: '/images/products/tire-tube.png',
    specs: ['Size: 6.50-10 / 7.00-12 / 8.25-15', 'Valve: TR75A / TR78A', 'Material: Butyl rubber'],
  },

  // ==========================================
  // 9. Mast & Lifting (4 products)
  // ==========================================
  {
    id: 'mast-roller',
    name: 'Mast Roller Bearing',
    category: 'mast',
    description: 'Heavy-duty mast roller bearing with seals. Handles high radial and axial loads for smooth mast operation.',
    image: '/images/products/mast-roller.png',
    specs: ['OD: φ60-φ120mm', 'Type: Ball / Tapered roller', 'Seal: Double-lip rubber'],
  },
  {
    id: 'fork-arm',
    name: 'Fork Arm / Tine',
    category: 'mast',
    description: 'Forged fork arms meeting ISO 2330 standard. Various lengths and capacities for all forklift classes.',
    image: '/images/products/fork-arm.png',
    specs: ['Length: 1000-2400mm', 'Capacity: 2-10T per pair', 'Class: ISO 2A/3A/4A'],
  },
  {
    id: 'chain',
    name: 'Lifting Chain Assembly',
    category: 'mast',
    description: 'Leaf chain for mast lifting mechanism. High tensile strength with corrosion-resistant finish.',
    image: '/images/products/chain.png',
    specs: ['Pitch: LH0844/LH1044/LH1244', 'Tensile: 80-200kN', 'Finish: Zinc-plated / Black oxide'],
  },
  {
    id: 'mast-carriage',
    name: 'Carriage Assembly',
    category: 'mast',
    description: 'Fork carriage with integral side-shift capability. Smooth movement on mast channels.',
    image: '/images/products/mast-carriage.png',
    specs: ['Width: Class II/III/IV', 'Capacity: 2-10T', 'Side-shift: Integrated (optional)'],
  },

  // ==========================================
  // 10. Seat & Cabin (3 products)
  // ==========================================
  {
    id: 'forklift-seat',
    name: 'Forklift Seat Assembly',
    category: 'seat',
    description: 'Ergonomic forklift seat with mechanical suspension. Adjustable backrest angle, fore-aft slide, and weight setting.',
    image: '/images/products/forklift-seat.png',
    specs: ['Suspension: Mechanical spring', 'Adjustment: Slide + Backrest + Weight', 'Certification: ISO 7096'],
  },
  {
    id: 'seat-belt',
    name: 'Seat Belt / Safety Belt',
    category: 'seat',
    description: '3-point retractable seat belt with emergency locking retractor. Essential safety equipment for all forklifts.',
    image: '/images/products/seat-belt.png',
    specs: ['Type: 3-point retractable', 'Buckle: Push-button release', 'Length: 1500-2000mm'],
  },
  {
    id: 'cabin-mount',
    name: 'Cabin Rubber Mount',
    category: 'seat',
    description: 'Vibration-damping rubber mount for cab and engine isolation. Reduces operator fatigue and component stress.',
    image: '/images/products/cabin-mount.png',
    specs: ['Material: NR/SBR rubber + steel', 'Hardness: 55-70 Shore A', 'Load: 50-200kg per mount'],
  },

  // ==========================================
  // 11. Attachments (3 products)
  // ==========================================
  {
    id: 'side-shifter',
    name: 'Side Shifter Attachment',
    category: 'attachment',
    description: 'Hydraulic side shifter enabling ±100mm fork lateral movement. Increases loading efficiency and safety.',
    image: '/images/products/side-shifter.png',
    specs: ['Shift: ±100mm', 'Capacity: 2-5T', 'Mounting: ISO 2A/3A'],
  },
  {
    id: 'fork-positioner',
    name: 'Fork Positioner',
    category: 'attachment',
    description: 'Hydraulic fork positioner allowing fork spread adjustment from operator seat. Handles various pallet sizes.',
    image: '/images/products/fork-positioner.png',
    specs: ['Range: 300-1800mm', 'Capacity: 2-5T', 'Operation: Hydraulic cylinder'],
  },
  {
    id: 'rotator',
    name: 'Fork Rotator',
    category: 'attachment',
    description: '360° hydraulic fork rotator for dumping and pouring operations. Continuous rotation in both directions.',
    image: '/images/products/rotator.png',
    specs: ['Rotation: 360° continuous', 'Capacity: 1.5-3T', 'Motor: Hydraulic gerotor'],
  },

  // ==========================================
  // 12. Heli / Hangcha OEM (4 products)
  // ==========================================
  {
    id: 'heli-brake',
    name: 'Heli Brake Master Cylinder',
    category: 'heli-hangcha',
    description: 'Genuine OEM-spec brake master cylinder for Heli H2000/G series forklifts. Direct replacement, no modification.',
    image: '/images/products/heli-brake.png',
    specs: ['Fits: Heli 1-10T IC forklifts', 'Type: Dual circuit', 'OEM number: Cross-reference available'],
  },
  {
    id: 'heli-seal-kit',
    name: 'Heli Hydraulic Seal Kit',
    category: 'heli-hangcha',
    description: 'Complete hydraulic cylinder seal kit for Heli forklift masts and tilt cylinders.',
    image: '/images/products/heli-seal-kit.png',
    specs: ['Fits: Heli 1-7T series', 'Material: Imported PU + NBR', 'Includes: All piston/rod/wear ring'],
  },
  {
    id: 'hangcha-filter',
    name: 'Hangcha Air Filter OEM',
    category: 'heli-hangcha',
    description: 'OEM-quality air filter element for Hangcha A-series and XF-series forklifts.',
    image: '/images/products/hangcha-filter.png',
    specs: ['Fits: Hangcha 1-10T', 'Type: Primary + Safety', 'Efficiency: 99.9%'],
  },
  {
    id: 'hangcha-cylinder',
    name: 'Hangcha Tilt Cylinder OEM',
    category: 'heli-hangcha',
    description: 'OEM-spec tilt cylinder assembly for Hangcha forklifts. Chrome rod with premium seals.',
    image: '/images/products/hangcha-cylinder.png',
    specs: ['Fits: Hangcha 2-7T', 'Bore: φ63-φ90mm', 'Stroke: 120-200mm'],
  },

  // ==========================================
  // 13. Other Parts (4 products)
  // ==========================================
  {
    id: 'bearing',
    name: 'Forklift Bearing Kit',
    category: 'other',
    description: 'Assorted bearing kit for forklift mast, steering, and transmission applications. Premium brand quality.',
    image: '/images/products/bearing.png',
    specs: ['Types: Ball / Roller / Taper', 'Sizes: Various', 'Brand: NSK / SKF / KOYO equivalent'],
  },
  {
    id: 'bolt-nut',
    name: 'Bolt / Nut / Fastener Kit',
    category: 'other',
    description: 'High-strength fastener kit for forklift assembly and repair. Grade 8.8, 10.9, and 12.9 available.',
    image: '/images/products/bolt-nut.png',
    specs: ['Grades: 8.8 / 10.9 / 12.9', 'Sizes: M6-M24', 'Finish: Zinc / Black oxide / Dacromet'],
  },
  {
    id: 'hydraulic-hose',
    name: 'Hydraulic Hose Assembly',
    category: 'other',
    description: 'High-pressure hydraulic hose with crimped fittings. Custom lengths for all forklift hydraulic circuits.',
    image: '/images/products/hydraulic-hose.png',
    specs: ['Pressure: 1-2 wire braid', 'ID: 1/4" - 1"', 'Fittings: JIC / BSP / ORFS'],
  },
  {
    id: 'exhaust-pipe',
    name: 'Exhaust Pipe / Muffler',
    category: 'other',
    description: 'Replacement exhaust pipe and muffler assembly. Reduces noise and directs exhaust away from operator.',
    image: '/images/products/exhaust-pipe.png',
    specs: ['Pipe diameter: φ40-φ65mm', 'Material: Aluminized steel', 'Includes: Clamps, gaskets'],
  },
];
