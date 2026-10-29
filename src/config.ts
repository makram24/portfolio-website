import { projects, homepageProjects } from "./data/projects";
import {
  agentSkills,
  agentSkillsStorefront,
  liveAgentSkills,
} from "./data/agentSkills";

export const config = {
  developer: {
    name: "Makram",
    fullName: "Makram Al Moghrabi",
    title: "Full Stack & AI Agent Engineer",
    subtitle: "MSc Computer Science · BME",
    description:
      "I build friendly full-stack products and helpful AI agent skills — MCP tools, safe operators, and React/Flutter apps. Currently finishing my MSc at BME in Budapest.",
  },
  landing: {
    subtitle1: "I build apps, agents & useful tools",
    subtitle2: "Based in Budapest · Happy to chat",
  },
  social: {
    github: "https://github.com/makram24",
    portfolio: "https://makramalmoghrabi.com",
    email: "makramalmoghrabi@gmail.com",
    phone: "+36 30 746 6581",
    phoneHref: "tel:+36307466581",
    location: "Budapest, Hungary",
    address: "Kunigunda útja 25, 1037",
  },
  openTo: {
    headline:
      "Coursework done — I'm free to start a full-time role whenever you're ready",
    items: [
      { label: "Happy to do", value: "Full-time · Contract · Freelance" },
      { label: "Where", value: "Budapest · or remote across the EU" },
      {
        label: "Into",
        value: "React · MCP · AI agents · full-stack products",
      },
      { label: "Status", value: "Say hi — I'm open" },
    ],
    responseTime: "I usually write back within a day or two.",
  },
  about: {
    title: "About Me",
    description:
      "Hey — I'm Makram. I like building things people actually enjoy using: full-stack apps, mobile products, and a growing set of AI agent skills on Agensi, SkillHQ, and BuySkills. I'm wrapping up my MSc in Computer Science Engineering at BME.",
    clientNote:
      "I've shipped agency sites with teams like The Social Bang and Brainy Media, built the Fleeku marketplace apps, and now publish Cursor/Claude skills that keep agents careful and useful. Always happy to collaborate.",
  },
  highlights: [
    { value: "4+", label: "Years experience" },
    { value: "24", label: "Paid agent skills" },
    { value: "MSc", label: "BME · Software Engineering" },
    { value: "CCNA", label: "Routing & security certified" },
  ],
  education: [
    {
      degree: "MSc Computer Science Engineering",
      school: "Budapest University of Technology and Economics (BME)",
      period: "2024 – Feb 2027",
      location: "Budapest, Hungary",
      detail:
        "Specialization: Software Engineering & Smart Cities. Coursework: advanced software architecture, time series analysis for urban environments, cloud-based IoT implementation.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Lebanese International University (LIU)",
      period: "2019 – 2022",
      location: "Lebanon",
      detail: "Academic excellence — graduated with a 3.56 GPA.",
    },
  ],
  certifications: [
    {
      name: "CCNA Routing & Switching: Scaling Networks",
      issuer: "Cisco",
      period: "Certified",
    },
    {
      name: "CCNAv7: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      period: "Certified",
    },
    {
      name: "Microsoft Security Fundamentals",
      issuer: "Microsoft",
      period: "Master Level",
    },
    {
      name: "Digital Marketing Fundamentals",
      issuer: "Maharat min Google",
      period: "Certified",
    },
    {
      name: "Cloud Computing Workshop",
      issuer: "IEEE LIU Student Branch",
      period: "Workshop",
    },
  ],
  engineeringProjects: [
    {
      title: "MiniCRM MCP + Operator Skills",
      category: "MCP / AI Agents",
      description:
        "Public MiniCRM MCP server plus paid operator skills (EN/HU) with schema-first CategoryIds and confirm-before-write on every mutation. Pattern extended into the CRM MCP Builder product.",
      stack: ["TypeScript", "MCP", "miniCRM", "Cursor skills"],
    },
    {
      title: "Agensi Skills Catalog",
      category: "Product / AI",
      description:
        "24 one-time paid agent skills across Agensi, SkillHQ, and BuySkills — CI/CD Doctor, Env Doctor Pro, MCP Operator, Paid Code Reviewer, PR Ship Pack, and more.",
      stack: ["Agent skills", "MCP", "CI/CD", "Dev tooling"],
    },
    {
      title: "ReleaseGuard Agent",
      category: "AI / DevOps",
      description:
        "AI-assisted pull request risk and release readiness agent — severity-rated analysis before merge and deploy.",
      stack: ["TypeScript", "AI agents", "PR review"],
    },
    {
      title: "Smart City Agent",
      category: "Full Stack / AI",
      description:
        "React dashboard integrating real-time Budapest city APIs with an AI chat interface. Specialized agents parse natural language and visualize live transport routes on interactive maps.",
      stack: ["React", "Firebase", "OpenStreetMap", "City APIs"],
    },
    {
      title: "Fleeku Marketplace Suite",
      category: "Mobile & Product",
      description:
        "Customer and provider Flutter apps with a React admin panel — full marketplace product delivery from onboarding to operations.",
      stack: ["Flutter", "Dart", "React", "Firebase"],
    },
    {
      title: "Event-Driven Order Platform",
      category: "Backend / Systems",
      description:
        "Production-grade event-driven order and inventory management platform — asynchronous workflows, inventory consistency, and service boundaries.",
      stack: ["TypeScript", "Events", "Inventory", "Orders"],
    },
  ],
  experiences: [
    {
      position: "Creator — Agent Skills & MCP",
      company: "Agensi · SkillHQ · BuySkills",
      period: "2026 - Present",
      location: "Remote",
      description:
        "I publish paid AI agent skills and MCP tools that help developers ship safely — operators that ask before they write, CRM bridges, and handy shipping utilities.",
      responsibilities: [
        "Shipped 24 skills across three shops (8 live on Agensi, more on the way)",
        "Built MiniCRM MCP (public) and the CRM MCP Builder for mock-to-live bridges",
        "Kept agents careful: read vs write, confirmation gates, schema-first IDs",
      ],
      technologies: [
        "MCP",
        "TypeScript",
        "Cursor skills",
        "CI/CD",
        "REST APIs",
      ],
    },
    {
      position: "Full Stack Developer & Web Designer",
      company: "Carrot Media",
      period: "2022 - 2025",
      location: "Lebanon",
      description:
        "Architected and deployed custom web applications and e-commerce platforms using React.js and Firebase.",
      responsibilities: [
        "Managed end-to-end development of digital card systems for agency clients",
        "Partnered with The Social Bang and Brainy Media on high-performance solutions",
        "Delivered under tight campaign deadlines with scalable frontends and backends",
      ],
      technologies: [
        "React.js",
        "Firebase",
        "WordPress",
        "Shopify",
        "Digital cards",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote / International",
      description:
        "Scalable website development and UI/UX design for international clients with secure PHP/MySQL backends.",
      responsibilities: [
        "Providing full-stack delivery for brands and agencies worldwide",
        "Implementing secure backend infrastructures to ensure data integrity",
        "CMS and custom web application builds",
      ],
      technologies: ["React", "PHP", "MySQL", "WordPress", "UI/UX"],
    },
    {
      position: "Full Stack Developer",
      company: "AWK Development",
      period: "2021 - 2022",
      location: "Lebanon",
      description:
        "Part-time development and optimization of backend systems using PHP, CSS, and JavaScript.",
      responsibilities: [
        "Integrated AJAX calls and MySQL databases for responsiveness",
        "Developed and optimized backend features",
        "Supported production web application workflows",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "CSS"],
    },
  ],
  projects: [...projects],
  homepageProjects: [...homepageProjects],
  agentSkills: [...agentSkills],
  liveAgentSkills: [...liveAgentSkills],
  agentSkillsStorefront,
  contact: {
    email: "makramalmoghrabi@gmail.com",
    phone: "+36 30 746 6581",
    phoneHref: "tel:+36307466581",
    github: "https://github.com/makram24",
    portfolio: "https://makramalmoghrabi.com",
    linkedin: "https://www.linkedin.com/in/makram-almoghrabi/",
    twitter: "",
    facebook: "",
    instagram: "",
  },
  skills: {
    develop: {
      title: "FULL-STACK DEVELOPMENT",
      description: "Web & mobile you can ship",
      details:
        "I build React, TypeScript, PHP, and Flutter apps that feel solid in production — from client websites to marketplace suites with Firebase and MySQL.",
      tools: [
        "React.js",
        "TypeScript",
        "PHP",
        "Flutter",
        "Firebase",
        "MySQL",
        "HTML5",
        "CSS3",
      ],
    },
    agents: {
      title: "AI AGENTS & MCP",
      description: "Skills that play nice",
      details:
        "I design Cursor/Claude skills and MCP servers so agents ask before they write — CRM bridges, CI/CD helpers, and operators you can trust.",
      tools: [
        "MCP",
        "Agent skills",
        "CI/CD Doctor",
        "CRM bridges",
        "Cursor",
        "TypeScript",
      ],
    },
    iot: {
      title: "IoT & SMART CITIES",
      description: "Sensors meet the city",
      details:
        "I connect hardware and software with ThingSpeak, MQTT, and ESP boards, plus city dashboards for my BME smart-city work.",
      tools: [
        "ThingSpeak",
        "MQTT",
        "ESP8266",
        "OpenStreetMap",
        "IoT",
        "Smart Cities",
      ],
    },
    security: {
      title: "NETWORKING & SECURITY",
      description: "Keep things safe",
      details:
        "CCNA certified, Microsoft Security Fundamentals, and everyday habits like SSL, OAuth, and careful API design so projects stay trustworthy.",
      tools: [
        "CCNA",
        "SSL",
        "OAuth",
        "Git/GitHub",
        "Deps audit",
        "Secure APIs",
      ],
    },
  },
};
