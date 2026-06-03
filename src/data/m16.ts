// MLIFT M16 — Round Bale Wrapper (仿 GÖWEIL G1015 规格)
// 命名：MLIFT M16
// 配色：RAL 1019 米灰燕麦色 (60% 主色) + RAL 8014 深咖啡色 (30% 辅色)

export interface M16Spec {
  label: string;
  value: string;
  group?: string;
}

export const m16 = {
  slug: "m16-round-bale-wrapper",
  name: "MLIFT M16",
  tagline: "Round Bale Wrapper",
  description:
    "The MLIFT M16 roller wrapper combines compact, robust design with exceptional reliability. Two rollers actuated in series ensure even bale rotation for consistent film coverage. Designed for farmers who demand efficiency — transport, wrap, and stack with a single machine.",

  // 核心参数亮点
  highlights: [
    { icon: "weight", label: "Machine Weight", value: "985 kg" },
    { icon: "bale", label: "Bale Diameter", value: "0.90 – 1.60 m" },
    { icon: "film", label: "Film Width", value: "750 mm" },
    { icon: "power", label: "Oil Requirement", value: "min 20 L/min" },
  ],

  // 完整技术规格 — 按组分类
  specs: [
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Machine Weight", value: "985 kg (2,170 lbs)" },
        { label: "Length", value: "2,220 mm (7' 3\")" },
        { label: "Width", value: "1,800 mm (5' 11\")" },
        { label: "Height", value: "2,355 mm (7' 9\")" },
        { label: "Length (with support rolls)", value: "2,370 mm (7' 9\")" },
        { label: "Height (with support rolls)", value: "2,505 mm (8' 3\")" },
      ],
    },
    {
      group: "Bale Parameters",
      items: [
        { label: "Bale Diameter Range", value: "0.90 – 1.60 m (36\" – 63\")" },
        { label: "Max Bale Weight", value: "1,200 kg (2,600 lbs)" },
        { label: "Roller Opening Width", value: "1,750 mm (5' 9\")" },
      ],
    },
    {
      group: "Hydraulic Requirements",
      items: [
        { label: "Oil Flow", value: "min 20 L/min" },
        { label: "Max Pressure", value: "190 bar" },
        { label: "Load Sensing", value: "Supported (optional LS mode)" },
        { label: "Pressure Connection", value: "1× pressure line" },
        { label: "Return Connection", value: "1× non-pressurized return" },
      ],
    },
    {
      group: "Electrical System",
      items: [
        { label: "Power Socket", value: "3-pin socket" },
        { label: "Power Supply", value: "Direct battery connection" },
        { label: "Cable Cross-Section", value: "2 × 6 mm²" },
      ],
    },
    {
      group: "Wrapping System",
      items: [
        { label: "Wrapping Arm", value: "Single arm" },
        { label: "Film Stretch Unit", value: "750 mm (30\") roll" },
        { label: "Film Pre-Stretcher", value: "3 patent plastic rollers, temp-independent" },
        { label: "Film Roll Storage", value: "1 roll (standard), 2 rolls (lighting pack)" },
        { label: "Film Cutter", value: "Stainless steel blade, precision cut" },
      ],
    },
    {
      group: "Hitch & Mounting",
      items: [
        { label: "3-Point Linkage", value: "Cat. II / Cat. III" },
        { label: "Mounting Position", value: "Front or rear" },
        { label: "Hydraulic Top Link", value: "Optional (program-controlled tilt)" },
        { label: "Balance Weight", value: "~60 kg (optional)" },
      ],
    },
  ],

  // 关键特性
  features: [
    {
      title: "Compact & Robust",
      desc: "Ultra-compact design built to withstand daily agricultural demands. Hydraulic cylinders and motors are protected inside the frame.",
      image: "m16-main.jpg",
    },
    {
      title: "Powered Roller Drive",
      desc: "Two rollers actuated in series ensure consistent, even bale rotation for uniform film coverage — no slipping, no uneven wrapping.",
      image: "m16-rollers.jpg",
    },
    {
      title: "Smart Control System",
      desc: "STANDARD program control with electronic joystick and radio remote. Set it and let the machine handle the wrapping cycle.",
      image: "m16-control.jpg",
    },
    {
      title: "Precision Film Stretcher",
      desc: "Three patent rollers provide temperature-independent, uniform film stretching. Achieve consistent coverage in any weather.",
      image: "m16-arm.jpg",
    },
    {
      title: "Built-In Bale Tipper",
      desc: "Optional bale tipper stands the wrapped bale upright — no separate handling needed. Transport, wrap, and stack in one pass.",
      image: "m16-tipper-detail.jpg",
    },
    {
      title: "Clear Operator View",
      desc: "Open side frame design gives the operator a clear view of the bale and wrapping arm at all times — safer and more precise.",
      image: "m16-side.jpg",
    },
    {
      title: "LED Work Lighting",
      desc: "Standard LED headlights illuminate the work area for safe operation in low-light conditions, early mornings, or late evenings.",
    },
    {
      title: "Film Monitoring",
      desc: "Optional film monitoring automatically stops wrapping if film tears or runs out — no wasted wrap, no missed bales.",
    },
  ],

  // 选配件
  options: [
    "Bale Tipper (stands bale upright after wrapping)",
    "Hydraulic Top Link (program-controlled tilt adjustment)",
    "Support Rolls",
    "Balance Weight (~60 kg)",
    "Lighting Pack (additional film roll storage + work lights)",
    "Film Monitoring Unit (auto-stop on film tear/empty)",
    "PTO Drive Kit (pump + gearbox + 30L oil tank)",
    "Bale Counter",
  ],

  // 图片集（用于详情页画廊）
  gallery: [
    { src: "m16-main.jpg", alt: "MLIFT M16 Round Bale Wrapper — front view" },
    { src: "m16-field-1.jpg", alt: "M16 in field operation" },
    { src: "m16-field-2.jpg", alt: "M16 loading and stacking bales" },
    { src: "m16-pickup.jpg", alt: "M16 picking up a round bale" },
    { src: "m16-wrapping.jpg", alt: "M16 wrapping process" },
    { src: "m16-side.jpg", alt: "M16 side profile — open frame design" },
  ],

  // Hero 轮播图片
  heroImages: [
    { src: "/images/m16/m16/m16-main.jpg", alt: "MLIFT M16 — Professional Round Bale Wrapper" },
    { src: "/images/m16/m16/m16-field-1.jpg", alt: "M16 in field operation" },
    { src: "/images/m16/m16/m16-field-2.jpg", alt: "M16 stacking wrapped bales" },
  ],

  // 规格亮点（首页展示）
  keySpecs: [
    { icon: "📐", label: "Dimensions (L×W×H)", value: "2,220 × 1,800 × 2,355 mm" },
    { icon: "⚖️", label: "Machine Weight", value: "985 kg" },
    { icon: "🔄", label: "Bale Diameter", value: "0.90 – 1.60 m" },
    { icon: "📦", label: "Max Bale Weight", value: "1,200 kg" },
    { icon: "🎬", label: "Film Width", value: "750 mm (30\")" },
    { icon: "🔗", label: "3-Point Hitch", value: "Cat. II / III" },
  ],
};
