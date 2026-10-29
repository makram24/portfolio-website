import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "../../utils/textSplitter";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: TextSplitter;
}

gsap.registerPlugin(ScrollTrigger);

const ABOUT_SELECTORS = ".about-me .title, .about-me .para";

function revertAboutSplits() {
  document.querySelectorAll<ParaElement>(ABOUT_SELECTORS).forEach((el) => {
    if (el.anim) {
      el.anim.kill();
      el.anim = undefined;
    }
    el.split?.revert();
    el.split = undefined;
    gsap.set(el, { clearProps: "all" });
  });
  document.querySelector(".about-me")?.classList.remove("split-ready");
}

function hideSplitTargets(targets: Element[], withRotate = false) {
  gsap.set(targets, {
    autoAlpha: 0,
    y: 80,
    ...(withRotate ? { rotate: 10 } : {}),
  });
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  const w = window.innerWidth;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revertAboutSplits();
    document.querySelector(".about-me")?.classList.add("split-ready");
    return;
  }

  if (w < 900 && w > 768) {
    revertAboutSplits();
    return;
  }

  const paras = document.querySelectorAll<ParaElement>(".para");
  const titles = document.querySelectorAll<ParaElement>(".title");
  const aboutMe = document.querySelector(".about-me");

  if (!paras.length && !titles.length) return;

  aboutMe?.classList.remove("split-ready");

  const TriggerStart =
    w <= 768 ? "top 85%" : w <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play none none reverse";
  const wordStagger = w <= 768 ? 0.012 : 0.02;
  const charStagger = w <= 768 ? 0.02 : 0.03;
  const triggerEl =
    paras[0]?.parentElement?.parentElement ??
    titles[0]?.parentElement?.parentElement;

  const scrollConfig = {
    trigger: triggerEl,
    toggleActions: ToggleAction,
    start: TriggerStart,
    invalidateOnRefresh: true,
  };

  let revealDelay = 0;

  titles.forEach((title) => {
    if (title.anim) {
      title.anim.kill();
      title.split?.revert();
    }

    title.split = new TextSplitter(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    hideSplitTargets(title.split.chars, true);

    title.anim = gsap.to(title.split.chars, {
      autoAlpha: 1,
      y: 0,
      rotate: 0,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: charStagger,
      delay: revealDelay,
      scrollTrigger: { ...scrollConfig },
    });

    revealDelay += title.split.chars.length * charStagger + 0.12;
  });

  paras.forEach((para) => {
    if (para.anim) {
      para.anim.kill();
      para.split?.revert();
    }

    para.split = new TextSplitter(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    hideSplitTargets(para.split.words);

    para.anim = gsap.to(para.split.words, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: wordStagger,
      delay: revealDelay,
      scrollTrigger: { ...scrollConfig },
    });

    revealDelay += para.split.words.length * wordStagger + 0.1;
  });

  aboutMe?.classList.add("split-ready");
  ScrollTrigger.refresh();
}
