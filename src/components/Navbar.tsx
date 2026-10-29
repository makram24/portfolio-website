import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";
import { publicUrl } from "../utils/publicUrl";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // Lenis is desktop-only (>1024); mobile/tablet use native scroll
    if (
      window.innerWidth <= 1024 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Initialize Lenis smooth scroll
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

    // Start paused
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
      e.preventDefault();
      const elem = e.currentTarget as HTMLAnchorElement;
      const section = elem.getAttribute("data-href");
      if (section && lenis) {
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
  return (
    <>
      <nav className="header" aria-label="Primary">
        <a
          href={publicUrl("")}
          className="navbar-brand"
          aria-label={config.developer.fullName}
          data-cursor="disable"
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
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#education" href="#education">
              <HoverLinks text="EDUCATION" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
