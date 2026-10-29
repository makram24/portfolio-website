import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../config";
import { blogPosts, getBlogPostBySlug } from "../data/blog";
import { getProjectBySlug, projects } from "../data/projects";
import {
  SITE_NAME,
  SITE_URL,
  applyPageSeo,
  pageUrl,
  absoluteUrl,
  DEFAULT_OG_IMAGE,
} from "../seo/meta";

const DEFAULT_TITLE = `${config.developer.fullName} - ${config.developer.title}`;
const DEFAULT_DESCRIPTION =
  "Full Stack & AI Agent Engineer · MSc BME. React, MCP, paid agent skills on Agensi, Flutter, secure systems. Budapest, Hungary.";

const personJsonLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: config.developer.fullName,
  url: SITE_URL,
  jobTitle: config.developer.title,
  email: config.social.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  sameAs: [config.social.github, config.social.portfolio].filter(Boolean),
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en",
};

const ROUTE_META: Record<
  string,
  {
    title: string;
    description: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  }
> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [personJsonLd, websiteJsonLd],
    },
  },
  "/myworks": {
    title: `All Works - ${config.developer.fullName}`,
    description:
      "Agent skills, MCP tools, products, and client websites by Makram Al Moghrabi.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `All Works - ${config.developer.fullName}`,
      url: pageUrl("/myworks"),
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      numberOfItems: projects.length,
    },
  },
  "/shop": {
    title: `Agent Skills Shop - ${config.developer.fullName}`,
    description:
      "Browse 24 live AI agent skills by Makram Al Moghrabi on Agensi, SkillHQ, and BuySkills.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Agent Skills Shop - ${config.developer.fullName}`,
      url: pageUrl("/shop"),
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  },
  "/blog": {
    title: `Blog - ${config.developer.fullName}`,
    description:
      "Build notes for each public GitHub repo — MCP, POS, smart city, portfolio, and more by Makram Al Moghrabi.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `Blog - ${config.developer.fullName}`,
      url: pageUrl("/blog"),
      author: { "@id": `${SITE_URL}/#person` },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: pageUrl(`/blog/${post.slug}`),
        datePublished: post.date,
      })),
    },
  },
  "/play": {
    title: `Pixel Room - ${config.developer.fullName}`,
    description:
      "An interactive pixel-room overview of Makram Al Moghrabi’s work, education, and contact details.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Pixel Room - ${config.developer.fullName}`,
      url: pageUrl("/play"),
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  },
};

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname];
    if (meta) {
      applyPageSeo({
        title: meta.title,
        description: meta.description,
        path: pathname,
        image: DEFAULT_OG_IMAGE,
        jsonLd: meta.jsonLd,
      });
      return;
    }

    const projectMatch = pathname.match(/^\/myworks\/([^/]+)\/?$/);
    if (projectMatch) {
      const project = getProjectBySlug(decodeURIComponent(projectMatch[1]));
      if (project) {
        const path = `/myworks/${project.slug}`;
        applyPageSeo({
          title: `${project.title} - ${config.developer.fullName}`,
          description: project.description,
          path,
          image: project.image || DEFAULT_OG_IMAGE,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: pageUrl(path),
            image: absoluteUrl(project.image),
            author: { "@id": `${SITE_URL}/#person` },
            keywords: project.technologies,
          },
        });
        return;
      }
    }

    const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
    if (blogMatch) {
      const post = getBlogPostBySlug(decodeURIComponent(blogMatch[1]));
      if (post) {
        const path = `/blog/${post.slug}`;
        applyPageSeo({
          title: `${post.title} - ${config.developer.fullName}`,
          description: post.excerpt,
          path,
          image: post.cover || DEFAULT_OG_IMAGE,
          type: "article",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: absoluteUrl(post.cover),
            datePublished: post.date,
            author: { "@id": `${SITE_URL}/#person` },
            mainEntityOfPage: pageUrl(path),
            keywords: post.tags.join(", "),
          },
        });
        return;
      }
    }

    applyPageSeo({
      title: `Page not found - ${config.developer.fullName}`,
      description: "The requested page was not found on this portfolio.",
      path: pathname,
      noindex: true,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page not found",
        url: pageUrl(pathname),
      },
    });
  }, [pathname]);

  return null;
};

export default RouteSeo;
