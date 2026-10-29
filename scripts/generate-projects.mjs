import fs from "fs";

const manifest = JSON.parse(
  fs.readFileSync("scripts/portfolio-manifest.json", "utf8"),
);

const g = (slug) => manifest[slug]?.gallery ?? [];
const cover = (slug, fallback) =>
  manifest[slug]?.cover ?? fallback ?? `/images/portfolio/${slug}/0.png`;

/** Rich client project metadata keyed by slug */
const meta = {
  adventures: {
    title: "Adventures",
    category: "Travel / Brand",
    technologies: "WordPress · Custom theme",
    liveUrl: null,
    description: "Travel and experiences brand site with a bold visual landing.",
    details:
      "Designed and built a promotional website for an adventures brand, focusing on strong photography, clear CTAs, and a lightweight content structure.",
    highlights: ["Hero-led landing", "Service/experience sections", "Mobile-first layout"],
  },
  aisha: {
    title: "Aisha Ameen",
    category: "Interior design portfolio",
    technologies: "PHP · Custom theme · Multilingual",
    liveUrl: "https://aishaameen.com",
    description:
      "Luxury interior design portfolio for Aisha Ameen  project galleries, products, and consultation flows.",
    details:
      "Built a polished multi-page portfolio for interior designer Aisha Ameen, including project showcases (e.g. Bronze Oasis), products, media, and consultation requests with EN language routing.",
    highlights: [
      "Full-bleed project hero sliders",
      "Projects & products catalogs",
      "Consultation and contact flows",
    ],
  },
  "art-deco": {
    title: "Art Deco",
    category: "Retail / Brand",
    technologies: "WordPress · WooCommerce-ready",
    liveUrl: "https://artdeco-kw.com",
    description: "Kuwait Art Deco brand website with a refined product-first presentation.",
    details:
      "Delivered a brand website for Art Deco in Kuwait  elegant typography, product storytelling, and clear navigation for browsing collections.",
    highlights: ["Brand storytelling", "Collection-focused layout", "Responsive storefront feel"],
  },
  automotive: {
    title: "Mt Pritchard Automotive",
    category: "Automotive services",
    technologies: "WordPress · Local SEO",
    liveUrl: "https://mtpritchardautomotive.com.au",
    description:
      "Australian auto workshop site  services, team, testimonials, and booking CTAs.",
    details:
      "Built the marketing site for Mt Pritchard Automotive: services overview, 40+ years experience story, workshop gallery, team, client feedback, and schedule-a-visit CTAs tuned for local search.",
    highlights: [
      "Service cards & booking CTAs",
      "Team and workshop gallery",
      "Testimonials + local SEO copy",
    ],
  },
  "back-combined": {
    title: "Back Combined",
    category: "Corporate / Brand",
    technologies: "WordPress · Custom sections",
    liveUrl: "https://backcombined.com",
    description: "Corporate brand website with clean sections and service storytelling.",
    details:
      "Implemented a modern corporate site for Back Combined with structured service sections and a clear conversion path.",
    highlights: ["Service storytelling", "Clean corporate UI", "Clear contact path"],
  },
  bcc: {
    title: "BCC Specialities",
    category: "Industrial / Brand",
    technologies: "WordPress · Custom theme",
    liveUrl: "https://bccspecialities.com",
    description: "Industrial specialties company site with product and capability focus.",
    details:
      "Delivered BCC Specialities’ public site highlighting products/capabilities, with staging iterations on Carrot Media infrastructure.",
    highlights: ["Capability showcase", "Product-oriented pages", "Brand-consistent UI"],
  },
  bcc1: {
    title: "BCC Online",
    category: "E-commerce / Industrial",
    technologies: "Web · Online catalog",
    liveUrl: null,
    description: "Online catalog experience for BCC  product browsing and ordering flows.",
    details:
      "Built an online-facing BCC catalog experience (Bcc Online / online-v0) for browsing specialties products beyond the marketing site.",
    highlights: ["Online catalog", "Product browsing", "Order-oriented UX"],
  },
  boltr: {
    title: "Boltr",
    category: "Brand website",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Bold brand landing for Boltr with a sharp visual identity.",
    details:
      "Created a compact brand website for Boltr emphasizing a strong first impression and simple content hierarchy.",
    highlights: ["Strong brand identity", "Landing-focused layout"],
  },
  brainy: {
    title: "Brainy",
    category: "Education / Brand",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Education-oriented brand site with clear program messaging.",
    details:
      "Designed and implemented Brainy’s brand website to present programs and value props in a friendly, scannable layout.",
    highlights: ["Program messaging", "Friendly visual system"],
  },
  "carrot-media": {
    title: "Carrot Media",
    category: "Agency website",
    technologies: "PHP · Custom theme · Portfolio",
    liveUrl: "https://carrotmedia.info",
    description:
      "Agency site for Carrot Media  about, portfolio, and multiple redesign iterations.",
    details:
      "Built and iterated Carrot Media’s agency website (original + New Carrot redesigns), including about, portfolio, and case-study presentation used across client staging.",
    highlights: [
      "Agency portfolio system",
      "Multiple redesign versions",
      "About & case presentation",
    ],
  },
  dar: {
    title: "Dar Engineering",
    category: "Architecture / Construction",
    technologies: "HTML · Custom site",
    liveUrl: "https://darengineeringandconstruction.com",
    description:
      "Engineering & construction site with architecture projects and case pages.",
    details:
      "Delivered Dar Engineering and Construction’s site with architecture project pages (e.g. Bourji Village) and a structured projects archive.",
    highlights: ["Project case pages", "Architecture portfolio", "Company services"],
  },
  "emm-ali": {
    title: "Emm Ali",
    category: "Food e-commerce",
    technologies: "WordPress · WooCommerce",
    liveUrl: "https://emm-ali.com.au",
    description: "Australian food brand shop  product pages and storefront.",
    details:
      "Implemented Emm Ali’s e-commerce experience including shop listings and product detail pages (e.g. apple juice) for an Australian food brand.",
    highlights: ["WooCommerce storefront", "Product detail pages", "Shop collections"],
  },
  ewg: {
    title: "EWG",
    category: "Corporate / Brand",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Corporate brand website with multi-section storytelling.",
    details:
      "Delivered EWG’s multi-section brand website covering company story, offerings, and contact pathways.",
    highlights: ["Multi-section brand story", "Corporate presentation"],
  },
  germaid: {
    title: "Germaid",
    category: "Brand website",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Brand website for Germaid with a clean promotional layout.",
    details:
      "Built Germaid’s promotional brand site focusing on clarity and mobile readability.",
    highlights: ["Promotional landing", "Clean visual hierarchy"],
  },
  golden: {
    title: "Golden",
    category: "Brand / Hospitality",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Golden brand site with warm hospitality-oriented visuals.",
    details:
      "Created Golden’s brand website with warm imagery and straightforward service/content sections.",
    highlights: ["Hospitality brand feel", "Service sections"],
  },
  "home-made-by-kathy": {
    title: "Home Made By Kathy",
    category: "Food e-commerce",
    technologies: "Shopify · Collections",
    liveUrl: "https://homemadebykathycriniti.com.au",
    description:
      "Australian homemade food shop  collections, product pages, and about story.",
    details:
      "Built Home Made By Kathy Criniti’s Shopify storefront with shop collections, product detail pages (e.g. shepherd’s pie), and about-us storytelling.",
    highlights: ["Shopify collections", "Product pages", "Brand about story"],
  },
  "j-and-k": {
    title: "J & K",
    category: "Brand website",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Compact brand website for J & K.",
    details:
      "Delivered a focused brand site for J & K with a simple structure and strong cover visual.",
    highlights: ["Compact brand landing"],
  },
  koila: {
    title: "Koila",
    category: "Brand / Product",
    technologies: "HTML · Landing",
    liveUrl: null,
    description: "Koila product/brand landing with a modern staged design.",
    details:
      "Implemented Koila’s brand landing (v4 staging) with a modern product-forward layout.",
    highlights: ["Product-forward landing", "Staged brand design"],
  },
  "life-lift-by-tima": {
    title: "Life Lift By Tima",
    category: "Wellness / Services",
    technologies: "WordPress · Services pages",
    liveUrl: "https://lifeliftbytima.com",
    description: "Wellness brand site  services, about, and booking-oriented pages.",
    details:
      "Built Life Lift By Tima’s wellness website covering services, about, and clear paths to get in touch.",
    highlights: ["Services pages", "About story", "Conversion-focused CTAs"],
  },
  "maya-delight": {
    title: "Maya Delight",
    category: "Food / Brand",
    technologies: "HTML · Brand site",
    liveUrl: null,
    description: "Food brand site for Maya’s Delights with construction-to-launch visuals.",
    details:
      "Delivered Maya Delight / Maya’s Delights brand pages including a construction-stage landing and polished brand screens.",
    highlights: ["Food brand landing", "Launch-ready visuals"],
  },
  "my-site": {
    title: "My Site",
    category: "Personal / Portfolio",
    technologies: "Web · Portfolio",
    liveUrl: null,
    description: "Earlier personal portfolio experiments and layout explorations.",
    details:
      "Personal site explorations capturing layout and presentation experiments before the current portfolio rebuild.",
    highlights: ["Portfolio experiments", "Layout explorations"],
  },
  oasis: {
    title: "Oasis",
    category: "Brand website",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Oasis brand website with a calm, hospitality-inspired look.",
    details:
      "Created Oasis’s brand website emphasizing calm visuals and straightforward content sections.",
    highlights: ["Hospitality-inspired brand"],
  },
  pos: {
    title: "Restaurant POS",
    category: "Web app / Commerce",
    technologies: "React · Analytics · Kitchen display",
    liveUrl: "https://github.com/makram24/React-Pos",
    description:
      "Restaurant POS  tables, orders, kitchen, inventory, and analytics dashboards.",
    details:
      "Full restaurant point-of-sale web app covering table orders, kitchen display, inventory, admin, and multi-view analytics dashboards for retail/restaurant workflows.",
    highlights: [
      "Tables & table orders",
      "Kitchen + orders boards",
      "Inventory & analytics",
    ],
  },
  prima: {
    title: "Prima ME",
    category: "Building materials",
    technologies: "HTML · Product catalog",
    liveUrl: null,
    description:
      "Building materials catalog  façades, marble/stones, fire doors, and more.",
    details:
      "Built Prima ME’s product catalog site covering fiber cement façades, marble and stones, Padilla fire doors, and related material lines.",
    highlights: [
      "Product category pages",
      "Material catalogs",
      "Industrial brand presentation",
    ],
  },
  reaya: {
    title: "Reaya",
    category: "Care platform / Marketplace",
    technologies: "WordPress · WooCommerce · EN/AR",
    liveUrl: "https://reaya.co",
    description:
      "Kuwait care marketplace  newborn, elderly, and special-needs services with shop.",
    details:
      "Delivered Reaya, a bilingual care platform connecting families in Kuwait with professional care services, including service categories, shop/offers, FAQs, and company partner areas.",
    highlights: [
      "EN/AR language toggle",
      "Care service categories",
      "Shop + partner sections",
    ],
  },
  "rolling-grill": {
    title: "Rolling Grill",
    category: "Food / Brand",
    technologies: "HTML · Brand site",
    liveUrl: null,
    description: "Food brand site for Rolling Grill with menu-forward visuals.",
    details:
      "Built Rolling Grill’s brand website with appetite-driven visuals and clear menu/brand storytelling.",
    highlights: ["Menu-forward brand", "Food photography layout"],
  },
  "social-bang": {
    title: "Social Bang",
    category: "Agency / Media",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Social media agency brand site with punchy campaign visuals.",
    details:
      "Built Social Bang’s agency website highlighting campaigns and social media services with energetic visuals.",
    highlights: ["Agency brand", "Campaign visuals"],
  },
  "styling-by-sal": {
    title: "Styling By Sal",
    category: "Fashion / Services",
    technologies: "WordPress · Services",
    liveUrl: "https://stylingbysal.ae",
    description: "UAE styling brand  services, about, and booking-oriented pages.",
    details:
      "Delivered Styling By Sal’s UAE website covering services, about, and a polished brand presentation for personal styling offerings.",
    highlights: ["Services pages", "About story", "Fashion brand UI"],
  },
  "three-apes-media": {
    title: "Three Apes Media",
    category: "Media / Agency",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Media agency brand site for Three Apes Media.",
    details:
      "Built Three Apes Media’s brand website with multi-screen presentations of services and creative work.",
    highlights: ["Agency brand", "Creative service presentation"],
  },
  vida: {
    title: "Vida Beauty Clinic",
    category: "Clinic / Beauty",
    technologies: "Web · Brand site",
    liveUrl: null,
    description: "Beauty clinic website with services and treatment presentation.",
    details:
      "Delivered Vida Beauty Clinic’s marketing site covering treatments, clinic atmosphere, and contact pathways.",
    highlights: ["Clinic brand", "Treatment presentation"],
  },
  zoufa: {
    title: "Zoufa Shop",
    category: "Food e-commerce",
    technologies: "WordPress · WooCommerce",
    liveUrl: "https://zoufashop.com",
    description: "Nuts & crackers e-commerce  shop categories, about, and contact.",
    details:
      "Built Zoufa Shop’s e-commerce experience with product categories (nuts & crackers), about, and contact pages for a specialty food retailer.",
    highlights: ["Category shop pages", "About & contact", "Food retail brand"],
  },
};

