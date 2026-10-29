import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../config";

const DEFAULT_TITLE = `${config.developer.fullName} - ${config.developer.title}`;
const DEFAULT_DESCRIPTION =
  "Full Stack & AI Agent Engineer · MSc BME. React, MCP, paid agent skills on Agensi, Flutter, secure systems. Budapest, Hungary.";

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/myworks": {
    title: `All Works - ${config.developer.fullName}`,
    description:
      "Agent skills, MCP tools, products, and client websites by Makram Al Moghrabi.",
  },
  "/play": {
    title: `Pixel Room - ${config.developer.fullName}`,
    description:
      "An interactive pixel-room overview of Makram Al Moghrabi’s work, education, and contact details.",
  },
};

function setMetaDescription(description: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", description);
}

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname];
    if (meta) {
      document.title = meta.title;
      setMetaDescription(meta.description);
      return;
    }

    document.title = `Page not found - ${config.developer.fullName}`;
    setMetaDescription("The requested page was not found.");
  }, [pathname]);

  return null;
};

export default RouteSeo;
