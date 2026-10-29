/**
 * Build-time SEO:
 * 1) Write public/sitemap.xml + dist/sitemap.xml
 * 2) Emit static HTML shells (meta + JSON-LD) for every known route
 * 3) Emit dist/404.html with noindex for unknown paths
 *
 * Run after `vite build` (see package.json).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SITE = "https://makramalmoghrabi.com";
const DEFAULT_IMAGE = `${SITE}/images/og-portfolio.png`;
const SITE_NAME = "Makram Al Moghrabi";
const DEFAULT_TITLE = `${SITE_NAME} - Full Stack & AI Agent Engineer`;
const DEFAULT_DESCRIPTION =
  "Full Stack & AI Agent Engineer · MSc BME. React, MCP, paid agent skills on Agensi, Flutter, secure systems. Budapest, Hungary.";

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function unquote(raw) {
  return raw
    .replace(/^["'`]|["'`]$/g, "")
    .replace(/\\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function fieldString(block, name) {
  const re = new RegExp(
    `${name}:\\s*(?:\\n\\s*)?(?:"((?:\\\\.|[^"\\\\])*)"|'((?:\\\\.|[^'\\\\])*)'|ghOg\\("([^"]+)"\\))`,
    "m"
  );
  const m = block.match(re);
  if (!m) return "";
  if (m[3]) return `https://opengraph.githubassets.com/1/makram24/${m[3]}`;
  return unquote(m[1] ?? m[2] ?? "");
}

/** Split exported array literal into top-level `{...}` object blocks. */
function extractObjects(source, arrayName) {
  const marker = `export const ${arrayName}`;
  const start = source.indexOf(marker);
  if (start < 0) return [];
  const fromAssign = source.indexOf("=", start);
  const openBracket = source.indexOf("[", fromAssign);
  if (openBracket < 0) return [];

  let depth = 0;
  let end = -1;
  for (let i = openBracket; i < source.length; i++) {
    const ch = source[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) return [];

  const body = source.slice(openBracket + 1, end);
  const blocks = [];
  let objDepth = 0;
  let objStart = -1;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === "{") {
      if (objDepth === 0) objStart = i;
      objDepth++;
    } else if (ch === "}") {
      objDepth--;
      if (objDepth === 0 && objStart >= 0) {
        blocks.push(body.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }
  return blocks;
}

function parseProjects() {
  return extractObjects(read("src/data/projects.ts"), "projects")
    .map((block) => {
      const slug = fieldString(block, "slug");
      if (!slug) return null;
      return {
        slug,
        title: fieldString(block, "title") || slug,
        description: fieldString(block, "description") || DEFAULT_DESCRIPTION,
        image: fieldString(block, "image") || DEFAULT_IMAGE,
      };
    })
    .filter(Boolean);
}

function parsePosts() {
  return extractObjects(read("src/data/blog.ts"), "blogPosts")
    .map((block) => {
      const slug = fieldString(block, "slug");
      if (!slug) return null;
      return {
        slug,
        title: fieldString(block, "title") || slug,
        description: fieldString(block, "excerpt") || DEFAULT_DESCRIPTION,
        image: fieldString(block, "cover") || DEFAULT_IMAGE,
        date: fieldString(block, "date"),
      };
    })
    .filter(Boolean);
}

function absoluteUrl(pathOrUrl) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const p = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE}${p}`;
}

function pageUrl(pathname) {
  if (!pathname || pathname === "/") return `${SITE}/`;
  return `${SITE}${pathname.replace(/\/+$/, "")}`;
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const projects = parseProjects();
const posts = parsePosts();

const staticRoutes = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    changefreq: "monthly",
    priority: "1.0",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${SITE}/#person`,
          name: SITE_NAME,
          url: SITE,
          jobTitle: "Full Stack & AI Agent Engineer",
          email: "makramalmoghrabi@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Budapest",
            addressCountry: "HU",
          },
          sameAs: [
            "https://github.com/makram24",
            "https://makramalmoghrabi.com",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          url: SITE,
          name: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          publisher: { "@id": `${SITE}/#person` },
          inLanguage: "en",
        },
      ],
    },
  },
  {
    path: "/myworks",
    title: `All Works - ${SITE_NAME}`,
    description:
      "Agent skills, MCP tools, products, and client websites by Makram Al Moghrabi.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/blog",
    title: `Blog - ${SITE_NAME}`,
    description:
      "Build notes for each public GitHub repo — MCP, POS, smart city, portfolio, and more by Makram Al Moghrabi.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/shop",
    title: `Agent Skills Shop - ${SITE_NAME}`,
    description:
      "Browse 24 live AI agent skills by Makram Al Moghrabi on Agensi, SkillHQ, and BuySkills.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/play",
    title: `Pixel Room - ${SITE_NAME}`,
    description:
      "An interactive pixel-room overview of Makram Al Moghrabi’s work, education, and contact details.",
    changefreq: "yearly",
    priority: "0.5",
  },
];

