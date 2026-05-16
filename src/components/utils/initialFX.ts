import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenis } from "../Navbar";

export function initialFX() {
  const useNativeScroll = window.innerWidth <= 1024;

  if (useNativeScroll) {
    document.body.style.overflow = "auto";
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "auto";
    if (lenis) {
      lenis.start();
    }
  }

  const main = document.querySelector("main.main-body") as HTMLElement | null;
  if (main) {
    main.classList.add("main-active");
    if (useNativeScroll) {
      gsap.set(main, { opacity: 1 });
    }
  }

  gsap.set("body", { backgroundColor: "#f6f5fa" });

  const selectors = [".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (elements.length > 0) {
    try {
      const landingText = new TextSplitter(elements, {
        type: "chars,lines",
        linesClass: "split-line",
      });

      if (landingText.chars?.length) {
        gsap.fromTo(
          landingText.chars,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.3,
          }
        );
      } else {
        gsap.set(elements, { opacity: 1, y: 0, filter: "none" });
      }
    } catch {
      gsap.set(elements, { opacity: 1, y: 0, filter: "none" });
    }
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  if (useNativeScroll) {
    const photo = document.querySelector(".mobile-photo");
    if (photo) {
      gsap.fromTo(
        photo,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.45 }
      );
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }
}
