const ghOg = (repo: string) =>
  `https://opengraph.githubassets.com/1/makram24/${repo}`;

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  tags: string[];
  date: string;
  readMinutes: number;
  repoUrl: string;
  sections: BlogSection[];
};

/**
 * One post per public non-fork repo under github.com/makram24
 * (excludes the profile README repo `makram24`).
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "minicrm-mcp-server",
    title: "MiniCRM MCP: a schema-first bridge for Claude and CRM",
    excerpt:
      "Notes from building a public TypeScript MCP server  12 CRM tools, mock/live backends, and confirm-before-write operator skills.",
    cover: ghOg("MiniCRM-MCP"),
    category: "MCP",
    tags: ["TypeScript", "MCP", "miniCRM", "Claude"],
    date: "2026-10-20",
    readMinutes: 7,
    repoUrl: "https://github.com/makram24/MiniCRM-MCP",
    sections: [
      {
        paragraphs: [
          "MiniCRM MCP is a local Model Context Protocol server that connects Claude Desktop to the miniCRM REST API. It exposes twelve Hungarian-named CRM tools, supports mock or live backends, and ships with rate limiting plus a documented handover path.",
          "The open repo is the free MCP lead magnet. Safer production behaviour  schema-first CategoryIds, confirm-before-write, multi-match contacts  lives in the paid MiniCRM Operator skills on Agensi, SkillHQ, and BuySkills.",
        ],
      },
      {
        heading: "Mock first, then live",
        paragraphs: [
          "Demos should not depend on a fragile API key. With MINICRM_USE_MOCK=true you can install, test, build, and start without a live CRM. Claude Desktop config points at the built server over stdio.",
          "When you flip to live mode, the same tool surface talks to real REST endpoints. That mock→live bridge is also what the CRM MCP Builder skill teaches for other CRMs.",
        ],
      },
      {
        heading: "What I would tell past me",
        paragraphs: [
          "Keep the tool list small and intentional. Prefer clear contracts over mirroring every endpoint. Put destructive writes behind confirmation language in the system prompt  the model will follow the contract if you write one.",
          "Repo: github.com/makram24/MiniCRM-MCP",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "releaseguard-agent-pr-risk",
    title: "ReleaseGuard Agent: evidence-grounded PR risk",
    excerpt:
      "How ReleaseGuard separates collection, deterministic signals, LLM specialists, and policy  so the model never owns the merge decision.",
    cover: ghOg("ReleaseGuard-Agent"),
    category: "AI / DevOps",
    tags: ["TypeScript", "Google ADK", "PR review", "Gemini"],
    date: "2026-09-29",
    readMinutes: 6,
    repoUrl: "https://github.com/makram24/ReleaseGuard-Agent",
    sections: [
      {
        paragraphs: [
          "ReleaseGuard is an evidence-grounded GitHub pull-request risk and release-readiness agent built on Google’s Agent Development Kit. It collects PR metadata, diffs, and CI; classifies risky files; scans and redacts secrets; runs specialist reviewers; drops ungrounded findings; then applies a deterministic policy: READY, MANUAL_REVIEW, or BLOCKED.",
          "The language model never owns the final merge decision. That separation is the point of the project.",
        ],
      },
      {
        heading: "Why not “just ask the model”",
        paragraphs: [
          "Most AI review demos invent files and vibe-check severity. ReleaseGuard splits the pipeline: collection → deterministic risk signals → LLM specialists (security, testing, breaking changes, deployment) that must cite evidence → validation that drops invented citations → policy rules for the verdict.",
          "You bring your own Gemini and GitHub tokens. The web UI is for chatting the agent through a PR; smoke tests and unit tests keep the deterministic pieces honest.",
        ],
      },
      {
        heading: "Takeaway",
        paragraphs: [
          "If agents are going near merge gates, keep policy outside the prose. Let models propose; let rules decide.",
          "Repo: github.com/makram24/ReleaseGuard-Agent",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "ai-smart-city-budapest",
    title: "AI Smart City: Budapest map, chat, and transit",
    excerpt:
      "A Next.js + Express city assistant with Leaflet, OpenStreetMap, optional OpenAI chat, and BKK FUTÁR when configured.",
    cover: ghOg("AI-Smart-City-Project"),
    category: "Full Stack",
    tags: ["TypeScript", "Next.js", "Firebase", "OpenStreetMap"],
    date: "2026-09-19",
    readMinutes: 6,
    repoUrl: "https://github.com/makram24/AI-Smart-City-Project",
    sections: [
      {
        paragraphs: [
          "AI Smart City is a Budapest city assistant: interactive map, chat, and urban data for places, routes, and public transport. It grew alongside my MSc focus on software engineering and smart cities at BME.",
          "The app lives under smart-city-app/ with docs for what is live versus mocked. Frontend is Next.js, React, TypeScript, Tailwind, and Leaflet. Backend is Express. Tests run with Vitest and GitHub Actions.",
        ],
      },
      {
        heading: "APIs that make a city feel real",
        paragraphs: [
          "Place search uses Nominatim and Overpass. Walking and cycling routes can use OpenRouteService. Budapest transit can use BKK FUTÁR when keys are set; otherwise mock data keeps demos running. Weather comes from Open-Meteo. Chat uses OpenAI when configured, or rule-based replies without a key.",
          "Chat without a map is half a product. The useful loop is question → answer → pin or polyline on Leaflet.",
        ],
      },
      {
        heading: "Next edges",
        paragraphs: [
          "Fresher live feeds, clearer API-down fallbacks, and a tighter mobile layout for use at a tram stop  not only on a laptop demo.",
          "Repo: github.com/makram24/AI-Smart-City-Project",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "react-pos-restaurant",
    title: "React POS: restaurant floor software",
    excerpt:
      "Order management, kitchen display, inventory, analytics, and role dashboards  a React restaurant platform with Firebase auth.",
    cover: "/images/portfolio/pos/0.jpg",
    category: "Product",
    tags: ["React", "Firebase", "POS", "JavaScript"],
    date: "2025-12-01",
    readMinutes: 6,
    repoUrl: "https://github.com/makram24/React-Pos",
    sections: [
      {
        paragraphs: [
          "React POS is a restaurant management web app: orders, analytics, inventory, kitchen display, and customer-facing pieces. It uses modular components, React context for authentication (Firebase), and role dashboards for admin, chef, and waiter workflows.",
          "The floor cares about speed. Tables, tickets, and inventory need large targets and obvious states  not dense admin chrome on every screen.",
        ],
      },
      {
        heading: "Structure that matches the shift",
        paragraphs: [
          "Pages cover AdminDashboard, Analytics, ChefOrders, and related views. Analytics components break down customers, employees, finances, inventory, and sales. Home components surface popular items and recent orders for the front of house.",
          "Separating kitchen, floor, and admin surfaces keeps each role’s attention where it belongs during a rush.",
        ],
      },
      {
        heading: "What I would harden next",
        paragraphs: [
          "Offline resilience, printer/receipt integrations, and tighter permissions. Analytics only matters when the order pipeline is trustworthy.",
          "Repo: github.com/makram24/React-Pos",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "portfolio-website-threejs",
    title: "This portfolio: React, Three.js, and GSAP",
    excerpt:
      "How the personal site is built  Vite, a 3D character, scroll storytelling, My Works, Shop, Blog, and a Groq chat API.",
    cover: "/images/og-portfolio.png",
    category: "Portfolio",
    tags: ["TypeScript", "React", "Three.js", "GSAP"],
    date: "2026-05-17",
    readMinutes: 5,
    repoUrl: "https://github.com/makram24/portfolio-website",
    sections: [
      {
        paragraphs: [
          "The portfolio at makramalmoghrabi.com is a React + TypeScript + Vite site with a React Three Fiber character, GSAP and Lenis scroll motion, project galleries, an agent skills shop, blog, and a /play experience.",
          "Optional Vercel Analytics and a serverless /api/chat endpoint (Groq) round out the deploy story  static-friendly for Apache/cPanel or Vercel.",
        ],
      },
      {
        heading: "One composition, many routes",
        paragraphs: [
          "The home page is a long scroll narrative. /myworks and /myworks/:slug hold project details with local galleries. /shop lists paid agent skills. /blog is where posts like this one live.",
          "Git LFS matters for large .glb assets  clone with LFS installed or the character scene will look empty.",
        ],
      },
      {
        heading: "Repo",
        paragraphs: [
          "github.com/makram24/portfolio-website",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "abelton-claude-mcp",
    title: "Abelton Claude: MCP control for Ableton Live",
    excerpt:
      "A local MCP server that lets Claude Desktop drive Ableton through AbletonOSC  core transport/mixer tools plus optional scaffolds.",
    cover: ghOg("Abelton-Claude"),
    category: "MCP",
    tags: ["JavaScript", "MCP", "Ableton", "OSC"],
    date: "2026-09-19",
    readMinutes: 5,
    repoUrl: "https://github.com/makram24/Abelton-Claude",
    sections: [
      {
        paragraphs: [
          "Abelton Claude (Claude Ableton MCP) is a local MCP server that lets Claude Desktop control Ableton Live through AbletonOSC over UDP. Core tools cover transport, mixer, clips/scenes, MIDI writes, devices, snapshots, health probes, export, and action plans.",
          "Scaffold tools  heuristic planners and checklists  stay off by default. They are experimental, not audio DSP analysis. Enable them only when you want those planners via ABLETON_ENABLE_SCAFFOLD_TOOLS.",
        ],
      },
      {
        heading: "Session View, not Arrangement surprises",
        paragraphs: [
          "New clips land in Session View via AbletonOSC clip_slot APIs. If MIDI “vanishes,” press Tab. Empty Drum Rack pads stay silent even when notes exist  a classic gotcha when agents write clips.",
          "Run the MCP client from the project root after npm install so the SDK resolves correctly.",
        ],
      },
      {
        heading: "Repo",
        paragraphs: [
          "github.com/makram24/Abelton-Claude",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "bme-educational-portal",
    title: "BME educational portal: roles, grades, and PHP",
    excerpt:
      "A PHP + MySQL school portal from the BME Modern Full-Stack competition  students, teachers, admins, and a WAMP-friendly setup.",
    cover: ghOg("BME-Modern-Full-Stack-and-Mobile-Developer-Competition"),
    category: "Academic",
    tags: ["PHP", "MySQL", "Bootstrap", "BME"],
    date: "2026-10-05",
    readMinutes: 5,
    repoUrl:
      "https://github.com/makram24/BME-Modern-Full-Stack-and-Mobile-Developer-Competition",
    sections: [
      {
        paragraphs: [
          "Built for the BME Modern Full-Stack and Mobile Developer Competition, this educational portal lets students view subjects and grades, teachers manage rosters and grades, administrators configure the school year, and super-admins manage privileged accounts.",
          "The UI is responsive Bootstrap plus custom CSS. The data layer is MySQL (bme_comp schema) with password hashing, sessions, and role-based dashboards after login.",
        ],
      },
      {
        heading: "Running it on WAMP",
        paragraphs: [
          "The README is deliberately jury-friendly: start WAMP, import sql/bme_comp.sql, optional jury demo passwords, config.local.php for credentials, open index.php → dashboard. PHP 8.1+ is recommended.",
          "Competition projects succeed when a stranger can install them in under thirty minutes. That constraint shaped the docs as much as the code.",
        ],
      },
      {
        heading: "Repo",
        paragraphs: [
          "github.com/makram24/BME-Modern-Full-Stack-and-Mobile-Developer-Competition",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "epsilon-pos-early-build",
    title: "Epsilon POS: early supermarket and restaurant POS",
    excerpt:
      "An earlier Point of Sale build for supermarket and restaurant floors  login PIN, categories, invoice actions, and admin settings.",
    cover: ghOg("Epsilon-P.O.S"),
    category: "Product",
    tags: ["JavaScript", "PHP", "POS"],
    date: "2022-02-24",
    readMinutes: 4,
    repoUrl: "https://github.com/makram24/Epsilon-P.O.S",
    sections: [
      {
        paragraphs: [
          "Epsilon P.O.S was an early Point of Sale for supermarket and restaurant use. Operators log in with a number combination, pick categories and items into an invoice, then use hold, recall, discount, void, print, and paid actions from the navigation strip.",
          "Admin settings cover purchase, reports, closing, categories, products, users, and previous invoices  upload, delete, and review from a split admin screen.",
        ],
      },
      {
        heading: "Lineage to React POS",
        paragraphs: [
          "This repo is the ancestor mindset behind the later React POS: floor speed first, admin second. The UI patterns aged; the problem framing did not.",
          "Repo: github.com/makram24/Epsilon-P.O.S",
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
