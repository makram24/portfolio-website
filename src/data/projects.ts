const ghOg = (repo: string) =>
  `https://opengraph.githubassets.com/1/makram24/${repo}`;

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

export const projects: Project[
] = [
  {
    id: 100,
    kind: "product" as const,
    slug: "agensi-agent-skills",
    title: "Agensi Agent Skills",
    category: "AI Agents / Product",
    technologies: "MCP · Cursor Skills · Agensi · SkillHQ · BuySkills",
    image: "/images/agensi-skills.jpg",
    gallery: ["/images/agensi-skills.jpg"],
    url: "/myworks/agensi-agent-skills",
    liveUrl: "https://www.agensi.io/creators/makram-al-moghrabi",
    description:
      "24 live paid agent skills  CI/CD Doctor, CRM MCP Builder, Env Doctor Pro, and safe confirm-before-write operators.",
    details:
      "A live storefront of paid Cursor/MCP agent skills published across Agensi, SkillHQ, and BuySkills  focused on safe confirm-before-write operators for CI/CD, CRM, env, and ops workflows.",
    highlights: ["24 live paid skills", "Multi-storefront distribution", "Confirm-before-write safety"],
  },

  {
    id: 101,
    kind: "product" as const,
    slug: "minicrm-mcp",
    title: "MiniCRM MCP",
    category: "MCP / TypeScript",
    technologies: "TypeScript · MCP · miniCRM API",
    image: ghOg("MiniCRM-MCP"),
    gallery: [ghOg("MiniCRM-MCP")],
    url: "/myworks/minicrm-mcp",
    liveUrl: "https://github.com/makram24/MiniCRM-MCP",
    description:
      "Public MCP server so AI agents can run miniCRM safely with schema-first tools.",
    details:
      "Open-source MCP server that exposes miniCRM operations to AI agents with schema-first tools and safe defaults  the foundation behind MiniCRM Operator skills.",
    highlights: ["Public MCP server", "Schema-first tools", "Agent-safe CRM ops"],
  },

  {
    id: 102,
    kind: "product" as const,
    slug: "releaseguard-agent",
    title: "ReleaseGuard Agent",
    category: "AI / DevOps",
    technologies: "TypeScript · AI agents · PR risk analysis",
    image: ghOg("ReleaseGuard-Agent"),
    gallery: [ghOg("ReleaseGuard-Agent")],
    url: "/myworks/releaseguard-agent",
    liveUrl: "https://github.com/makram24/ReleaseGuard-Agent",
    description:
      "AI agent that scores pull-request risk and release readiness before you ship.",
    details:
      "AI-assisted pull-request risk and release readiness agent that rates severity before merge  built to catch shipping risk earlier in the review loop.",
    highlights: ["PR risk scoring", "Release readiness", "Severity-rated analysis"],
  },

  {
    id: 103,
    kind: "product" as const,
    slug: "ai-smart-city",
    title: "AI Smart City Project",
    category: "Full Stack / Smart Cities",
    technologies: "React · Firebase · OpenStreetMap · APIs",
    image: ghOg("AI-Smart-City-Project"),
    gallery: [ghOg("AI-Smart-City-Project")],
    url: "/myworks/ai-smart-city",
    liveUrl: "https://github.com/makram24/AI-Smart-City-Project",
    description:
      "Budapest city dashboard with AI chat, live transport routes, and map-based service lookup.",
    details:
      "React + Firebase smart-city dashboard for Budapest with AI chat, live transport routes, and OpenStreetMap-based service lookup.",
    highlights: ["AI city chat", "Live transport routes", "Map service lookup"],
  },

  {
    id: 105,
    kind: "product" as const,
    slug: "react-pos",
    title: "React POS",
    category: "Web / Commerce",
    technologies: "JavaScript · React · POS",
    image: "/images/portfolio/pos/0.jpg",
    gallery: ["/images/portfolio/pos/0.jpg", "/images/portfolio/pos/1.jpg", "/images/portfolio/pos/2.jpg", "/images/portfolio/pos/3.jpg", "/images/portfolio/pos/4.jpg", "/images/portfolio/pos/5.jpg", "/images/portfolio/pos/6.jpg", "/images/portfolio/pos/7.jpg", "/images/portfolio/pos/8.jpg", "/images/portfolio/pos/9.jpg", "/images/portfolio/pos/10.jpg", "/images/portfolio/pos/11.jpg", "/images/portfolio/pos/12.jpg", "/images/portfolio/pos/13.jpg"],
    url: "/myworks/react-pos",
    liveUrl: "https://github.com/makram24/React-Pos",
    description:
      "Point-of-sale web app for retail and restaurant checkout workflows.",
    details:
      "Restaurant/retail POS built with React  tables, orders, kitchen display, inventory, admin, and analytics views for day-to-day floor operations.",
    highlights: ["Floor & table orders", "Kitchen display", "Inventory & analytics"],
  },

  {
    id: 106,
    kind: "product" as const,
    slug: "abelton-claude",
    title: "Abelton Claude",
    category: "JavaScript / AI",
    technologies: "JavaScript · Claude · Creative tools",
    image: ghOg("Abelton-Claude"),
    gallery: [ghOg("Abelton-Claude")],
    url: "/myworks/abelton-claude",
    liveUrl: "https://github.com/makram24/Abelton-Claude",
    description:
      "Claude-assisted tooling experiments around Ableton creative workflows.",
    details:
      "Experimental Claude-assisted tooling around Ableton creative workflows  exploring AI assistance for music production tasks.",
    highlights: ["Claude tooling", "Creative workflow experiments"],
  },

  {
    id: 107,
    kind: "product" as const,
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "TypeScript / React",
    technologies: "TypeScript · React · Three.js",
    image: ghOg("portfolio-website"),
    gallery: [ghOg("portfolio-website"), "/images/og-portfolio.png"],
    url: "/myworks/portfolio-website",
    liveUrl: "https://github.com/makram24/portfolio-website",
    description:
      "This site  React portfolio with a Three.js character and project showcase.",
    details:
      "Personal portfolio built with React, GSAP scroll storytelling, and a Three.js character  showcasing products, agent skills, and client work.",
    highlights: ["Three.js character", "GSAP storytelling", "Works + shop"],
  },

  {
    id: 1,
    kind: "client" as const,
    slug: "2ejjeh",
    title: "2ejjeh",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "https://card.bytebeirut.com/makram/assets/imgs/portfolio/2ejjeh/0.png",
    gallery: ["https://card.bytebeirut.com/makram/assets/imgs/portfolio/2ejjeh/0.png"],
    url: "/myworks/2ejjeh",
    liveUrl: null,
    description: "Brand website delivered for 2ejjeh.",
    details: "Client brand website for 2ejjeh with a focused promotional layout and clear contact path.",
    highlights: ["Brand landing", "Promotional layout"],
  },

  {
    id: 2,
    kind: "client" as const,
    slug: "adventures",
    title: "Adventures",
    category: "Travel / Brand",
    technologies: "WordPress · Custom theme",
    image: "/images/portfolio/adventures/0.jpg",
    gallery: ["/images/portfolio/adventures/0.jpg", "/images/portfolio/adventures/1.jpg"],
    url: "/myworks/adventures",
    liveUrl: null,
    description: "Travel and experiences brand site with a bold visual landing.",
    details: "Designed and built a promotional website for an adventures brand, focusing on strong photography, clear CTAs, and a lightweight content structure.",
    highlights: ["Hero-led landing", "Service/experience sections", "Mobile-first layout"],
  },

  {
    id: 3,
    kind: "client" as const,
    slug: "aisha",
    title: "Aisha Ameen",
    category: "Interior design portfolio",
    technologies: "PHP · Custom theme · Multilingual",
    image: "/images/portfolio/aisha/0.jpg",
    gallery: ["/images/portfolio/aisha/0.jpg", "/images/portfolio/aisha/1.jpg", "/images/portfolio/aisha/2.jpg", "/images/portfolio/aisha/3.jpg", "/images/portfolio/aisha/4.jpg"],
    url: "/myworks/aisha",
    liveUrl: "https://aishaameen.com",
    description: "Luxury interior design portfolio for Aisha Ameen  project galleries, products, and consultation flows.",
    details: "Built a polished multi-page portfolio for interior designer Aisha Ameen, including project showcases (e.g. Bronze Oasis), products, media, and consultation requests with EN language routing.",
    highlights: ["Full-bleed project hero sliders", "Projects & products catalogs", "Consultation and contact flows"],
  },

  {
    id: 4,
    kind: "client" as const,
    slug: "alfreej",
    title: "Alfreej",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "https://card.bytebeirut.com/makram/assets/imgs/portfolio/alfreej/0.png",
    gallery: ["https://card.bytebeirut.com/makram/assets/imgs/portfolio/alfreej/0.png"],
    url: "/myworks/alfreej",
    liveUrl: null,
    description: "Brand website delivered for Alfreej.",
    details: "Client brand website for Alfreej with service-oriented content sections.",
    highlights: ["Brand site", "Service sections"],
  },

  {
    id: 5,
    kind: "client" as const,
    slug: "art-deco",
    title: "Art Deco",
    category: "Retail / Brand",
    technologies: "WordPress · WooCommerce-ready",
    image: "/images/portfolio/art-deco/0.jpg",
    gallery: ["/images/portfolio/art-deco/0.jpg", "/images/portfolio/art-deco/1.jpg"],
    url: "/myworks/art-deco",
    liveUrl: "https://artdeco-kw.com",
    description: "Kuwait Art Deco brand website with a refined product-first presentation.",
    details: "Delivered a brand website for Art Deco in Kuwait  elegant typography, product storytelling, and clear navigation for browsing collections.",
    highlights: ["Brand storytelling", "Collection-focused layout", "Responsive storefront feel"],
  },

  {
    id: 6,
    kind: "client" as const,
    slug: "automotive",
    title: "Mt Pritchard Automotive",
    category: "Automotive services",
    technologies: "WordPress · Local SEO",
    image: "/images/portfolio/automotive/0.jpg",
    gallery: ["/images/portfolio/automotive/0.jpg", "/images/portfolio/automotive/1.jpg", "/images/portfolio/automotive/2.jpg", "/images/portfolio/automotive/3.jpg"],
    url: "/myworks/automotive",
    liveUrl: "https://mtpritchardautomotive.com.au",
    description: "Australian auto workshop site  services, team, testimonials, and booking CTAs.",
    details: "Built the marketing site for Mt Pritchard Automotive: services overview, 40+ years experience story, workshop gallery, team, client feedback, and schedule-a-visit CTAs tuned for local search.",
    highlights: ["Service cards & booking CTAs", "Team and workshop gallery", "Testimonials + local SEO copy"],
  },

  {
    id: 7,
    kind: "client" as const,
    slug: "back-combined",
    title: "Back Combined",
    category: "Corporate / Brand",
    technologies: "WordPress · Custom sections",
    image: "/images/portfolio/back-combined/0.jpg",
    gallery: ["/images/portfolio/back-combined/0.jpg", "/images/portfolio/back-combined/1.jpg"],
    url: "/myworks/back-combined",
    liveUrl: "https://backcombined.com",
    description: "Corporate brand website with clean sections and service storytelling.",
    details: "Implemented a modern corporate site for Back Combined with structured service sections and a clear conversion path.",
    highlights: ["Service storytelling", "Clean corporate UI", "Clear contact path"],
  },

  {
    id: 8,
    kind: "client" as const,
    slug: "bcc",
    title: "BCC Specialities",
    category: "Industrial / Brand",
    technologies: "WordPress · Custom theme",
    image: "/images/portfolio/bcc/0.jpg",
    gallery: ["/images/portfolio/bcc/0.jpg", "/images/portfolio/bcc/1.jpg", "/images/portfolio/bcc/2.jpg"],
    url: "/myworks/bcc",
    liveUrl: "https://bccspecialities.com",
    description: "Industrial specialties company site with product and capability focus.",
    details: "Delivered BCC Specialities’ public site highlighting products/capabilities, with staging iterations on Carrot Media infrastructure.",
    highlights: ["Capability showcase", "Product-oriented pages", "Brand-consistent UI"],
  },

  {
    id: 9,
    kind: "client" as const,
    slug: "bcc1",
    title: "BCC Online",
    category: "E-commerce / Industrial",
    technologies: "Web · Online catalog",
    image: "/images/portfolio/bcc1/0.jpg",
    gallery: ["/images/portfolio/bcc1/0.jpg", "/images/portfolio/bcc1/1.jpg", "/images/portfolio/bcc1/2.jpg", "/images/portfolio/bcc1/3.jpg"],
    url: "/myworks/bcc1",
    liveUrl: null,
    description: "Online catalog experience for BCC  product browsing and ordering flows.",
    details: "Built an online-facing BCC catalog experience (Bcc Online / online-v0) for browsing specialties products beyond the marketing site.",
    highlights: ["Online catalog", "Product browsing", "Order-oriented UX"],
  },

  {
    id: 10,
    kind: "client" as const,
    slug: "boltr",
    title: "Boltr",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "/images/portfolio/boltr/0.jpg",
    gallery: ["/images/portfolio/boltr/0.jpg"],
    url: "/myworks/boltr",
    liveUrl: null,
    description: "Bold brand landing for Boltr with a sharp visual identity.",
    details: "Created a compact brand website for Boltr emphasizing a strong first impression and simple content hierarchy.",
    highlights: ["Strong brand identity", "Landing-focused layout"],
  },

  {
    id: 11,
    kind: "client" as const,
    slug: "brainy",
    title: "Brainy",
    category: "Education / Brand",
    technologies: "Web · Brand site",
    image: "/images/portfolio/brainy/0.jpg",
    gallery: ["/images/portfolio/brainy/0.jpg"],
    url: "/myworks/brainy",
    liveUrl: null,
    description: "Education-oriented brand site with clear program messaging.",
    details: "Designed and implemented Brainy’s brand website to present programs and value props in a friendly, scannable layout.",
    highlights: ["Program messaging", "Friendly visual system"],
  },

  {
    id: 13,
    kind: "client" as const,
    slug: "carrot-media",
    title: "Carrot Media",
    category: "Agency website",
    technologies: "PHP · Custom theme · Portfolio",
    image: "/images/portfolio/carrot-media/0.jpg",
    gallery: ["/images/portfolio/carrot-media/0.jpg", "/images/portfolio/carrot-media/1.jpg", "/images/portfolio/carrot-media/2.jpg", "/images/portfolio/carrot-media/3.jpg", "/images/portfolio/carrot-media/4.jpg", "/images/portfolio/carrot-media/5.jpg", "/images/portfolio/carrot-media/6.jpg", "/images/portfolio/carrot-media/7.jpg", "/images/portfolio/carrot-media/8.jpg", "/images/portfolio/carrot-media/9.jpg", "/images/portfolio/carrot-media/10.jpg", "/images/portfolio/carrot-media/11.jpg", "/images/portfolio/carrot-media/12.jpg", "/images/portfolio/carrot-media/13.jpg"],
    url: "/myworks/carrot-media",
    liveUrl: "https://carrotmedia.info",
    description: "Agency site for Carrot Media  about, portfolio, and multiple redesign iterations.",
    details: "Built and iterated Carrot Media’s agency website (original + New Carrot redesigns), including about, portfolio, and case-study presentation used across client staging.",
    highlights: ["Agency portfolio system", "Multiple redesign versions", "About & case presentation"],
  },

  {
    id: 14,
    kind: "client" as const,
    slug: "dar",
    title: "Dar Engineering",
    category: "Architecture / Construction",
    technologies: "HTML · Custom site",
    image: "/images/portfolio/dar/0.jpg",
    gallery: ["/images/portfolio/dar/0.jpg", "/images/portfolio/dar/1.jpg", "/images/portfolio/dar/2.jpg", "/images/portfolio/dar/3.jpg"],
    url: "/myworks/dar",
    liveUrl: "https://darengineeringandconstruction.com",
    description: "Engineering & construction site with architecture projects and case pages.",
    details: "Delivered Dar Engineering and Construction’s site with architecture project pages (e.g. Bourji Village) and a structured projects archive.",
    highlights: ["Project case pages", "Architecture portfolio", "Company services"],
  },

  {
    id: 17,
    kind: "client" as const,
    slug: "emm-ali",
    title: "Emm Ali",
    category: "Food e-commerce",
    technologies: "WordPress · WooCommerce",
    image: "/images/portfolio/emm-ali/0.jpg",
    gallery: ["/images/portfolio/emm-ali/0.jpg", "/images/portfolio/emm-ali/1.jpg", "/images/portfolio/emm-ali/2.jpg", "/images/portfolio/emm-ali/3.jpg"],
    url: "/myworks/emm-ali",
    liveUrl: "https://emm-ali.com.au",
    description: "Australian food brand shop  product pages and storefront.",
    details: "Implemented Emm Ali’s e-commerce experience including shop listings and product detail pages (e.g. apple juice) for an Australian food brand.",
    highlights: ["WooCommerce storefront", "Product detail pages", "Shop collections"],
  },

  {
    id: 18,
    kind: "client" as const,
    slug: "ewg",
    title: "EWG",
    category: "Corporate / Brand",
    technologies: "Web · Brand site",
    image: "/images/portfolio/ewg/0.jpg",
    gallery: ["/images/portfolio/ewg/0.jpg", "/images/portfolio/ewg/1.jpg", "/images/portfolio/ewg/2.jpg", "/images/portfolio/ewg/3.jpg", "/images/portfolio/ewg/4.jpg", "/images/portfolio/ewg/5.jpg"],
    url: "/myworks/ewg",
    liveUrl: null,
    description: "Corporate brand website with multi-section storytelling.",
    details: "Delivered EWG’s multi-section brand website covering company story, offerings, and contact pathways.",
    highlights: ["Multi-section brand story", "Corporate presentation"],
  },

  {
    id: 19,
    kind: "client" as const,
    slug: "germaid",
    title: "Germaid",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "/images/portfolio/germaid/0.jpg",
    gallery: ["/images/portfolio/germaid/0.jpg", "/images/portfolio/germaid/1.jpg"],
    url: "/myworks/germaid",
    liveUrl: null,
    description: "Brand website for Germaid with a clean promotional layout.",
    details: "Built Germaid’s promotional brand site focusing on clarity and mobile readability.",
    highlights: ["Promotional landing", "Clean visual hierarchy"],
  },

  {
    id: 20,
    kind: "client" as const,
    slug: "golden",
    title: "Golden",
    category: "Brand / Hospitality",
    technologies: "Web · Brand site",
    image: "/images/portfolio/golden/0.jpg",
    gallery: ["/images/portfolio/golden/0.jpg", "/images/portfolio/golden/1.jpg", "/images/portfolio/golden/2.jpg"],
    url: "/myworks/golden",
    liveUrl: null,
    description: "Golden brand site with warm hospitality-oriented visuals.",
    details: "Created Golden’s brand website with warm imagery and straightforward service/content sections.",
    highlights: ["Hospitality brand feel", "Service sections"],
  },

  {
    id: 21,
    kind: "client" as const,
    slug: "home-made-by-kathy",
    title: "Home Made By Kathy",
    category: "Food e-commerce",
    technologies: "Shopify · Collections",
    image: "/images/portfolio/home-made-by-kathy/0.jpg",
    gallery: ["/images/portfolio/home-made-by-kathy/0.jpg", "/images/portfolio/home-made-by-kathy/1.jpg", "/images/portfolio/home-made-by-kathy/2.jpg", "/images/portfolio/home-made-by-kathy/3.jpg", "/images/portfolio/home-made-by-kathy/4.jpg"],
    url: "/myworks/home-made-by-kathy",
    liveUrl: "https://homemadebykathycriniti.com.au",
    description: "Australian homemade food shop  collections, product pages, and about story.",
    details: "Built Home Made By Kathy Criniti’s Shopify storefront with shop collections, product detail pages (e.g. shepherd’s pie), and about-us storytelling.",
    highlights: ["Shopify collections", "Product pages", "Brand about story"],
  },

  {
    id: 22,
    kind: "client" as const,
    slug: "j-and-k",
    title: "J & K",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "/images/portfolio/j-and-k/0.jpg",
    gallery: ["/images/portfolio/j-and-k/0.jpg", "/images/portfolio/j-and-k/1.jpg"],
    url: "/myworks/j-and-k",
    liveUrl: null,
    description: "Compact brand website for J & K.",
    details: "Delivered a focused brand site for J & K with a simple structure and strong cover visual.",
    highlights: ["Compact brand landing"],
  },

  {
    id: 24,
    kind: "client" as const,
    slug: "koila",
    title: "Koila",
    category: "Brand / Product",
    technologies: "HTML · Landing",
    image: "/images/portfolio/koila/0.jpg",
    gallery: ["/images/portfolio/koila/0.jpg", "/images/portfolio/koila/1.jpg"],
    url: "/myworks/koila",
    liveUrl: null,
    description: "Koila product/brand landing with a modern staged design.",
    details: "Implemented Koila’s brand landing (v4 staging) with a modern product-forward layout.",
    highlights: ["Product-forward landing", "Staged brand design"],
  },

  {
    id: 25,
    kind: "client" as const,
    slug: "life-lift-by-tima",
    title: "Life Lift By Tima",
    category: "Wellness / Services",
    technologies: "WordPress · Services pages",
    image: "/images/portfolio/life-lift-by-tima/0.jpg",
    gallery: ["/images/portfolio/life-lift-by-tima/0.jpg", "/images/portfolio/life-lift-by-tima/1.jpg", "/images/portfolio/life-lift-by-tima/2.jpg", "/images/portfolio/life-lift-by-tima/3.jpg"],
    url: "/myworks/life-lift-by-tima",
    liveUrl: "https://lifeliftbytima.com",
    description: "Wellness brand site  services, about, and booking-oriented pages.",
    details: "Built Life Lift By Tima’s wellness website covering services, about, and clear paths to get in touch.",
    highlights: ["Services pages", "About story", "Conversion-focused CTAs"],
  },

  {
    id: 26,
    kind: "client" as const,
    slug: "maya-delight",
    title: "Maya Delight",
    category: "Food / Brand",
    technologies: "HTML · Brand site",
    image: "/images/portfolio/maya-delight/0.jpg",
    gallery: ["/images/portfolio/maya-delight/0.jpg", "/images/portfolio/maya-delight/1.jpg", "/images/portfolio/maya-delight/2.jpg"],
    url: "/myworks/maya-delight",
    liveUrl: null,
    description: "Food brand site for Maya’s Delights with construction-to-launch visuals.",
    details: "Delivered Maya Delight / Maya’s Delights brand pages including a construction-stage landing and polished brand screens.",
    highlights: ["Food brand landing", "Launch-ready visuals"],
  },

  {
    id: 27,
    kind: "client" as const,
    slug: "mocha-coffee-house",
    title: "Mocha Coffee House",
    category: "Hospitality / Brand",
    technologies: "Web · Brand site",
    image: "https://card.bytebeirut.com/makram/assets/imgs/portfolio/mocha%20coffee%20house/0.png",
    gallery: ["https://card.bytebeirut.com/makram/assets/imgs/portfolio/mocha%20coffee%20house/0.png"],
    url: "/myworks/mocha-coffee-house",
    liveUrl: null,
    description: "Café brand website for Mocha Coffee House.",
    details: "Hospitality brand site for Mocha Coffee House with menu-forward presentation.",
    highlights: ["Café brand", "Menu presentation"],
  },

  {
    id: 28,
    kind: "client" as const,
    slug: "my-site",
    title: "My Site",
    category: "Personal / Portfolio",
    technologies: "Web · Portfolio",
    image: "/images/portfolio/my-site/0.jpg",
    gallery: ["/images/portfolio/my-site/0.jpg", "/images/portfolio/my-site/1.jpg", "/images/portfolio/my-site/2.jpg", "/images/portfolio/my-site/3.jpg"],
    url: "/myworks/my-site",
    liveUrl: null,
    description: "Earlier personal portfolio experiments and layout explorations.",
    details: "Personal site explorations capturing layout and presentation experiments before the current portfolio rebuild.",
    highlights: ["Portfolio experiments", "Layout explorations"],
  },

  {
    id: 29,
    kind: "client" as const,
    slug: "oasis",
    title: "Oasis",
    category: "Brand website",
    technologies: "Web · Brand site",
    image: "/images/portfolio/oasis/0.jpg",
    gallery: ["/images/portfolio/oasis/0.jpg", "/images/portfolio/oasis/1.jpg"],
    url: "/myworks/oasis",
    liveUrl: null,
    description: "Oasis brand website with a calm, hospitality-inspired look.",
    details: "Created Oasis’s brand website emphasizing calm visuals and straightforward content sections.",
    highlights: ["Hospitality-inspired brand"],
  },

  {
    id: 30,
    kind: "client" as const,
    slug: "pos",
    title: "Restaurant POS",
    category: "Web app / Commerce",
    technologies: "React · Analytics · Kitchen display",
    image: "/images/portfolio/pos/0.jpg",
    gallery: ["/images/portfolio/pos/0.jpg", "/images/portfolio/pos/1.jpg", "/images/portfolio/pos/2.jpg", "/images/portfolio/pos/3.jpg", "/images/portfolio/pos/4.jpg", "/images/portfolio/pos/5.jpg", "/images/portfolio/pos/6.jpg", "/images/portfolio/pos/7.jpg", "/images/portfolio/pos/8.jpg", "/images/portfolio/pos/9.jpg", "/images/portfolio/pos/10.jpg", "/images/portfolio/pos/11.jpg", "/images/portfolio/pos/12.jpg", "/images/portfolio/pos/13.jpg"],
    url: "/myworks/pos",
    liveUrl: "https://github.com/makram24/React-Pos",
    description: "Restaurant POS  tables, orders, kitchen, inventory, and analytics dashboards.",
    details: "Full restaurant point-of-sale web app covering table orders, kitchen display, inventory, admin, and multi-view analytics dashboards for retail/restaurant workflows.",
    highlights: ["Tables & table orders", "Kitchen + orders boards", "Inventory & analytics"],
  },

  {
    id: 33,
    kind: "client" as const,
    slug: "prima",
    title: "Prima ME",
    category: "Building materials",
    technologies: "HTML · Product catalog",
    image: "/images/portfolio/prima/0.jpg",
    gallery: ["/images/portfolio/prima/0.jpg", "/images/portfolio/prima/1.jpg", "/images/portfolio/prima/2.jpg", "/images/portfolio/prima/3.jpg", "/images/portfolio/prima/4.jpg", "/images/portfolio/prima/5.jpg"],
    url: "/myworks/prima",
    liveUrl: null,
    description: "Building materials catalog  façades, marble/stones, fire doors, and more.",
    details: "Built Prima ME’s product catalog site covering fiber cement façades, marble and stones, Padilla fire doors, and related material lines.",
    highlights: ["Product category pages", "Material catalogs", "Industrial brand presentation"],
  },

  {
    id: 34,
    kind: "client" as const,
    slug: "reaya",
    title: "Reaya",
    category: "Care platform / Marketplace",
    technologies: "WordPress · WooCommerce · EN/AR",
    image: "/images/portfolio/reaya/0.jpg",
    gallery: ["/images/portfolio/reaya/0.jpg", "/images/portfolio/reaya/1.jpg", "/images/portfolio/reaya/2.jpg", "/images/portfolio/reaya/3.jpg", "/images/portfolio/reaya/4.jpg", "/images/portfolio/reaya/5.jpg"],
    url: "/myworks/reaya",
    liveUrl: "https://reaya.co",
    description: "Kuwait care marketplace  newborn, elderly, and special-needs services with shop.",
    details: "Delivered Reaya, a bilingual care platform connecting families in Kuwait with professional care services, including service categories, shop/offers, FAQs, and company partner areas.",
    highlights: ["EN/AR language toggle", "Care service categories", "Shop + partner sections"],
  },

  {
    id: 35,
    kind: "client" as const,
    slug: "rolling-grill",
    title: "Rolling Grill",
    category: "Food / Brand",
    technologies: "HTML · Brand site",
    image: "/images/portfolio/rolling-grill/0.jpg",
    gallery: ["/images/portfolio/rolling-grill/0.jpg", "/images/portfolio/rolling-grill/1.jpg", "/images/portfolio/rolling-grill/2.jpg"],
    url: "/myworks/rolling-grill",
    liveUrl: null,
    description: "Food brand site for Rolling Grill with menu-forward visuals.",
    details: "Built Rolling Grill’s brand website with appetite-driven visuals and clear menu/brand storytelling.",
    highlights: ["Menu-forward brand", "Food photography layout"],
  },

  {
    id: 37,
    kind: "client" as const,
    slug: "social-bang",
    title: "Social Bang",
    category: "Agency / Media",
    technologies: "Web · Brand site",
    image: "/images/portfolio/social-bang/0.jpg",
    gallery: ["/images/portfolio/social-bang/0.jpg", "/images/portfolio/social-bang/1.jpg"],
    url: "/myworks/social-bang",
    liveUrl: null,
    description: "Social media agency brand site with punchy campaign visuals.",
    details: "Built Social Bang’s agency website highlighting campaigns and social media services with energetic visuals.",
    highlights: ["Agency brand", "Campaign visuals"],
  },

  {
    id: 38,
    kind: "client" as const,
    slug: "styling-by-sal",
    title: "Styling By Sal",
    category: "Fashion / Services",
    technologies: "WordPress · Services",
    image: "/images/portfolio/styling-by-sal/0.jpg",
    gallery: ["/images/portfolio/styling-by-sal/0.jpg", "/images/portfolio/styling-by-sal/1.jpg", "/images/portfolio/styling-by-sal/2.jpg", "/images/portfolio/styling-by-sal/3.jpg"],
    url: "/myworks/styling-by-sal",
    liveUrl: "https://stylingbysal.ae",
    description: "UAE styling brand  services, about, and booking-oriented pages.",
    details: "Delivered Styling By Sal’s UAE website covering services, about, and a polished brand presentation for personal styling offerings.",
    highlights: ["Services pages", "About story", "Fashion brand UI"],
  },

  {
    id: 39,
    kind: "client" as const,
    slug: "three-apes-media",
    title: "Three Apes Media",
    category: "Media / Agency",
    technologies: "Web · Brand site",
    image: "/images/portfolio/three-apes-media/0.jpg",
    gallery: ["/images/portfolio/three-apes-media/0.jpg", "/images/portfolio/three-apes-media/1.jpg", "/images/portfolio/three-apes-media/2.jpg", "/images/portfolio/three-apes-media/3.jpg"],
    url: "/myworks/three-apes-media",
    liveUrl: null,
    description: "Media agency brand site for Three Apes Media.",
    details: "Built Three Apes Media’s brand website with multi-screen presentations of services and creative work.",
    highlights: ["Agency brand", "Creative service presentation"],
  },

  {
    id: 40,
    kind: "client" as const,
    slug: "vida",
    title: "Vida Beauty Clinic",
    category: "Clinic / Beauty",
    technologies: "Web · Brand site",
    image: "/images/portfolio/vida/0.jpg",
    gallery: ["/images/portfolio/vida/0.jpg", "/images/portfolio/vida/1.jpg", "/images/portfolio/vida/2.jpg", "/images/portfolio/vida/3.jpg", "/images/portfolio/vida/4.jpg"],
    url: "/myworks/vida",
    liveUrl: null,
    description: "Beauty clinic website with services and treatment presentation.",
    details: "Delivered Vida Beauty Clinic’s marketing site covering treatments, clinic atmosphere, and contact pathways.",
    highlights: ["Clinic brand", "Treatment presentation"],
  },

  {
    id: 41,
    kind: "client" as const,
    slug: "zoufa",
    title: "Zoufa Shop",
    category: "Food e-commerce",
    technologies: "WordPress · WooCommerce",
    image: "/images/portfolio/zoufa/0.jpg",
    gallery: ["/images/portfolio/zoufa/0.jpg", "/images/portfolio/zoufa/1.jpg", "/images/portfolio/zoufa/2.jpg", "/images/portfolio/zoufa/3.jpg", "/images/portfolio/zoufa/4.jpg"],
    url: "/myworks/zoufa",
    liveUrl: "https://zoufashop.com",
    description: "Nuts & crackers e-commerce  shop categories, about, and contact.",
    details: "Built Zoufa Shop’s e-commerce experience with product categories (nuts & crackers), about, and contact pages for a specialty food retailer.",
    highlights: ["Category shop pages", "About & contact", "Food retail brand"],
  }

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
