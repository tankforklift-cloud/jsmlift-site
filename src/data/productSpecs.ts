/* ============================================================
   MLIFT Product Specifications — Aligned with HELI Middle East
   ============================================================ */

export interface SubModel {
  name: string;
  powerType: string;
  params: Record<string, string>;
}

export interface EngineOption {
  model: string;
  power: string;
  torque: string;
  displacement: string;
  cylinders: string;
  emission: string;
}

export interface BatteryOption {
  voltage: string;
  capacity: string;
  runtime: string;
  chargeTime: string;
}

export interface ProductSpec {
  /** Must match the model id in forklifts.ts */
  id: string;
  overview: string;
  paramColumns: string[];  // header labels for sub-model columns
  subModels: SubModel[];
  paramHeaders: { key: string; label: string; unit?: string }[];
  engineOptions?: EngineOption[];
  batteryOptions?: BatteryOption[];
  features: { label: string; value: string }[];
  highlights: string[];
}

/* ============================================================
   IC FORKLIFT TRUCKS
   ============================================================ */

const icProductSpecs: ProductSpec[] = [
  {
    id: "h3-1-18t",
    overview: "New H3 series is MLIFT's key IC forklift product line. Based on high technology, mass manufacturing capability, and experienced engineering, it sets a new benchmark for 1-1.8 ton internal combustion forklifts — fully considering the needs of diverse markets and customers worldwide.",
    paramColumns: ["CPC(D)10", "CPC(D)15", "CPC(D)18", "CP(Q)(Y)D10", "CP(Q)(Y)D15", "CP(Q)(Y)D18"],
    subModels: [
      {
        name: "CPC(D)10",
        powerType: "Diesel",
        params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", freeLift: "152", lengthWoForks: "2277", lengthWForks: "3197", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2458", turningRadius: "2070", travelSpeedLoaded: "14.5", travelSpeedUnloaded: "15.0", liftSpeedLoaded: "510", liftSpeedUnloaded: "550", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
      {
        name: "CPC(D)15",
        powerType: "Diesel",
        params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", freeLift: "155", lengthWoForks: "2281", lengthWForks: "3201", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2760", turningRadius: "2070", travelSpeedLoaded: "14.5", travelSpeedUnloaded: "15.0", liftSpeedLoaded: "510", liftSpeedUnloaded: "550", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
      {
        name: "CPC(D)18",
        powerType: "Diesel",
        params: { capacity: "1750", loadCenter: "500", liftHeight: "3000", freeLift: "155", lengthWoForks: "2299", lengthWForks: "3219", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2890", turningRadius: "2070", travelSpeedLoaded: "14.5", travelSpeedUnloaded: "15.0", liftSpeedLoaded: "510", liftSpeedUnloaded: "550", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
      {
        name: "CP(Q)(Y)D10",
        powerType: "Gasoline / LPG",
        params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", freeLift: "152", lengthWoForks: "2277", lengthWForks: "3197", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2458", turningRadius: "2070", travelSpeedLoaded: "15.0", travelSpeedUnloaded: "16.0", liftSpeedLoaded: "530", liftSpeedUnloaded: "570", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
      {
        name: "CP(Q)(Y)D15",
        powerType: "Gasoline / LPG",
        params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", freeLift: "155", lengthWoForks: "2281", lengthWForks: "3201", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2760", turningRadius: "2070", travelSpeedLoaded: "15.0", travelSpeedUnloaded: "16.0", liftSpeedLoaded: "530", liftSpeedUnloaded: "570", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
      {
        name: "CP(Q)(Y)D18",
        powerType: "Gasoline / LPG",
        params: { capacity: "1750", loadCenter: "500", liftHeight: "3000", freeLift: "155", lengthWoForks: "2299", lengthWForks: "3219", width: "1070", heightGuard: "2140", wheelbase: "1450", weight: "2890", turningRadius: "2070", travelSpeedLoaded: "15.0", travelSpeedUnloaded: "16.0", liftSpeedLoaded: "530", liftSpeedUnloaded: "570", gradeabilityLoaded: "20", gradeabilityUnloaded: "25" }
      },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "freeLift", label: "Free Lift Height", unit: "mm" },
      { key: "lengthWoForks", label: "Overall Length (w/o forks)", unit: "mm" },
      { key: "lengthWForks", label: "Overall Length (w/ forks)", unit: "mm" },
      { key: "width", label: "Overall Width", unit: "mm" },
      { key: "heightGuard", label: "Overall Height (overhead guard)", unit: "mm" },
      { key: "wheelbase", label: "Wheelbase", unit: "mm" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeedLoaded", label: "Travel Speed (loaded)", unit: "km/h" },
      { key: "travelSpeedUnloaded", label: "Travel Speed (unloaded)", unit: "km/h" },
      { key: "liftSpeedLoaded", label: "Lifting Speed (loaded)", unit: "mm/s" },
      { key: "liftSpeedUnloaded", label: "Lifting Speed (unloaded)", unit: "mm/s" },
      { key: "gradeabilityLoaded", label: "Gradeability (loaded)", unit: "%" },
      { key: "gradeabilityUnloaded", label: "Gradeability (unloaded)", unit: "%" },
    ],
    engineOptions: [
      { model: "ISUZU C240", power: "34.3 kW / 2500 rpm", torque: "137.7 Nm / 1800 rpm", displacement: "2.369 L", cylinders: "4-86×102", emission: "Euro Stage ⅢA" },
      { model: "GCT K21 (LPG)", power: "31.5 kW / 2200 rpm", torque: "140.0 Nm / 1600 rpm", displacement: "2.065 L", cylinders: "4-89×83", emission: "LPG" },
      { model: "GCT K15 (LPG)", power: "23.6 kW / 2400 rpm", torque: "103.0 Nm / 1600 rpm", displacement: "1.486 L", cylinders: "4-75.5×83", emission: "LPG" },
      { model: "KUBOTA V2403", power: "34.1 kW / 2400 rpm", torque: "155.9 Nm / 1600 rpm", displacement: "2.434 L", cylinders: "4-87×102.4", emission: "Euro Ⅲ / EPA T4i" },
      { model: "QUANCHAI 4B4-45V32", power: "32.0 kW / 2600 rpm", torque: "132.0 Nm / 1800 rpm", displacement: "2.27 L", cylinders: "4-85×100", emission: "Euro Ⅲ" },
      { model: "KUBOTA WG2503 (LPG)", power: "43.5 kW / 2600 rpm", torque: "173.7 Nm / 1400 rpm", displacement: "2.491 L", cylinders: "4-88×102.4", emission: "EPA/CARB/EU Stage V" },
      { model: "XINCHANG 4N23G31", power: "30.0 kW / 2600 rpm", torque: "131.0 Nm / 1800 rpm", displacement: "2.27 L", cylinders: "4-85×100", emission: "Euro Ⅲ" },
    ],
    features: [
      { label: "Vibration Reduction", value: "20% lower" },
      { label: "Noise Reduction", value: "3 dB quieter" },
      { label: "Operator Space", value: "45% larger" },
      { label: "Operator Visibility", value: "20% improved" },
      { label: "Work Efficiency", value: "20% increased" },
      { label: "Load Capacity", value: "5%+ increase" },
      { label: "Stability", value: "5% improvement" },
      { label: "Reliability", value: "40% improvement" },
      { label: "Hood Opening Angle", value: "Extended to 80°" },
    ],
    highlights: [
      "Emission compliant with EU and EPA regulations",
      "High-efficiency hydraulic system reduces fuel consumption",
      "Environmentally friendly materials throughout",
      "Mast vibration damping system",
      "Sound insulation and noise reduction technology",
      "Power brake system reduces pedal effort",
      "Automotive-style dual combination switch lever",
      "Engine auto-shutdown on low oil pressure or high water temperature",
      "Sealed steel plate cabin with high-strength overhead guard",
      "Anti-hose-burst safety device in mast hydraulic system",
    ],
  },
  {
    id: "g3-3-35t-diesel",
    overview: "G3 series 3-3.5 ton diesel/LPG counterbalanced forklift. The G3 series represents MLIFT's latest generation internal combustion forklift — engineered with high-efficiency powertrain, suspended transmission system for superior vibration isolation, and advanced noise control technology for a quieter, more comfortable operating experience.",
    paramColumns: ["CPCD30 / CP(Q)YD30", "CPCD35 / CP(Q)YD35"],
    subModels: [
      {
        name: "CPCD30 / CP(Q)YD30",
        powerType: "Diesel / LPG",
        params: { capacity: "3000", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2810", width: "1225", heightGuard: "2175", weight: "4320", turningRadius: "2420", wheelbase: "1700", travelSpeedLoaded: "18", travelSpeedUnloaded: "19", liftSpeedLoaded: "460", liftSpeedUnloaded: "500", gradeability: "20", forkSize: "1070×125×45", mastTiltFwd: "6", mastTiltBack: "12" }
      },
      {
        name: "CPCD35 / CP(Q)YD35",
        powerType: "Diesel / LPG",
        params: { capacity: "3500", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2870", width: "1225", heightGuard: "2175", weight: "4630", turningRadius: "2500", wheelbase: "1700", travelSpeedLoaded: "18", travelSpeedUnloaded: "19", liftSpeedLoaded: "440", liftSpeedUnloaded: "470", gradeability: "20", forkSize: "1070×125×50", mastTiltFwd: "6", mastTiltBack: "12" }
      },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "lengthWoForks", label: "Overall Length (w/o forks)", unit: "mm" },
      { key: "width", label: "Overall Width", unit: "mm" },
      { key: "heightGuard", label: "Overall Height (overhead guard)", unit: "mm" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "wheelbase", label: "Wheelbase", unit: "mm" },
      { key: "travelSpeedLoaded", label: "Travel Speed (loaded)", unit: "km/h" },
      { key: "travelSpeedUnloaded", label: "Travel Speed (unloaded)", unit: "km/h" },
      { key: "liftSpeedLoaded", label: "Lifting Speed (loaded)", unit: "mm/s" },
      { key: "liftSpeedUnloaded", label: "Lifting Speed (unloaded)", unit: "mm/s" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
      { key: "forkSize", label: "Fork Size (L×W×T)", unit: "mm" },
      { key: "mastTiltFwd", label: "Mast Tilt (Fwd)", unit: "°" },
      { key: "mastTiltBack", label: "Mast Tilt (Back)", unit: "°" },
    ],
    engineOptions: [
      { model: "ISUZU 4JG2", power: "44.0 kW / 2450 rpm", torque: "186.0 Nm / 1700 rpm", displacement: "3.059 L", cylinders: "4-95.4×107", emission: "Euro Stage ⅢA" },
      { model: "GCT K25 (LPG)", power: "37.4 kW / 2300 rpm", torque: "176.4 Nm / 1600 rpm", displacement: "2.488 L", cylinders: "4-89×100", emission: "LPG" },
      { model: "YANMAR 4TNE98", power: "42.1 kW / 2300 rpm", torque: "196.0 Nm / 1600 rpm", displacement: "3.319 L", cylinders: "4-98×110", emission: "Euro Ⅲ / EPA T4i" },
      { model: "KUBOTA V3800", power: "55.4 kW / 2600 rpm", torque: "230.0 Nm / 1400 rpm", displacement: "3.769 L", cylinders: "4-100×120", emission: "EPA T4f / EU Stage V" },
    ],
    features: [
      { label: "Transmission", value: "High-efficiency powertrain with suspended transmission" },
      { label: "Vibration Isolation", value: "Suspended design isolates engine vibration" },
      { label: "Noise Control", value: "Sealed structure + high-performance sound insulation" },
      { label: "Start Safety", value: "Anti-gear-engagement start prevention system" },
      { label: "Speed Control", value: "Customizable speed limiting system (optional)" },
      { label: "Cooling System", value: "High-capacity radiator for tropical climates" },
    ],
    highlights: [
      "Efficient powertrain for faster travel and stronger traction",
      "Suspended transmission system effectively isolates vibration",
      "Sealed body structure with sound-absorbing materials reduces cabin noise",
      "Ignition control prevents starting in gear",
      "Speed control system adaptable to different industry requirements",
      "Enclosed body construction with durable steel panels",
      "Ergonomic operator compartment with intuitive controls",
    ],
  },
  {
    id: "g2-2-25t",
    overview: "G2 series 2-2.5T diesel counterbalanced forklift. Featuring reliable U-joint transmission and V-type support, this series delivers exceptional driving comfort, easy maintenance, and a 10% increase in operator space. Engineered for demanding daily operations in warehouses, factories, and logistics centers.",
    paramColumns: ["CPCD20 / CP(Q)(Y)D20", "CPCD25 / CP(Q)(Y)D25"],
    subModels: [
      {
        name: "CPCD20 / CP(Q)(Y)D20",
        powerType: "Diesel / LPG",
        params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", forkLiftMax: "4039", lengthWForks: "3450", lengthWoForks: "2530", width: "1150", heightGuard: "2150", wheelbase: "1600", turningRadius: "2180", turningRadiusInner: "160", mastTiltFwd: "6", mastTiltBack: "10", travelSpeedLoaded: "18", travelSpeedUnloaded: "19", liftSpeedLoaded: "670", liftSpeedUnloaded: "700", lowerSpeedLoaded: "550", lowerSpeedUnloaded: "460", drawbarLoaded: "18.3", drawbarUnloaded: "12.4", gradeabilityLoaded: "34", gradeabilityUnloaded: "28", weight: "3560" }
      },
      {
        name: "CPCD25 / CP(Q)(Y)D25",
        powerType: "Diesel / LPG",
        params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", forkLiftMax: "4039", lengthWForks: "3675", lengthWoForks: "2605", width: "1150", heightGuard: "2150", wheelbase: "1600", turningRadius: "2250", turningRadiusInner: "160", mastTiltFwd: "6", mastTiltBack: "10", travelSpeedLoaded: "18", travelSpeedUnloaded: "19", liftSpeedLoaded: "560", liftSpeedUnloaded: "730", lowerSpeedLoaded: "420", lowerSpeedUnloaded: "320", drawbarLoaded: "19.3", drawbarUnloaded: "12.8", gradeabilityLoaded: "32", gradeabilityUnloaded: "24", weight: "3880" }
      },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Max. Lifting Height", unit: "mm" },
      { key: "forkLiftMax", label: "Max. Fork Height (w/ backrest)", unit: "mm" },
      { key: "lengthWForks", label: "Overall Length (w/ forks)", unit: "mm" },
      { key: "lengthWoForks", label: "Overall Length (w/o forks)", unit: "mm" },
      { key: "width", label: "Overall Width", unit: "mm" },
      { key: "heightGuard", label: "Overall Height (overhead guard)", unit: "mm" },
      { key: "wheelbase", label: "Wheelbase", unit: "mm" },
      { key: "turningRadius", label: "Min. Turn Radius (exterior)", unit: "mm" },
      { key: "turningRadiusInner", label: "Min. Turn Radius (interior)", unit: "mm" },
      { key: "mastTiltFwd", label: "Mast Tilt (Fwd)", unit: "°" },
      { key: "mastTiltBack", label: "Mast Tilt (Back)", unit: "°" },
      { key: "travelSpeedLoaded", label: "Travel Speed (loaded)", unit: "km/h" },
      { key: "travelSpeedUnloaded", label: "Travel Speed (unloaded)", unit: "km/h" },
      { key: "liftSpeedLoaded", label: "Lifting Speed (loaded)", unit: "mm/s" },
      { key: "liftSpeedUnloaded", label: "Lifting Speed (unloaded)", unit: "mm/s" },
      { key: "lowerSpeedLoaded", label: "Lowering Speed (loaded)", unit: "mm/s" },
      { key: "lowerSpeedUnloaded", label: "Lowering Speed (unloaded)", unit: "mm/s" },
      { key: "drawbarLoaded", label: "Max. Drawbar Pull (loaded)", unit: "kN" },
      { key: "drawbarUnloaded", label: "Max. Drawbar Pull (unloaded)", unit: "kN" },
      { key: "gradeabilityLoaded", label: "Gradeability (loaded)", unit: "%" },
      { key: "gradeabilityUnloaded", label: "Gradeability (unloaded)", unit: "%" },
      { key: "weight", label: "Total Weight", unit: "kg" },
    ],
    engineOptions: [
      { model: "GM 3.0", power: "50.0 kW / 2700 rpm", torque: "203.0 Nm / 1600 rpm", displacement: "3.0 L", cylinders: "4-101.6×91.44", emission: "CARB4 / EPA Stage Ⅱ" },
      { model: "GCT K21 (LPG)", power: "31.5 kW / 2250 rpm", torque: "143.7 Nm / 1600 rpm", displacement: "2.065 L", cylinders: "4-89×83", emission: "LPG" },
      { model: "GCT K25 (LPG)", power: "37.4 kW / 2300 rpm", torque: "176.35 Nm / 1600 rpm", displacement: "2.488 L", cylinders: "4-89×100", emission: "LPG" },
      { model: "ISUZU 4JG2", power: "35.0 kW / 2450 rpm", torque: "170.0 Nm / 1700 rpm", displacement: "3.059 L", cylinders: "4-95.4×107", emission: "Euro Stage ⅢA" },
      { model: "CUMMINS QSF 2.8", power: "36.5 kW / 2500 rpm", torque: "186.0 Nm / 1100-1500 rpm", displacement: "2.8 L", cylinders: "4-94×100", emission: "Euro Stage ⅢA" },
    ],
    features: [
      { label: "Transmission", value: "U-Joint with V-type support — reliable & durable" },
      { label: "Operator Space", value: "10% larger cabin than previous generation" },
      { label: "Cooling Capacity", value: "10% improvement for hot climates" },
      { label: "Stability & MTBF", value: "40% improvement over previous generation" },
      { label: "Thumb Control", value: "Optional thumb-operated hydraulic controls" },
      { label: "Maintenance", value: "Simplified access to key service points" },
    ],
    highlights: [
      "Reliable U-joint transmission with V-type support",
      "Significantly improved driving comfort",
      "Easier and faster routine maintenance",
      "Optional thumb control system for precision handling",
      "10% increase in operator cabin space",
      "10% boost in cooling system capacity",
      "40% improvement in stability and MTBF reliability",
    ],
  },
  {
    id: "g-1-18t",
    overview: "G series 1-1.8T economical IC forklift. A proven, cost-effective solution for light to medium-duty applications. Designed with environmental compliance (EU & EPA emission standards), ergonomic operator controls, and comprehensive safety features — the reliable choice for everyday material handling.",
    paramColumns: ["CPCD10", "CPCD15", "CPCD18", "CP(Q)(Y)D10", "CP(Q)(Y)D15", "CP(Q)(Y)D18"],
    subModels: [
      {
        name: "CPCD10",
        powerType: "Diesel",
        params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2166", width: "1075" }
      },
      {
        name: "CPCD15",
        powerType: "Diesel",
        params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2230", width: "1090" }
      },
      {
        name: "CPCD18",
        powerType: "Diesel",
        params: { capacity: "1750", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2273", width: "1090" }
      },
      {
        name: "CP(Q)(Y)D10",
        powerType: "Gasoline / LPG",
        params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2166", width: "1075" }
      },
      {
        name: "CP(Q)(Y)D15",
        powerType: "Gasoline / LPG",
        params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2230", width: "1090" }
      },
      {
        name: "CP(Q)(Y)D18",
        powerType: "Gasoline / LPG",
        params: { capacity: "1750", loadCenter: "500", liftHeight: "3000", lengthWoForks: "2273", width: "1090" }
      },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "lengthWoForks", label: "Overall Length (w/o forks)", unit: "mm" },
      { key: "width", label: "Overall Width", unit: "mm" },
    ],
    engineOptions: [
      { model: "ISUZU C240", power: "34.3 kW / 2500 rpm", torque: "137.7 Nm / 1800 rpm", displacement: "2.369 L", cylinders: "4-86×102", emission: "Euro Stage ⅢA" },
      { model: "GCT K21 (LPG)", power: "31.5 kW / 2200 rpm", torque: "140.0 Nm / 1600 rpm", displacement: "2.065 L", cylinders: "4-89×83", emission: "LPG" },
      { model: "KUBOTA V2403", power: "34.1 kW / 2400 rpm", torque: "155.9 Nm / 1600 rpm", displacement: "2.434 L", cylinders: "4-87×102.4", emission: "Euro Ⅲ / EPA T4i" },
    ],
    features: [
      { label: "Emissions", value: "EC & EPA compliant; high-efficiency hydraulics reduce fuel use" },
      { label: "Ergonomics", value: "Power brake system, right-side levers, automotive-style controls" },
      { label: "Safety", value: "Sealed steel cabin, high-strength overhead guard, parking brake interlock" },
      { label: "Engine Protection", value: "Auto-shutdown on low oil pressure or high water temperature" },
      { label: "Hydraulic Safety", value: "Anti-hose-burst safety device on mast hydraulics" },
      { label: "Wiring", value: "Safety-grade harness with waterproof connectors" },
    ],
    highlights: [
      "Emissions meet EC and EPA regulations",
      "High-efficiency hydraulic system for lower fuel consumption",
      "Environmentally friendly, recyclable materials",
      "Mast vibration damping for smoother operation",
      "Power brake system reduces operator fatigue",
      "Automotive-style dual combination switch lever",
      "Wide-view mast for excellent forward visibility",
      "Spacious operator cabin with intuitive layout",
      "Engine auto-monitoring with safety shutdown",
      "Sealed steel plate cabin with high-strength overhead guard",
    ],
  },
];

/* ============================================================
   ELECTRIC FORKLIFT TRUCKS (LITHIUM-ION)
   ============================================================ */

const electricLithiumSpecs: ProductSpec[] = [
  {
    id: "g3-15-35t-80v",
    overview: "G3 Series 1.5-3.5 Ton Double Drive Lithium Battery Forklift (80V). Advanced lithium-ion technology with dual-drive motors for superior acceleration and energy efficiency. Zero emissions, rapid 2-hour charging, and extended runtimes — ideal for intensive indoor and outdoor operations.",
    paramColumns: ["1.5T", "1.8T", "2.0T", "2.5T", "3.0T", "3.5T"],
    subModels: [
      { name: "1.5T", powerType: "80V Lithium", params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "2×AC", weight: "2850", turningRadius: "1850", travelSpeed: "16", liftSpeed: "400" } },
      { name: "1.8T", powerType: "80V Lithium", params: { capacity: "1800", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "2×AC", weight: "3100", turningRadius: "1900", travelSpeed: "16", liftSpeed: "390" } },
      { name: "2.0T", powerType: "80V Lithium", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "2×AC", weight: "3550", turningRadius: "2020", travelSpeed: "16", liftSpeed: "380" } },
      { name: "2.5T", powerType: "80V Lithium", params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "2×AC", weight: "4250", turningRadius: "2100", travelSpeed: "16", liftSpeed: "370" } },
      { name: "3.0T", powerType: "80V Lithium", params: { capacity: "3000", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "2×AC", weight: "4880", turningRadius: "2220", travelSpeed: "16", liftSpeed: "350" } },
      { name: "3.5T", powerType: "80V Lithium", params: { capacity: "3500", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "2×AC", weight: "5380", turningRadius: "2300", travelSpeed: "16", liftSpeed: "330" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motors", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2 hours (fast)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "8–10 hours", chargeTime: "2.5 hours (fast)" },
      { voltage: "80V", capacity: "600 Ah", runtime: "10–12 hours", chargeTime: "3 hours (fast)" },
    ],
    features: [
      { label: "Charging", value: "Rapid 2-hour full charge; opportunity charging supported" },
      { label: "Zero Emissions", value: "No exhaust, ideal for food, pharma & cold storage" },
      { label: "Dual Drive", value: "Independent dual AC motors for superior traction" },
      { label: "Battery Life", value: "3000+ charge cycles; 5–8 year service life" },
      { label: "Regenerative Braking", value: "Energy recovery extends runtime by 10-15%" },
      { label: "Smart BMS", value: "Battery Management System with real-time monitoring" },
    ],
    highlights: [
      "Zero emissions — ideal for indoor & environmentally sensitive areas",
      "Rapid 2-hour charging with opportunity charging capability",
      "3000+ charge cycles with lithium LiFePO4 battery technology",
      "Dual-drive AC motors for exceptional traction and smooth control",
      "Regenerative braking recovers energy and extends runtime",
      "Intelligent BMS with real-time battery health monitoring",
      "Maintenance-free — no engine oil, filters, or spark plugs",
      "Lower total cost of ownership vs diesel and lead-acid alternatives",
    ],
  },
  {
    id: "g3-15-2t-three-wheel",
    overview: "G3 Series 1.5-2 Ton Three-wheel Double Drive Lithium Battery Forklift (80V). Compact three-wheel design with dual-drive rear motors for exceptional maneuverability in tight spaces. Ideal for narrow aisles and confined warehouse operations.",
    paramColumns: ["1.5T", "1.8T", "2.0T"],
    subModels: [
      { name: "1.5T", powerType: "80V Lithium", params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "2×AC (rear)", weight: "2950", turningRadius: "1580", travelSpeed: "15", liftSpeed: "380" } },
      { name: "1.8T", powerType: "80V Lithium", params: { capacity: "1800", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "2×AC (rear)", weight: "3200", turningRadius: "1620", travelSpeed: "15", liftSpeed: "370" } },
      { name: "2.0T", powerType: "80V Lithium", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "2×AC (rear)", weight: "3650", turningRadius: "1680", travelSpeed: "15", liftSpeed: "360" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motors", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2 hours (fast)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "8–10 hours", chargeTime: "2.5 hours (fast)" },
    ],
    features: [
      { label: "Maneuverability", value: "Ultra-compact turning radius (1580mm) — best-in-class" },
      { label: "Three-Wheel", value: "Rear dual-drive for narrow aisle superiority" },
      { label: "Charging", value: "2-hour rapid charge with LiFePO4 battery" },
      { label: "Zero Emissions", value: "Clean operation for indoor environments" },
      { label: "Regenerative Braking", value: "Energy recovery for extended shifts" },
      { label: "Smart BMS", value: "Real-time battery and performance monitoring" },
    ],
    highlights: [
      "Ultra-compact three-wheel design for maximum maneuverability",
      "Dual-drive rear motors with precise electronic differential control",
      "1580mm minimum turning radius — navigates the tightest aisles",
      "LiFePO4 lithium battery — 3000+ cycles, maintenance-free",
      "Fast 2-hour charging with opportunity charging support",
      "Zero emissions for food, pharma, and cold storage applications",
      "Ergonomic cabin with panoramic visibility",
    ],
  },
  {
    id: "g3-6-7t",
    overview: "G3 Series 6-7t Lithium Battery Forklift. Heavy-duty electric power with zero emissions — delivering diesel-level performance with lithium-ion efficiency. Designed for demanding applications in ports, heavy manufacturing, and large-scale logistics.",
    paramColumns: ["6.0T", "7.0T"],
    subModels: [
      { name: "6.0T", powerType: "80V Lithium", params: { capacity: "6000", loadCenter: "600", liftHeight: "3000", battery: "80V / 800Ah", motors: "2×AC", weight: "8900", turningRadius: "3200", travelSpeed: "20", liftSpeed: "300" } },
      { name: "7.0T", powerType: "80V Lithium", params: { capacity: "7000", loadCenter: "600", liftHeight: "3000", battery: "80V / 800Ah", motors: "2×AC", weight: "9500", turningRadius: "3300", travelSpeed: "20", liftSpeed: "280" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motors", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "800 Ah", runtime: "6–8 hours (heavy duty)", chargeTime: "3 hours (fast)" },
    ],
    features: [
      { label: "Heavy-Duty", value: "Electric power matching diesel torque output" },
      { label: "High Capacity Battery", value: "800Ah for full-shift heavy operations" },
      { label: "Dual Drive", value: "Twin AC motors for superior traction" },
      { label: "Zero Emissions", value: "Clean operation in ports and enclosed facilities" },
      { label: "Regenerative Braking", value: "Energy recovery during deceleration" },
      { label: "BMS", value: "Advanced battery thermal management system" },
    ],
    highlights: [
      "Diesel-level performance with zero emissions",
      "High-capacity 80V/800Ah lithium battery for full-shift operation",
      "Dual-drive AC motors with electronic differential control",
      "3-hour rapid charging capability",
      "Advanced BMS with active thermal management",
      "Ideal for ports, steel mills, and heavy manufacturing",
      "Significantly lower energy cost vs diesel equivalent",
    ],
  },
  {
    id: "g3-4-5t",
    overview: "G3 series 4-5t Lithium-ion Forklift. The perfect mid-range electric solution combining powerful lifting capacity with the efficiency of lithium battery technology. Zero emissions, low noise, and significantly reduced operating costs.",
    paramColumns: ["4.0T", "5.0T"],
    subModels: [
      { name: "4.0T", powerType: "80V Lithium", params: { capacity: "4000", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "2×AC", weight: "6400", turningRadius: "2650", travelSpeed: "17", liftSpeed: "340" } },
      { name: "5.0T", powerType: "80V Lithium", params: { capacity: "5000", loadCenter: "600", liftHeight: "3000", battery: "80V / 700Ah", motors: "2×AC", weight: "7200", turningRadius: "2750", travelSpeed: "17", liftSpeed: "320" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motors", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "600 Ah", runtime: "7–9 hours", chargeTime: "2.5 hours (fast)" },
      { voltage: "80V", capacity: "700 Ah", runtime: "8–10 hours", chargeTime: "3 hours (fast)" },
    ],
    features: [
      { label: "Mid-Range Power", value: "Ideal balance of capacity and efficiency" },
      { label: "Lithium Battery", value: "3000+ cycles, maintenance-free operation" },
      { label: "Dual Drive", value: "Twin AC motors with electronic differential" },
      { label: "Charging", value: "Fast charging with opportunity top-up" },
      { label: "Smart BMS", value: "Real-time monitoring and diagnostics" },
    ],
    highlights: [
      "Optimal mid-range electric forklift for versatile applications",
      "LiFePO4 battery with 3000+ cycle life",
      "Zero emissions & low noise for indoor/outdoor use",
      "Fast 2.5-hour charging with opportunity charging support",
      "Dual AC drive motors for superior traction and control",
      "Significantly lower operating cost vs diesel equivalent",
    ],
  },
  {
    id: "h3-1-25t",
    overview: "H3 series 1-2.5t Lithium Battery Forklift. Compact, efficient, and reliable — the H3 series lithium forklift delivers consistent performance for light to medium-duty applications in warehousing, manufacturing, and retail logistics.",
    paramColumns: ["1.0T", "1.5T", "1.8T", "2.0T", "2.5T"],
    subModels: [
      { name: "1.0T", powerType: "48V Lithium", params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", battery: "48V / 300Ah", motors: "AC", weight: "2450", turningRadius: "1850", travelSpeed: "14", liftSpeed: "380" } },
      { name: "1.5T", powerType: "48V Lithium", params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", battery: "48V / 400Ah", motors: "AC", weight: "2750", turningRadius: "1950", travelSpeed: "14", liftSpeed: "370" } },
      { name: "1.8T", powerType: "80V Lithium", params: { capacity: "1800", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "AC", weight: "3050", turningRadius: "2000", travelSpeed: "14", liftSpeed: "360" } },
      { name: "2.0T", powerType: "80V Lithium", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "AC", weight: "3400", turningRadius: "2050", travelSpeed: "14", liftSpeed: "350" } },
      { name: "2.5T", powerType: "80V Lithium", params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "AC", weight: "4100", turningRadius: "2150", travelSpeed: "14", liftSpeed: "340" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motor", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "48V", capacity: "300 Ah", runtime: "5–7 hours", chargeTime: "2 hours (fast)" },
      { voltage: "48V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2.5 hours (fast)" },
      { voltage: "80V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2 hours (fast)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "8–10 hours", chargeTime: "2.5 hours (fast)" },
    ],
    features: [
      { label: "Compact Design", value: "Optimized for narrow aisles and tight spaces" },
      { label: "Lithium Battery", value: "Maintenance-free with long cycle life" },
      { label: "Fast Charging", value: "2-hour rapid charge with opportunity charging" },
      { label: "Zero Emissions", value: "Clean, quiet operation indoors" },
      { label: "Ergonomics", value: "Spacious cabin with excellent visibility" },
    ],
    highlights: [
      "Compact and maneuverable design for space-constrained operations",
      "LiFePO4 lithium battery — no watering, no acid, no fumes",
      "Rapid 2-hour charging — maximize uptime",
      "Zero emissions for indoor warehousing and retail logistics",
      "Reliable AC drive motor with regenerative braking",
      "Smart BMS with LCD display for real-time status monitoring",
    ],
  },
  {
    id: "g2-15-38t",
    overview: "G2 series 1.5-3.8t lithium battery counterbalanced forklift. A versatile electric workhorse combining the trusted G2 chassis platform with advanced lithium-ion technology for reliable, efficient operation across a wide capacity range.",
    paramColumns: ["1.5T", "1.8T", "2.0T", "2.5T", "3.0T", "3.5T", "3.8T"],
    subModels: [
      { name: "1.5T", powerType: "80V Lithium", params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "AC", weight: "2900", turningRadius: "1950", travelSpeed: "15", liftSpeed: "390" } },
      { name: "1.8T", powerType: "80V Lithium", params: { capacity: "1800", loadCenter: "500", liftHeight: "3000", battery: "80V / 400Ah", motors: "AC", weight: "3200", turningRadius: "2000", travelSpeed: "15", liftSpeed: "380" } },
      { name: "2.0T", powerType: "80V Lithium", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "AC", weight: "3600", turningRadius: "2100", travelSpeed: "15", liftSpeed: "370" } },
      { name: "2.5T", powerType: "80V Lithium", params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", motors: "AC", weight: "4300", turningRadius: "2180", travelSpeed: "15", liftSpeed: "360" } },
      { name: "3.0T", powerType: "80V Lithium", params: { capacity: "3000", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "AC", weight: "4900", turningRadius: "2280", travelSpeed: "15", liftSpeed: "340" } },
      { name: "3.5T", powerType: "80V Lithium", params: { capacity: "3500", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "AC", weight: "5400", turningRadius: "2380", travelSpeed: "15", liftSpeed: "320" } },
      { name: "3.8T", powerType: "80V Lithium", params: { capacity: "3800", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", motors: "AC", weight: "5800", turningRadius: "2450", travelSpeed: "15", liftSpeed: "300" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motor", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2 hours (fast)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "8–10 hours", chargeTime: "2.5 hours (fast)" },
      { voltage: "80V", capacity: "600 Ah", runtime: "10–12 hours", chargeTime: "3 hours (fast)" },
    ],
    features: [
      { label: "Wide Range", value: "1.5T to 3.8T — covers most warehouse applications" },
      { label: "Proven Chassis", value: "G2 platform with millions of hours in the field" },
      { label: "Lithium Battery", value: "3000+ cycles, rapid charging supported" },
      { label: "Low Maintenance", value: "No engine oil, filters, or spark plugs" },
      { label: "Smart BMS", value: "Battery health monitoring & predictive alerts" },
    ],
    highlights: [
      "Versatile 1.5T–3.8T range covers most material handling needs",
      "Proven G2 chassis with millions of field hours worldwide",
      "LiFePO4 lithium battery for reliable, maintenance-free power",
      "Fast charging with opportunity top-up capability",
      "AC drive motor with smooth acceleration and regenerative braking",
      "Spacious operator cabin with ergonomic controls",
      "Lower TCO than diesel — save on fuel, maintenance, and downtime",
    ],
  },
  {
    id: "g-85-10t",
    overview: "G series 8.5-10T Lithium Battery Forklift. High-capacity electric power for the most demanding industrial applications. Combines diesel-level strength with lithium-ion efficiency — zero emissions, lower energy costs, and reduced total cost of ownership.",
    paramColumns: ["8.5T", "10.0T"],
    subModels: [
      { name: "8.5T", powerType: "80V Lithium", params: { capacity: "8500", loadCenter: "600", liftHeight: "3000", battery: "80V / 1000Ah", motors: "2×AC", weight: "11800", turningRadius: "3700", travelSpeed: "20", liftSpeed: "280" } },
      { name: "10.0T", powerType: "80V Lithium", params: { capacity: "10000", loadCenter: "600", liftHeight: "3000", battery: "80V / 1200Ah", motors: "2×AC", weight: "13200", turningRadius: "3900", travelSpeed: "20", liftSpeed: "260" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motors", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "1000 Ah", runtime: "5–7 hours (heavy duty)", chargeTime: "4 hours (fast)" },
      { voltage: "80V", capacity: "1200 Ah", runtime: "6–8 hours (heavy duty)", chargeTime: "4.5 hours (fast)" },
    ],
    features: [
      { label: "Heavy Electric", value: "Diesel-class performance, zero emissions" },
      { label: "High Capacity", value: "Up to 1200Ah for full-shift heavy operations" },
      { label: "Dual Drive", value: "Heavy-duty twin AC motor system" },
      { label: "Energy Cost", value: "70% lower energy cost vs diesel equivalent" },
      { label: "Thermal Management", value: "Active battery cooling for continuous duty" },
    ],
    highlights: [
      "Diesel-class lifting power with zero emissions",
      "Ultra-high capacity lithium battery for demanding applications",
      "Dual AC drive motors for maximum traction and control",
      "Active battery thermal management for continuous operation",
      "70% lower energy costs compared to diesel forklifts",
      "Ideal for ports, heavy manufacturing, and steel industry",
      "Advanced BMS with predictive maintenance alerts",
    ],
  },
];

/* ============================================================
   ELECTRIC FORKLIFT TRUCKS (LEAD-ACID)
   ============================================================ */

const electricLeadAcidSpecs: ProductSpec[] = [
  {
    id: "g-2-25t",
    overview: "G series 2-2.5T lead-acid electric forklift. A reliable, cost-effective electric solution for standard warehouse and manufacturing operations. Proven lead-acid battery technology with straightforward maintenance and lower upfront investment.",
    paramColumns: ["2.0T", "2.5T"],
    subModels: [
      { name: "2.0T", powerType: "48V Lead-Acid", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "48V / 600Ah", motors: "AC", weight: "3700", turningRadius: "2100", travelSpeed: "13", liftSpeed: "320" } },
      { name: "2.5T", powerType: "48V Lead-Acid", params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", battery: "48V / 700Ah", motors: "AC", weight: "4400", turningRadius: "2200", travelSpeed: "13", liftSpeed: "300" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motor", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "48V", capacity: "600 Ah", runtime: "5–7 hours", chargeTime: "8–10 hours" },
      { voltage: "48V", capacity: "700 Ah", runtime: "6–8 hours", chargeTime: "8–10 hours" },
    ],
    features: [
      { label: "Proven Technology", value: "Time-tested lead-acid battery reliability" },
      { label: "Lower Upfront Cost", value: "More affordable initial investment vs lithium" },
      { label: "Easy Service", value: "Simple maintenance with standard procedures" },
      { label: "AC Drive", value: "Smooth acceleration with regenerative braking" },
      { label: "Zero Emissions", value: "Clean, quiet operation for indoor use" },
    ],
    highlights: [
      "Cost-effective electric solution with proven lead-acid technology",
      "Lower initial investment compared to lithium-ion alternatives",
      "AC drive motor for smooth, efficient operation",
      "Regenerative braking extends battery runtime",
      "Zero emissions for indoor warehouse and factory use",
      "Widely available battery replacement and servicing",
      "Straightforward maintenance with accessible components",
    ],
  },
];

/* ============================================================
   WAREHOUSE EQUIPMENTS
   ============================================================ */

const warehouseSpecs: ProductSpec[] = [
  {
    id: "g2-16-2t",
    overview: "G2 series 1.6-2T reach truck. Designed for high-density narrow aisle storage — maximizing warehouse cube utilization with exceptional maneuverability and precision load handling at height.",
    paramColumns: ["1.6T", "2.0T"],
    subModels: [
      { name: "1.6T", powerType: "48V Electric", params: { capacity: "1600", loadCenter: "600", liftHeight: "7500", battery: "48V / 500Ah", motors: "AC", weight: "3400", turningRadius: "1780", travelSpeed: "12", liftSpeed: "380" } },
      { name: "2.0T", powerType: "48V Electric", params: { capacity: "2000", loadCenter: "600", liftHeight: "7500", battery: "48V / 600Ah", motors: "AC", weight: "3800", turningRadius: "1850", travelSpeed: "12", liftSpeed: "350" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Max. Lifting Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "motors", label: "Drive Motor", unit: "" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "liftSpeed", label: "Lifting Speed", unit: "mm/s" },
    ],
    batteryOptions: [
      { voltage: "48V", capacity: "500 Ah", runtime: "6–8 hours", chargeTime: "8–10 hours" },
      { voltage: "48V", capacity: "600 Ah", runtime: "8–10 hours", chargeTime: "8–10 hours" },
    ],
    features: [
      { label: "Narrow Aisle", value: "Optimized for 2.8–3.2m aisle widths" },
      { label: "High Lift", value: "Configurable up to 12m lift height" },
      { label: "Precision Control", value: "Proportional hydraulic for smooth handling" },
      { label: "Visibility", value: "Panoramic mast and overhead guard design" },
      { label: "Stability", value: "Advanced stability system for high-lift safety" },
    ],
    highlights: [
      "Optimized for high-density narrow aisle storage",
      "Exceptional lift heights up to 12 meters",
      "Precision proportional hydraulic control",
      "Panoramic visibility through mast and overhead guard",
      "Advanced electronic stability system",
      "Ergonomic operator compartment for long shifts",
      "Maximizes warehouse cube utilization",
    ],
  },
];

/* ============================================================
   HEAVY FORKLIFT
   ============================================================ */

const heavySpecs: ProductSpec[] = [
  {
    id: "45ton-reach-stacker",
    overview: "45-ton Reach Stacker for container and heavy cargo handling. Purpose-built for ports, terminals, and intermodal yards — delivering exceptional lifting capacity, reach, and reliability in the most demanding operational environments.",
    paramColumns: ["45T"],
    subModels: [
      { name: "45T", powerType: "Diesel", params: { capacity: "45000", loadCenter: "1850", liftHeight: "15100", engine: "CUMMINS QSM11", enginePower: "250 kW", tiers: "1–5 High", totalWeight: "73000", travelSpeed: "25", gradeability: "25", spreader: "20'-40' Telescopic" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Max. Lifting Height", unit: "mm" },
      { key: "engine", label: "Engine", unit: "" },
      { key: "enginePower", label: "Engine Power", unit: "" },
      { key: "tiers", label: "Container Stacking", unit: "" },
      { key: "totalWeight", label: "Total Weight", unit: "kg" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
      { key: "spreader", label: "Spreader", unit: "" },
    ],
    features: [
      { label: "Lifting Power", value: "45 tons under spreader — handles fully loaded containers" },
      { label: "Stacking", value: "Stacks containers up to 5 tiers high" },
      { label: "Engine", value: "CUMMINS QSM11 — 250 kW reliable heavy-duty power" },
      { label: "Spreader", value: "Telescopic 20'-40' container spreader (ISO standard)" },
      { label: "Cabin", value: "Panoramic cabin with excellent all-around visibility" },
    ],
    highlights: [
      "45-ton lifting capacity under spreader",
      "Stacks containers up to 5 tiers high",
      "CUMMINS QSM11 heavy-duty diesel engine",
      "Telescopic spreader for 20'-40' ISO containers",
      "Panoramic operator cabin with climate control",
      "Heavy-duty axles and reinforced frame structure",
      "Advanced load sensing and stability control systems",
    ],
  },
  {
    id: "18ton-container-handler",
    overview: "18-ton Empty Container Handler. Specialized for efficient empty container stacking and handling at ports, depots, and logistics centers. Compact design with precise control for safe, high-speed container operations.",
    paramColumns: ["18T"],
    subModels: [
      { name: "18T", powerType: "Diesel", params: { capacity: "18000", loadCenter: "1220", liftHeight: "16500", engine: "CUMMINS 6BT5.9", enginePower: "112 kW", tiers: "1–8 High", totalWeight: "35200", travelSpeed: "28", gradeability: "25", spreader: "20'-40' Side-lift" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Max. Lifting Height", unit: "mm" },
      { key: "engine", label: "Engine", unit: "" },
      { key: "enginePower", label: "Engine Power", unit: "" },
      { key: "tiers", label: "Container Stacking", unit: "" },
      { key: "totalWeight", label: "Total Weight", unit: "kg" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
      { key: "spreader", label: "Spreader", unit: "" },
    ],
    features: [
      { label: "Empty Container", value: "Optimized for empty container handling — 18 tons" },
      { label: "Stacking Height", value: "Stacks up to 8 high — maximizes yard space" },
      { label: "Engine", value: "CUMMINS 6BT5.9 — fuel-efficient and reliable" },
      { label: "Spreader", value: "Side-lift spreader for 20'-40' containers" },
      { label: "Speed", value: "28 km/h travel speed for high-throughput operations" },
    ],
    highlights: [
      "18-ton capacity for efficient empty container handling",
      "8-high stacking capability maximizes yard density",
      "CUMMINS 6BT5.9 diesel engine — proven reliability",
      "Side-lift spreader for fast container engagement",
      "28 km/h travel speed for high-throughput terminal ops",
      "Compact design with excellent maneuverability",
      "Advanced hydraulic system with load sensing control",
    ],
  },
  {
    id: "28-32t-ic",
    overview: "28-32T IC Forklift Truck. Heavy-duty counterbalanced forklift engineered for the toughest industrial applications — steel mills, heavy manufacturing, construction, and marine terminals. Uncompromising power and durability.",
    paramColumns: ["28T", "32T"],
    subModels: [
      { name: "28T", powerType: "Diesel", params: { capacity: "28000", loadCenter: "1200", liftHeight: "4000", engine: "CUMMINS QSL9", enginePower: "209 kW", totalWeight: "38000", forkSize: "2400×300×120", turningRadius: "5700", travelSpeed: "24", gradeability: "20" } },
      { name: "32T", powerType: "Diesel", params: { capacity: "32000", loadCenter: "1250", liftHeight: "4000", engine: "CUMMINS QSL9", enginePower: "209 kW", totalWeight: "42000", forkSize: "2400×300×120", turningRadius: "5900", travelSpeed: "24", gradeability: "20" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "engine", label: "Engine", unit: "" },
      { key: "enginePower", label: "Engine Power", unit: "" },
      { key: "totalWeight", label: "Total Weight", unit: "kg" },
      { key: "forkSize", label: "Fork Size (L×W×T)", unit: "mm" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
    ],
    features: [
      { label: "Heavy-Duty Chassis", value: "Reinforced frame for extreme load conditions" },
      { label: "Engine", value: "CUMMINS QSL9 — 209 kW of reliable power" },
      { label: "Hydraulics", value: "Load-sensing hydraulic system for precision control" },
      { label: "Cabin", value: "ROPS/FOPS certified with climate control" },
      { label: "Visibility", value: "Panoramic cabin with 360° camera system (optional)" },
    ],
    highlights: [
      "28-32 ton heavy-duty counterbalanced forklift",
      "CUMMINS QSL9 209 kW turbocharged diesel engine",
      "Reinforced chassis for steel mills & heavy manufacturing",
      "Load-sensing hydraulic system for precise control",
      "ROPS/FOPS certified operator cabin",
      "Heavy-duty axles with planetary gear reduction",
      "Optional 360° camera system for enhanced safety",
    ],
  },
];

/* ============================================================
   TRACTORS
   ============================================================ */

const tractorSpecs: ProductSpec[] = [
  {
    id: "28-32t-ic-tractor",
    overview: "28-32T IC Forklift Truck (Tractor configuration). Purpose-built industrial tow tractor for heavy-duty material transport within factories, airports, and logistics centers. Exceptional drawbar pull for continuous duty cycles.",
    paramColumns: ["28T Tow", "32T Tow"],
    subModels: [
      { name: "28T Tow", powerType: "Diesel", params: { drawbar: "45000", capacity: "28000", weight: "12500", engine: "CUMMINS QSB6.7", enginePower: "164 kW", travelSpeed: "25", gradeability: "15" } },
      { name: "32T Tow", powerType: "Diesel", params: { drawbar: "50000", capacity: "32000", weight: "13500", engine: "CUMMINS QSB6.7", enginePower: "164 kW", travelSpeed: "25", gradeability: "15" } },
    ],
    paramHeaders: [
      { key: "drawbar", label: "Max. Drawbar Pull", unit: "N" },
      { key: "capacity", label: "Rated Towing Capacity", unit: "kg" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "engine", label: "Engine", unit: "" },
      { key: "enginePower", label: "Engine Power", unit: "" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
    ],
    features: [
      { label: "Drawbar Pull", value: "Up to 50,000 N for heavy trailer trains" },
      { label: "Engine", value: "CUMMINS QSB6.7 — proven industrial diesel" },
      { label: "Hitch", value: "Automatic coupling system with safety lock" },
      { label: "Cabin", value: "All-weather enclosed cabin with climate control" },
    ],
    highlights: [
      "Massive 45,000-50,000 N drawbar pull capability",
      "CUMMINS QSB6.7 164 kW diesel engine",
      "Automatic coupling system for quick trailer engagement",
      "All-weather enclosed cabin with climate control",
      "Designed for continuous multi-shift operation",
      "Heavy-duty chassis and drivetrain components",
    ],
  },
  {
    id: "qycd60-80",
    overview: "QYCD60-80 series industrial tow tractor. Compact and powerful electric tow tractor for efficient material transport in manufacturing plants, airports, and logistics hubs. Clean, quiet operation with low total cost of ownership.",
    paramColumns: ["QYCD60", "QYCD80"],
    subModels: [
      { name: "QYCD60", powerType: "Electric", params: { drawbar: "60000", capacity: "60000", weight: "3200", battery: "80V / 400Ah", travelSpeed: "12", gradeability: "10" } },
      { name: "QYCD80", powerType: "Electric", params: { drawbar: "80000", capacity: "80000", weight: "3800", battery: "80V / 500Ah", travelSpeed: "12", gradeability: "10" } },
    ],
    paramHeaders: [
      { key: "drawbar", label: "Max. Drawbar Pull", unit: "N" },
      { key: "capacity", label: "Rated Towing Capacity", unit: "kg" },
      { key: "weight", label: "Total Weight", unit: "kg" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "travelSpeed", label: "Travel Speed", unit: "km/h" },
      { key: "gradeability", label: "Gradeability", unit: "%" },
    ],
    batteryOptions: [
      { voltage: "80V", capacity: "400 Ah", runtime: "6–8 hours", chargeTime: "2 hours (fast)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "8–10 hours", chargeTime: "2.5 hours (fast)" },
    ],
    features: [
      { label: "Electric Power", value: "Zero emissions — ideal for indoor logistics" },
      { label: "Compact", value: "Maneuverable in tight factory and airport spaces" },
      { label: "Fast Charging", value: "2-hour lithium battery rapid charge" },
      { label: "Low Noise", value: "Quiet operation for noise-sensitive environments" },
    ],
    highlights: [
      "Electric tow tractor — zero emissions, low noise",
      "Up to 80,000 N drawbar pull capacity",
      "Lithium battery with 2-hour fast charging",
      "Compact design for tight maneuvering spaces",
      "Ideal for indoor factory and airport logistics",
      "Low operating cost vs diesel alternatives",
    ],
  },
];

/* ============================================================
   WHEELLOADER
   ============================================================ */

const wheelloaderSpecs: ProductSpec[] = [
  {
    id: "1-2t-wheel-loader",
    overview: "1-2T compact wheel loader. Versatile and agile — designed for construction, agriculture, landscaping, and industrial material handling. Small footprint with powerful lifting capacity and quick attachment change system.",
    paramColumns: ["1.0T", "1.5T", "2.0T"],
    subModels: [
      { name: "1.0T", powerType: "Diesel", params: { capacity: "1000", bucket: "0.5", engine: "CHANGCHAI 490", enginePower: "42 kW", weight: "3500", travelSpeed: "24", turningRadius: "4200" } },
      { name: "1.5T", powerType: "Diesel", params: { capacity: "1500", bucket: "0.7", engine: "YUCHAI YC4D80", enginePower: "55 kW", weight: "4800", travelSpeed: "25", turningRadius: "4500" } },
      { name: "2.0T", powerType: "Diesel", params: { capacity: "2000", bucket: "1.0", engine: "YUCHAI YC4D100", enginePower: "62 kW", weight: "6000", travelSpeed: "25", turningRadius: "4800" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Load", unit: "kg" },
      { key: "bucket", label: "Bucket Capacity", unit: "m³" },
      { key: "engine", label: "Engine", unit: "" },
      { key: "enginePower", label: "Engine Power", unit: "" },
      { key: "weight", label: "Operating Weight", unit: "kg" },
      { key: "travelSpeed", label: "Max. Travel Speed", unit: "km/h" },
      { key: "turningRadius", label: "Min. Turning Radius", unit: "mm" },
    ],
    features: [
      { label: "Quick Coupler", value: "Fast attachment changes — forks, buckets, brooms" },
      { label: "Compact", value: "Small footprint for confined job sites" },
      { label: "All-Terrain", value: "4WD with high ground clearance" },
      { label: "Visibility", value: "360° panoramic cabin visibility" },
    ],
    highlights: [
      "Versatile compact wheel loader for diverse applications",
      "Quick coupler system — switch attachments in minutes",
      "4-wheel drive with excellent all-terrain capability",
      "Available attachments: buckets, forks, brooms, grapples",
      "Roomy cabin with 360° visibility",
      "Fuel-efficient diesel engines with low emissions",
    ],
  },
];

/* ============================================================
   SPECIAL EQUIPMENTS
   ============================================================ */

const specialSpecs: ProductSpec[] = [
  {
    id: "ac-1-35t-explosion-proof",
    overview: "AC series 1-3.5t explosion-proof battery forklift. Fully certified for operation in Zone 1 & Zone 2 hazardous areas — chemical plants, oil refineries, paint factories, and pharmaceutical facilities. Comprehensive safety systems exceed ATEX and IECEx standards.",
    paramColumns: ["1.0T", "1.5T", "2.0T", "2.5T", "3.0T", "3.5T"],
    subModels: [
      { name: "1.0T", powerType: "Explosion-Proof Electric", params: { capacity: "1000", loadCenter: "500", liftHeight: "3000", battery: "48V / 400Ah", exClass: "Ex II 2G IIB T4" } },
      { name: "1.5T", powerType: "Explosion-Proof Electric", params: { capacity: "1500", loadCenter: "500", liftHeight: "3000", battery: "48V / 500Ah", exClass: "Ex II 2G IIB T4" } },
      { name: "2.0T", powerType: "Explosion-Proof Electric", params: { capacity: "2000", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", exClass: "Ex II 2G IIB T4" } },
      { name: "2.5T", powerType: "Explosion-Proof Electric", params: { capacity: "2500", loadCenter: "500", liftHeight: "3000", battery: "80V / 500Ah", exClass: "Ex II 2G IIB T4" } },
      { name: "3.0T", powerType: "Explosion-Proof Electric", params: { capacity: "3000", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", exClass: "Ex II 2G IIB T4" } },
      { name: "3.5T", powerType: "Explosion-Proof Electric", params: { capacity: "3500", loadCenter: "500", liftHeight: "3000", battery: "80V / 600Ah", exClass: "Ex II 2G IIB T4" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Rated Capacity", unit: "kg" },
      { key: "loadCenter", label: "Load Center", unit: "mm" },
      { key: "liftHeight", label: "Standard Lift Height", unit: "mm" },
      { key: "battery", label: "Battery", unit: "" },
      { key: "exClass", label: "Explosion Protection", unit: "" },
    ],
    batteryOptions: [
      { voltage: "48V", capacity: "400 Ah", runtime: "5–7 hours", chargeTime: "8–10 hours (safe charging)" },
      { voltage: "48V", capacity: "500 Ah", runtime: "6–8 hours", chargeTime: "8–10 hours (safe charging)" },
      { voltage: "80V", capacity: "500 Ah", runtime: "6–8 hours", chargeTime: "8–10 hours (safe charging)" },
      { voltage: "80V", capacity: "600 Ah", runtime: "8–10 hours", chargeTime: "8–10 hours (safe charging)" },
    ],
    features: [
      { label: "Certification", value: "ATEX / IECEx certified for Zone 1 & Zone 2" },
      { label: "Spark-Proof", value: "All electrical components fully enclosed & sealed" },
      { label: "Gas Detection", value: "Optional integrated gas monitoring system" },
      { label: "Anti-Static", value: "Anti-static tires and grounding systems" },
      { label: "Stainless Steel", value: "Corrosion-resistant fork carriage and fasteners" },
    ],
    highlights: [
      "ATEX & IECEx certified for Zone 1 & Zone 2 hazardous areas",
      "Fully enclosed, spark-proof electrical systems",
      "Anti-static tires with grounding straps",
      "Stainless steel components for corrosion resistance",
      "Optional gas detection and alarm system",
      "Temperature monitoring on all critical components",
      "Comprehensive safety interlocks and emergency shutdown",
    ],
  },
];

/* ============================================================
   OTHER PARTS & ATTACHMENTS
   ============================================================ */

const partsSpecs: ProductSpec[] = [
  {
    id: "gearbox",
    overview: "Genuine MLIFT gearbox — precision-engineered for optimal power transmission and long service life. Manufactured to OEM specifications with rigorous quality testing. Compatible with all MLIFT IC forklift series.",
    paramColumns: ["Standard", "Heavy-Duty"],
    subModels: [
      { name: "Standard", powerType: "Hydraulic Powershift", params: { speeds: "2 FWD / 2 REV", maxTorque: "200 Nm", weight: "85", applications: "1-3.5T forklifts" } },
      { name: "Heavy-Duty", powerType: "Hydraulic Powershift", params: { speeds: "3 FWD / 3 REV", maxTorque: "350 Nm", weight: "140", applications: "4-10T forklifts" } },
    ],
    paramHeaders: [
      { key: "speeds", label: "Speeds", unit: "" },
      { key: "maxTorque", label: "Max. Input Torque", unit: "" },
      { key: "weight", label: "Weight", unit: "kg" },
      { key: "applications", label: "Applications", unit: "" },
    ],
    features: [
      { label: "OEM Quality", value: "Manufactured to exact OEM specifications" },
      { label: "Tested", value: "100% factory dyno-tested before shipping" },
      { label: "Warranty", value: "12-month warranty on all gearboxes" },
    ],
    highlights: [
      "OEM-spec precision gearbox for MLIFT forklifts",
      "Hydraulic powershift for smooth direction changes",
      "100% dyno-tested before shipment",
      "12-month warranty with global parts support",
      "Compatible with 1-10T IC forklift models",
    ],
  },
  {
    id: "push-pull",
    overview: "Push-Pull attachment for slip sheet handling. Enables efficient, damage-free handling of bagged goods, boxed products, and slip-sheeted loads — eliminating the need for pallets and reducing shipping costs.",
    paramColumns: ["Standard"],
    subModels: [
      { name: "Standard", powerType: "Hydraulic", params: { capacity: "1800", opening: "1080", weight: "350", faceplate: "1050", mountingClass: "II / III" } },
    ],
    paramHeaders: [
      { key: "capacity", label: "Load Capacity", unit: "kg" },
      { key: "opening", label: "Opening Range", unit: "mm" },
      { key: "weight", label: "Attachment Weight", unit: "kg" },
      { key: "faceplate", label: "Faceplate Width", unit: "mm" },
      { key: "mountingClass", label: "Fork Mounting Class", unit: "" },
    ],
    features: [
      { label: "Slip Sheet", value: "Handles slip-sheeted loads without pallets" },
      { label: "Gripper", value: "Hydraulic gripper jaw with adjustable pressure" },
      { label: "Push Plate", value: "Smooth push-off for gentle load placement" },
      { label: "Compatible", value: "Fits most 1.5-3.5T counterbalanced forklifts" },
    ],
    highlights: [
      "Eliminates pallet costs with slip sheet handling",
      "Hydraulic gripper with adjustable pressure control",
      "Smooth push plate for gentle load placement",
      "Fits standard class II/III fork carriages",
      "Ideal for food, beverage, and bagged goods industries",
      "Reduces shipping weight and container space usage",
    ],
  },
];

/* ============================================================
   MASTER SPEC MAP — caches all specs by model id
   ============================================================ */

const allSpecs: ProductSpec[] = [
  ...icProductSpecs,
  ...electricLithiumSpecs,
  ...electricLeadAcidSpecs,
  ...warehouseSpecs,
  ...heavySpecs,
  ...tractorSpecs,
  ...wheelloaderSpecs,
  ...specialSpecs,
  ...partsSpecs,
];

/** Get product specification by model id */
export function getSpecByModelId(modelId: string): ProductSpec | undefined {
  return allSpecs.find(s => s.id === modelId);
}