const remoteOnly = [
  {
    id: 1,
    slug: "2ejjeh",
    title: "2ejjeh",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "https://card.bytebeirut.com/makram/assets/imgs/portfolio/2ejjeh/0.png",
    liveUrl: null,
    description: "Brand website delivered for 2ejjeh.",
    details:
      "Client brand website for 2ejjeh with a focused promotional layout and clear contact path.",
    highlights: ["Brand landing", "Promotional layout"],
  },
  {
    id: 4,
    slug: "alfreej",
    title: "Alfreej",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "https://card.bytebeirut.com/makram/assets/imgs/portfolio/alfreej/0.png",
    liveUrl: null,
    description: "Brand website delivered for Alfreej.",
    details:
      "Client brand website for Alfreej with service-oriented content sections.",
    highlights: ["Brand site", "Service sections"],
  },
  {
    id: 27,
    slug: "mocha-coffee-house",
    title: "Mocha Coffee House",
    category: "Hospitality / Brand",
    technologies: "Web · Brand site",
    image:
      "https://card.bytebeirut.com/makram/assets/imgs/portfolio/mocha%20coffee%20house/0.png",
    liveUrl: null,
    description: "Café brand website for Mocha Coffee House.",
    details:
      "Hospitality brand site for Mocha Coffee House with menu-forward presentation.",
    highlights: ["Café brand", "Menu presentation"],
  },
];

