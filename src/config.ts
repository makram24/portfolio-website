import {
  projects,
  homepageProjects,
  productProjects,
  clientProjects,
  featuredClientProjects,
  archivedClientProjects,
} from "./data/projects";
import {
  agentSkills,
  agentSkillsStorefront,
  featuredAgentSkills,
  liveAgentSkills,
} from "./data/agentSkills";

export const config = {
  developer: {
    name: "Makram",
    fullName: "Makram Al Moghrabi",
    title: "Full Stack & AI Agent Engineer",
    subtitle: "MSc Computer Science · BME",
    description:
      "I build friendly full-stack products and helpful AI agent skills  MCP tools, safe operators, and React/Flutter apps. Currently finishing my MSc at BME in Budapest.",
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
  },
  openTo: {
    headline:
      "Coursework done  I'm free to start a full-time role whenever you're ready",
    items: [
      { label: "Happy to do", value: "Full-time · Contract · Freelance" },
      { label: "Where", value: "Budapest · or remote across the EU" },
      {
        label: "Into",
        value: "React · MCP · AI agents · full-stack products",
      },
      { label: "Status", value: "Say hi  I'm open" },
    ],
    responseTime: "I usually write back within a day or two.",
  },
  about: {
    title: "About Me",
    description:
      "Hey  I'm Makram. I like building things people actually enjoy using: full-stack apps, mobile products, and a growing set of AI agent skills on Agensi, SkillHQ, and BuySkills. I'm wrapping up my MSc in Computer Science Engineering at BME.",
    clientNote:
      "I've shipped agency sites with teams like The Social Bang and Brainy Media, and now publish Cursor/Claude skills that keep agents careful and useful. Always happy to collaborate.",
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
      detail: "Academic excellence  graduated with a 3.56 GPA.",
    },
  ],
  certifications: [
    {
      name: "Intelligent by Design: Build an AI Agent",
      issuer: "IBM",
      period: "Oct 2026",
    },
    {
      name: "Claude Academy: Model Context Protocol  Advanced Topics",
      issuer: "Anthropic",
      period: "Oct 2026",
    },
    {
      name: "Claude Academy: Introduction to Model Context Protocol",
      issuer: "Anthropic",
      period: "Oct 2026",
    },
    {
      name: "Claude Academy: Claude Code 101",
      issuer: "Anthropic",
      period: "Oct 2026",
    },
    {
      name: "Data Software Engineering Program 25/26",
      issuer: "EPAM Systems",
      period: "Aug 2026",
    },
    {
      name: "CCNA Routing & Switching: Scaling Networks",
      issuer: "Cisco",
      period: "Feb 2022",
    },
    {
      name: "CCNAv7: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      period: "Jun 2021",
    },
    {
      name: "CCNA R&S: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      period: "Mar 2021",
    },
    {
      name: "Microsoft Security Fundamentals",
      issuer: "Microsoft",
      period: "Master Level",
    },
  ],
  engineeringProjects: [
    {
      title: "MiniCRM MCP",
      category: "MCP / TypeScript",
      description:
        "MCP server that lets AI agents operate miniCRM safely with schema-first tools  powers the MiniCRM Operator skills.",
      stack: ["TypeScript", "MCP", "miniCRM"],
      url: "https://github.com/makram24/MiniCRM-MCP",
    },
    {
      title: "ReleaseGuard Agent",
      category: "AI / DevOps",
      description:
        "AI-assisted pull request risk and release readiness agent  severity-rated analysis before you merge and ship.",
      stack: ["TypeScript", "AI agents", "PR review"],
      url: "https://github.com/makram24/ReleaseGuard-Agent",
    },
    {
      title: "AI Smart City Project",
      category: "Full Stack / Smart Cities",
      description:
        "React dashboard with Budapest city APIs and an AI chat interface for live transport routes and service locations on the map.",
      stack: ["TypeScript", "React", "Firebase", "OpenStreetMap"],
      url: "https://github.com/makram24/AI-Smart-City-Project",
    },
    {
      title: "React POS",
      category: "Web / Commerce",
      description:
        "Point-of-sale web app for retail and restaurant workflows, built with React.",
      stack: ["JavaScript", "React", "POS"],
      url: "https://github.com/makram24/React-Pos",
    },
    {
      title: "Portfolio Website",
      category: "TypeScript / React",
      description:
        "This personal portfolio site  React, Three.js character, and project showcase.",
      stack: ["TypeScript", "React", "Three.js"],
      url: "https://github.com/makram24/portfolio-website",
    },
    {
      title: "Abelton Claude",
      category: "JavaScript / AI",
      description:
        "Claude-assisted Ableton-related tooling and experiments in JavaScript.",
      stack: ["JavaScript", "Claude", "Creative tools"],
      url: "https://github.com/makram24/Abelton-Claude",
    },
  ],
  experiences: [
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
  productProjects: [...productProjects],
  clientProjects: [...clientProjects],
  featuredClientProjects: [...featuredClientProjects],
  archivedClientProjects: [...archivedClientProjects],
  agentSkills: [...agentSkills],
  featuredAgentSkills: [...featuredAgentSkills],
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
        "I build React, TypeScript, PHP, and Flutter apps that feel solid in production  from client websites to marketplace suites with Firebase and MySQL.",
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
        "I design Cursor/Claude skills and MCP servers so agents ask before they write  CRM bridges, CI/CD helpers, and operators you can trust.",
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
