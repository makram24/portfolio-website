import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";
import { publicUrl } from "../utils/publicUrl";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const navItems = [
  { label: "ABOUT", href: "#about", type: "anchor" as const },
  { label: "EDUCATION", href: "#education", type: "anchor" as const },
  { label: "WORK", href: "#work", type: "anchor" as const },
  { label: "SHOP", href: "/shop", type: "route" as const },
  { label: "BLOG", href: "/blog", type: "route" as const },
  { label: "CONTACT", href: "#contact", type: "anchor" as const },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    // Lenis is desktop-only (>1024); mobile/tablet use native scroll
    if (
      window.innerWidth <= 1024 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop();

    let rafId = 0;
    function raf(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const links = document.querySelectorAll(".header ul a");
    const onNavClick = (e: Event) => {
      if (window.innerWidth <= 1024) return;
      const elem = e.currentTarget as HTMLAnchorElement;
      const section = elem.getAttribute("data-href");
      if (!section) return;
      e.preventDefault();
      if (lenis) {
        const target = document.querySelector(section) as HTMLElement;
        if (target) {
          lenis.scrollTo(target, {
            offset: 0,
            duration: 1.5,
          });
        }
      }
    };
    links.forEach((elem) => {
      elem.addEventListener("click", onNavClick);
    });

    const onResize = () => {
      lenis?.resize();
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      links.forEach((elem) => {
        elem.removeEventListener("click", onNavClick);
      });
      window.removeEventListener("resize", onResize);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`header${menuOpen ? " is-open" : ""}`} aria-label="Primary">
        <a
          href={publicUrl("")}
          className="navbar-brand"
          aria-label={config.developer.fullName}
          data-cursor="disable"
          onClick={closeMenu}
        >
          <img
            src={publicUrl("/images/logo.png")}
            alt=""
            className="navbar-logo"
            width={52}
            height={52}
            decoding="async"
          />
        </a>

        <button
          type="button"
          className={`navbar-toggle${menuOpen ? " is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-nav-mobile"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-cursor="disable"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="primary-nav" className="navbar-desktop-links">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                <Link to={item.href} data-cursor="disable">
                  <HoverLinks text={item.label} />
                </Link>
              ) : (
                <a
                  data-href={item.href}
                  href={
                    location.pathname === "/" ? item.href : `/${item.href}`
                  }
                >
                  <HoverLinks text={item.label} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`navbar-mobile-panel${menuOpen ? " is-open" : ""}`}
        id="primary-nav-mobile"
        hidden={!menuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === "route" ? (
                <Link to={item.href} data-cursor="disable" onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <a
                  href={
                    location.pathname === "/" ? item.href : `/${item.href}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