const slugToId = {
  adventures: 2,
  aisha: 3,
  "art-deco": 5,
  automotive: 6,
  "back-combined": 7,
  bcc: 8,
  bcc1: 9,
  boltr: 10,
  brainy: 11,
  "carrot-media": 13,
  dar: 14,
  "emm-ali": 17,
  ewg: 18,
  germaid: 19,
  golden: 20,
  "home-made-by-kathy": 21,
  "j-and-k": 22,
  koila: 24,
  "life-lift-by-tima": 25,
  "maya-delight": 26,
  "my-site": 28,
  oasis: 29,
  pos: 30,
  prima: 33,
  reaya: 34,
  "rolling-grill": 35,
  "social-bang": 37,
  "styling-by-sal": 38,
  "three-apes-media": 39,
  vida: 40,
  zoufa: 41,
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function arr(lines) {
  return `[${lines.map((x) => `"${esc(x)}"`).join(", ")}]`;
}

function emitProject(p) {
  const gallery = p.gallery?.length ? p.gallery : [p.image];
  const live = p.liveUrl ? `"${esc(p.liveUrl)}"` : "null";
  return `  {
    id: ${p.id},
    kind: "client" as const,
    slug: "${p.slug}",
    title: "${esc(p.title)}",
    category: "${esc(p.category)}",
    technologies: "${esc(p.technologies)}",
    image: "${esc(p.image)}",
    gallery: ${arr(gallery)},
    url: "/myworks/${p.slug}",
    liveUrl: ${live},
    description: "${esc(p.description)}",
    details: "${esc(p.details)}",
    highlights: ${arr(p.highlights || [])},
  }`;
}

const clients = [];

for (const [slug, id] of Object.entries(slugToId)) {
  const m = meta[slug];
  if (!m) continue;
  const gallery = g(slug);
  clients.push({
    id,
    slug,
    ...m,
    image: cover(slug, gallery[0]),
    gallery,
  });
}

for (const r of remoteOnly) {
  clients.push({
    ...r,
    gallery: [r.image],
  });
}

clients.sort((a, b) => a.id - b.id);

const productBlocks = [
  {
    id: 100,
    slug: "agensi-agent-skills",
    title: "Agensi Agent Skills",
    category: "AI Agents / Product",
    technologies: "MCP · Cursor Skills · Agensi · SkillHQ · BuySkills",
    image: "/images/agensi-skills.jpg",
    gallery: ["/images/agensi-skills.jpg"],
    liveUrl: "https://www.agensi.io/creators/makram-al-moghrabi",
    description:
      "24 live paid agent skills  CI/CD Doctor, CRM MCP Builder, Env Doctor Pro, and safe confirm-before-write operators.",
    details:
      "A live storefront of paid Cursor/MCP agent skills published across Agensi, SkillHQ, and BuySkills  focused on safe confirm-before-write operators for CI/CD, CRM, env, and ops workflows.",
    highlights: [
      "24 live paid skills",
      "Multi-storefront distribution",
      "Confirm-before-write safety",
    ],
  },
  {
    id: 101,
    slug: "minicrm-mcp",
    title: "MiniCRM MCP",
    category: "MCP / TypeScript",
    technologies: "TypeScript · MCP · miniCRM API",
    image: 'ghOg("MiniCRM-MCP")',
    galleryExpr: true,
    liveUrl: "https://github.com/makram24/MiniCRM-MCP",
    description:
      "Public MCP server so AI agents can run miniCRM safely with schema-first tools.",
    details:
      "Open-source MCP server that exposes miniCRM operations to AI agents with schema-first tools and safe defaults  the foundation behind MiniCRM Operator skills.",
    highlights: ["Public MCP server", "Schema-first tools", "Agent-safe CRM ops"],
  },
  {
    id: 102,
    slug: "releaseguard-agent",
    title: "ReleaseGuard Agent",
    category: "AI / DevOps",
    technologies: "TypeScript · AI agents · PR risk analysis",
    image: 'ghOg("ReleaseGuard-Agent")',
    galleryExpr: true,
    liveUrl: "https://github.com/makram24/ReleaseGuard-Agent",
    description:
      "AI agent that scores pull-request risk and release readiness before you ship.",
    details:
      "AI-assisted pull-request risk and release readiness agent that rates severity before merge  built to catch shipping risk earlier in the review loop.",
    highlights: ["PR risk scoring", "Release readiness", "Severity-rated analysis"],
  },
  {
    id: 103,
    slug: "ai-smart-city",
    title: "AI Smart City Project",
    category: "Full Stack / Smart Cities",
    technologies: "React · Firebase · OpenStreetMap · APIs",
    image: 'ghOg("AI-Smart-City-Project")',
    galleryExpr: true,
    liveUrl: "https://github.com/makram24/AI-Smart-City-Project",
    description:
      "Budapest city dashboard with AI chat, live transport routes, and map-based service lookup.",
    details:
      "React + Firebase smart-city dashboard for Budapest with AI chat, live transport routes, and OpenStreetMap-based service lookup.",
    highlights: ["AI city chat", "Live transport routes", "Map service lookup"],
  },
  {
    id: 105,
    slug: "react-pos",
    title: "React POS",
    category: "Web / Commerce",
    technologies: "JavaScript · React · POS",
    image: cover("pos"),
    gallery: g("pos"),
    liveUrl: "https://github.com/makram24/React-Pos",
    description:
      "Point-of-sale web app for retail and restaurant checkout workflows.",
    details:
      "Restaurant/retail POS built with React  tables, orders, kitchen display, inventory, admin, and analytics views for day-to-day floor operations.",
    highlights: ["Floor & table orders", "Kitchen display", "Inventory & analytics"],
  },
  {
    id: 106,
    slug: "abelton-claude",
    title: "Abelton Claude",
    category: "JavaScript / AI",
    technologies: "JavaScript · Claude · Creative tools",
    image: 'ghOg("Abelton-Claude")',
    galleryExpr: true,
    liveUrl: "https://github.com/makram24/Abelton-Claude",
    description:
      "Claude-assisted tooling experiments around Ableton creative workflows.",
    details:
      "Experimental Claude-assisted tooling around Ableton creative workflows  exploring AI assistance for music production tasks.",
    highlights: ["Claude tooling", "Creative workflow experiments"],
  },
  {
    id: 107,
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "TypeScript / React",
    technologies: "TypeScript · React · Three.js",
    image: 'ghOg("portfolio-website")',
    gallery: null,
    galleryExtra: ['ghOg("portfolio-website")', '"/images/og-portfolio.png"'],
    liveUrl: "https://github.com/makram24/portfolio-website",
    description:
      "This site  React portfolio with a Three.js character and project showcase.",
    details:
      "Personal portfolio built with React, GSAP scroll storytelling, and a Three.js character  showcasing products, agent skills, and client work.",
    highlights: ["Three.js character", "GSAP storytelling", "Works + shop"],
  },
];

function emitProduct(p) {
  const imageLine = p.image.startsWith("ghOg")
    ? `image: ${p.image},`
    : `image: "${esc(p.image)}",`;
  let galleryLine;
  if (p.galleryExpr) {
    galleryLine = `gallery: [${p.image}],`;
  } else if (p.galleryExtra) {
    galleryLine = `gallery: [${p.galleryExtra.join(", ")}],`;
  } else {
    galleryLine = `gallery: ${arr(p.gallery)},`;
  }
  const live = p.liveUrl ? `"${esc(p.liveUrl)}"` : "null";
  return `  {
    id: ${p.id},
    kind: "product" as const,
    slug: "${p.slug}",
    title: "${esc(p.title)}",
    category: "${esc(p.category)}",
    technologies: "${esc(p.technologies)}",
    ${imageLine}
    ${galleryLine}
    url: "/myworks/${p.slug}",
    liveUrl: ${live},
    description:
      "${esc(p.description)}",
    details:
      "${esc(p.details)}",
    highlights: ${arr(p.highlights)},
  }`;
}

const out = `const ghOg = (repo: string) =>
  \`https://opengraph.githubassets.com/1/makram24/\${repo}\`;

export type ProjectKind = "product" | "client";

export type Project = {
  id: number;
  kind: ProjectKind;
  slug: string;
  title: string;
  category: string;
  technologies: string;
  image: string;
  gallery: string[];
  url: string;
  liveUrl: string | null;
  description: string;
  details: string;
  highlights: string[];
};

export const projects: Project[] = [
${productBlocks.map(emitProduct).join(",\n")},
${clients.map(emitProject).join(",\n")},
];

/** Homepage Work: products first, less Engineering duplicate (no ReleaseGuard). */
export const homepageProjectIds = [100, 105, 101, 103, 102] as const;

export const homepageProjects = homepageProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const productProjects = projects.filter(
  (project) => project.kind === "product",
);

export const clientProjects = projects.filter(
  (project) => project.kind === "client",
);

const featuredClientIds = new Set([13, 11, 37, 30, 34, 6, 27, 35, 39, 1, 5, 3]);

export const featuredClientProjects = clientProjects.filter((project) =>
  featuredClientIds.has(project.id),
);

export const archivedClientProjects = clientProjects.filter(
  (project) => !featuredClientIds.has(project.id),
);

export const featuredProjects = [
  ...productProjects,
  ...featuredClientProjects,
];

export const archivedProjects = archivedClientProjects;

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
`;

fs.writeFileSync("src/data/projects.ts", out);
console.log(`Wrote ${productBlocks.length + clients.length} projects`);
