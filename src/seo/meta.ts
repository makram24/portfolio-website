export const SITE_URL = "https://makramalmoghrabi.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-portfolio.png`;
export const SITE_NAME = "Makram Al Moghrabi";

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

export function pageUrl(pathname: string): string {
  if (!pathname || pathname === "/") return `${SITE_URL}/`;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

function ensureMeta(
  attr: "name" | "property",
  key: string
): HTMLMetaElement {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  return tag;
}

export function setMeta(
  attr: "name" | "property",
  key: string,
  content: string
) {
  ensureMeta(attr, key).setAttribute("content", content);
}

export function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const id = "site-json-ld";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function applyPageSeo(seo: PageSeo) {
  const url = pageUrl(seo.path);
  const image = absoluteUrl(seo.image || DEFAULT_OG_IMAGE);
  const type = seo.type || "website";

  document.title = seo.title;
  setMeta("name", "description", seo.description);
  setMeta(
    "name",
    "robots",
    seo.noindex ? "noindex, nofollow" : "index, follow"
  );
  setCanonical(url);

  setMeta("property", "og:type", type);
  setMeta("property", "og:site_name", SITE_NAME);
  setMeta("property", "og:locale", "en_US");
  setMeta("property", "og:title", seo.title);
  setMeta("property", "og:description", seo.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", seo.title);
  setMeta("name", "twitter:description", seo.description);
  setMeta("name", "twitter:image", image);

  if (seo.jsonLd) setJsonLd(seo.jsonLd);
}
