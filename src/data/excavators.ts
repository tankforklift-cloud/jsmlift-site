export interface Excavator {
  slug: string;
  name: string;
  model: string;
  weight: string;
  engine: string;
  power: string;
  bucket: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  images: string[];
  badge?: string;
  youtubeUrl?: string;
}

export const excavators: Excavator[] = [
  {
    slug: 'hs12-6-hydraulic-excavator',
    name: 'HS12-6 Mini Excavator',
    model: 'HS12-6',
    weight: '1,200 kg',
    engine: 'Kubota D722',
    power: '10.2 kW (Euro 5)',
    bucket: '0.025 m³',
    description: 'The HS12-6 Mini Excavator comes in different color options and features a High Quality hydraulic pump along with internal boom mounted hydraulic lines for maximum protection. A zero-tail swing machine with ergonomic pilot controls and 2-speed piston drive motors. Includes factory installed side swing feature and retractable tracks.',
    features: [
      '1-Year Warranty',
      'Side Swing Boom (~45° left/right)',
      'Retractable Tracks (30" / 38" width)',
      'High & Low Travelling Speeds',
      'Upgraded Upper Cylinder U-Boom',
      'Kubota D722 Diesel Engine, 10.2 kW, Euro 5',
      'LKG/Eaton Plunger Drive Motors',
      'Load-Sensing Hydraulics',
      'Bucket with Side Skirts and Teeth',
      'Dozer Blade',
      'Auxiliary Hydraulics',
      'LED Boom Light',
      'Operator Manual'
    ],
    specs: {
      'Operating Weight': '1,200 kg',
      'Engine': 'Kubota D722, 10.2 kW, Euro 5',
      'Bucket Capacity': '0.025 m³',
      'Track Type': 'Rubber, Retractable',
      'Travel Speed': '2-Speed (High/Low)',
      'Boom Type': 'Upper Cylinder U-Boom',
      'Swing': 'Zero-Tail Swing',
      'Color Options': 'Available'
    },
    images: ['/images/excavators/hs12-6-main.jpg'],
    badge: 'Hot',
    youtubeUrl: 'https://www.youtube.com/watch?v=lhCkJThEEVA'
  },
  {
    slug: 'hs18-hydraulic-excavator',
    name: 'HS18 Hydraulic Excavator',
    model: 'HS18',
    weight: '1,780 kg',
    engine: 'Yanmar Diesel',
    power: '14.6 kW',
    bucket: '0.04 m³',
    description: 'The HS18 Mini Excavator features a High Quality variable-displacement plunger hydraulic pump along with internal boom mounted hydraulic lines for maximum protection. A zero-tail swing machine with ergonomic pilot controls and 2-speed piston drive motors. Includes factory installed side swing feature and retractable tracks.',
    features: [
      '1-Year Warranty',
      'Side Swing Boom',
      'Retractable Tracks (38" / 50" width)',
      'Rear Counterweight',
      'Upgraded Upper Cylinder U-Boom',
      '14.6 kW Yanmar Diesel Engine',
      'HD Piston 2-Speed Drive Motors',
      'Load-Sensing Hydraulics',
      'Bucket with Side Skirts and Teeth',
      'Dozer Blade',
      'Auxiliary Hydraulics',
      'LED Boom Light',
      'Operator Manual'
    ],
    specs: {
      'Operating Weight': '1,780 kg',
      'Engine': 'Yanmar Diesel, 14.6 kW',
      'Bucket Capacity': '0.04 m³',
      'Track Type': 'Rubber, Retractable',
      'Travel Speed': '2-Speed (High/Low)',
      'Boom Type': 'Upper Cylinder U-Boom',
      'Swing': 'Zero-Tail Swing',
      'Pump': 'Variable-Displacement Plunger'
    },
    images: ['/images/excavators/hs18-main.jpg', '/images/excavators/hs18-full.jpg'],
    badge: 'New'
  },
  {
    slug: 'hs20-hydraulic-excavator',
    name: 'HS20 Hydraulic Excavator',
    model: 'HS20A',
    weight: '2,250 kg',
    engine: 'Kubota D1105',
    power: '14 kW (Euro 5)',
    bucket: '0.06 m³',
    description: 'The HS20A is a powerful 2.25-ton excavator with pilot valve operation, swing boom, high and low speed travel, and retractable undercarriage. Powered by Japan Kubota D1105 engine with Euro 5 emission. Features LKG plunger travel motor and TAIFENG load-sensing hydraulic system.',
    features: [
      'Pilot Valve Operation',
      'Swing Boom',
      'High & Low Speed Travel',
      'Retractable Undercarriage',
      'Kubota D1105 Engine, 14 kW, Euro 5',
      'LKG Plunger Travel Motor',
      'Kubota U-20 Type Swing Motor',
      'TAIFENG Load-Sensing Pump & Valve',
      'Max Digging Height: 3,050 mm',
      'Max Digging Depth: 2,154 mm',
      'Max Digging Radius: 3,793 mm',
      'Cabin Included',
      'Standard Bucket'
    ],
    specs: {
      'Operating Weight': '2,250 kg',
      'Engine': 'Kubota D1105, 14 kW, Euro 5',
      'Bucket Capacity': '0.06 m³',
      'Max Dig Height': '3,050 mm',
      'Max Dig Depth': '2,154 mm',
      'Max Dig Radius': '3,793 mm',
      'Swing Motor': 'Kubota U-20 Type',
      'Pump System': 'TAIFENG Load-Sensing'
    },
    images: ['/images/excavators/hs20-main.jpg', '/images/excavators/hs20-full.jpg']
  },
  {
    slug: 'hs45-hydraulic-excavator',
    name: 'HS45 Hydraulic Excavator',
    model: 'HS45',
    weight: '4,200 kg',
    engine: 'Yanmar 4TNV88',
    power: '27 kW',
    bucket: '0.17 m³',
    description: 'The HS45 is a premium 4.2-ton excavator with full closed cabin and air conditioning. Powered by Yanmar 4TNV88 engine delivering 27 kW. Features all-Japan KYB hydraulic system including pump, multi-circuit valve, swing motor, and travel motor. Steel tracks with 350mm width.',
    features: [
      'Full Closed Cabin with AC',
      'Yanmar 4TNV88 Engine, 27 kW',
      'KYB (Japan) Hydraulic Pump',
      'KYB (Japan) Multi-Circuit Valve',
      'KYB (Japan) Swing Motor',
      'KYB (Japan) Travel Motor',
      'Steel Track (Width 350 mm)',
      'Digital Monitor',
      'Operating Weight: 4,200 kg',
      'Bucket Capacity: 0.17 m³',
      '640mm Bucket Width'
    ],
    specs: {
      'Operating Weight': '4,200 kg',
      'Engine': 'Yanmar 4TNV88, 27 kW',
      'Bucket Capacity': '0.17 m³',
      'Bucket Width': '640 mm',
      'Track Type': 'Steel (350 mm width)',
      'Cabin': 'Full Closed with AC',
      'Hydraulics': 'KYB Japan (Pump, Valve, Motors)',
      'Monitor': 'Digital'
    },
    images: ['/images/excavators/hs45-main.jpg', '/images/excavators/hs45-full.jpg'],
    badge: 'Premium'
  }
];
