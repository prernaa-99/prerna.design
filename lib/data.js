export const PRERNA_BIO =
  "Designer working at the seam of brand, product, and motion. Currently freelancing from Bangalore, taking on selective work for ambitious teams.";

export const PROJECTS = [
  {
    n: "01",
    year: "2024",
    title: "STAGE",
    subtitle:
      "Scaling discovery for the next million users — a culturally-rooted content tagging framework that drove 30% viewing growth.",
    tags: ["Product", "Research", "Information architecture"],
    role: "Product designer",
    accent: "#2e5c8a",
    href: "/case-stage",
    cover: "/images/stage/home-1.png",
  },
  {
    n: "02",
    year: "2024",
    title: "STAGE · Platter",
    subtitle: "Turning static into intent — redesigning the homepage poster from passive visual into an interactive preview that drove a +19.6% preview-to-content lift.",
    tags: ["Product", "Interaction", "Motion"],
    role: "Product designer",
    accent: "#3a6ea5",
    href: "/case-stage-platter",
    cover: "/2_with_video.png",
  },
  {
    n: "03",
    year: "2024",
    title: "Field Notes 02",
    subtitle: "Annual print publication on slow tools and craft software",
    tags: ["Print", "Editorial"],
    role: "Editor & designer",
    accent: "#44617f",
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Now",
    role: "Independent designer",
    org: "Self-employed",
    note: "Brand, product, and editorial work for early-stage teams.",
  },
  {
    period: "2022 — 2024",
    role: "Senior Product Designer",
    org: "Counterweight Studio",
    note: "Led design on three platform engagements; built the studio's component library.",
  },
  {
    period: "2020 — 2022",
    role: "Product Designer",
    org: "Northbound",
    note: "Logistics and operations tooling. First design hire.",
  },
  {
    period: "2018 — 2020",
    role: "Designer",
    org: "Studio Plural",
    note: "Brand systems and editorial for cultural institutions and non-profits.",
  },
];

export const TOOLS = [
  { name: "Figma", color: "#a259ff", level: "Daily", desc: "Primary canvas" },
  { name: "After Effects", color: "#cf3a1f", level: "Frequent", desc: "Motion & micro-interactions" },
  { name: "HTML/CSS", color: "#e44d26", level: "Daily", desc: "Hand-coded prototypes" },
  { name: "React", color: "#61dafb", level: "Comfortable", desc: "Light functional components" },
  { name: "Cinema 4D", color: "#1162e8", level: "Occasional", desc: "3D explorations" },
  { name: "Pen + Paper", color: "#f5d6b8", level: "Always", desc: "First pass for everything" },
  { name: "Typography", color: "#d4af37", level: "Specialty", desc: "Editorial layout & systems" },
  { name: "Brand", color: "#3a9b5c", level: "Specialty", desc: "Identity & voice" },
  { name: "Photography", color: "#6a3d5e", level: "Hobby", desc: "35mm film" },
  { name: "Writing", color: "#e8dcc4", level: "Often", desc: "Zine + essays" },
];

// Tonal blue palette, derived from the hero (portfoluo_2026 node 1:2).
// Foundation is the hero navy #1d2f46; accent is a steel/denim blue that sits
// in the same cool hue family so the whole site reads as one blue system.
export const V2 = {
  bg: "#fcfcfc",      // near-white surface (from hero)
  bgDeep: "#f1f4f8",  // faint blue-gray — alt sections / deeper surface
  ink: "#1d2f46",     // navy — primary text (from hero)
  ink2: "#34496a",    // lighter navy — secondary text
  muted: "#6b7a91",   // blue-gray — captions, labels, muted text
  rule: "#1d2f46",    // navy — strong rules / borders
  ruleSoft: "#d4dbe5",// soft blue-tinted hairline
  accent: "#2e5c8a",  // steel / denim blue — CTAs, links, active states
  paper: "#ffffff",   // cards / light surface (also light text on dark)
  dark: "#1d2f46",    // dark sections → navy
};

export const FP = {
  display: "'Space Grotesk', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
  heroDisplay: "'Montserrat', sans-serif",
};

export const SPRING = "cubic-bezier(0.23, 1, 0.32, 1)";