const projectRoutes = projects.map((p) => ({
  path: `/myworks/${p.slug}`,
  title: `${p.title} - ${SITE_NAME}`,
  description: p.description,
  image: p.image,
  changefreq: "monthly",
  priority: "0.7",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.description,
    url: pageUrl(`/myworks/${p.slug}`),
    image: absoluteUrl(p.image),
    author: { "@id": `${SITE}/#person` },
  },
}));

const blogRoutes = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: `${p.title} - ${SITE_NAME}`,
  description: p.description,
  image: p.image,
  type: "article",
  changefreq: "monthly",
  priority: "0.7",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    image: absoluteUrl(p.image),
    datePublished: p.date || undefined,
    author: { "@id": `${SITE}/#person` },
    mainEntityOfPage: pageUrl(`/blog/${p.slug}`),
  },
}));

const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes];

function buildSitemap(routes) {
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${pageUrl(r.path)}</loc>
    <changefreq>${r.changefreq || "monthly"}</changefreq>
    <priority>${r.priority || "0.6"}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function patchHtml(template, route, { noindex = false } = {}) {
  const url = pageUrl(route.path);
  const image = absoluteUrl(route.image || DEFAULT_IMAGE);
  const type = route.type || "website";
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(route.title)}</title>`
  );

  const ensure = (pattern, tag) => {
    if (pattern.test(html)) html = html.replace(pattern, tag);
    else html = html.replace("</head>", `    ${tag}\n  </head>`);
  };

  ensure(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(route.description)}" />`
  );
  ensure(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robots}" />`
  );
  ensure(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${esc(url)}" />`
  );
  ensure(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${type}" />`
  );
  ensure(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(route.title)}" />`
  );
  ensure(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(route.description)}" />`
  );
  ensure(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${esc(url)}" />`
  );
  ensure(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${esc(image)}" />`
  );
  ensure(
    /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`
  );
  ensure(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="en_US" />`
  );
  ensure(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${esc(route.title)}" />`
  );
  ensure(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${esc(route.description)}" />`
  );
  ensure(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${esc(image)}" />`
  );

  const jsonLd = route.jsonLd
    ? `<script type="application/ld+json" id="site-json-ld">${JSON.stringify(
        route.jsonLd
      )}</script>`
    : "";
  if (jsonLd) {
    if (html.includes('id="site-json-ld"')) {
      html = html.replace(
        /<script type="application\/ld\+json" id="site-json-ld">[\s\S]*?<\/script>/,
        jsonLd
      );
    } else {
      html = html.replace("</head>", `    ${jsonLd}\n  </head>`);
    }
  }

  return html;
}

function writeRouteHtml(distDir, template, route) {
  const outPath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, patchHtml(template, route), "utf8");
}

const sitemap = buildSitemap(allRoutes);
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap, "utf8");

const distDir = path.join(root, "dist");
if (fs.existsSync(distDir)) {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  for (const route of allRoutes) {
    writeRouteHtml(distDir, template, route);
  }
  const notFound = patchHtml(
    template,
    {
      path: "/404",
      title: `Page not found - ${SITE_NAME}`,
      description: "The requested page was not found on this portfolio.",
    },
    { noindex: true }
  );
  fs.writeFileSync(path.join(distDir, "404.html"), notFound, "utf8");
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
  console.log(
    `SEO: ${projects.length} projects, ${posts.length} posts → ${allRoutes.length} urls + HTML shells + 404.html`
  );
} else {
  console.log(
    `SEO: wrote public/sitemap.xml (${allRoutes.length} urls; ${projects.length} projects, ${posts.length} posts)`
  );
}
