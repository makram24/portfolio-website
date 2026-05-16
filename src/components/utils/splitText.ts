import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "../../utils/textSplitter";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: TextSplitter;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  const w = window.innerWidth;
  /* Tablet 769–899px: unchanged (skip). Desktop ≥900 & mobile ≤768 run scroll splits. */
  if (w < 900 && w > 768) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart =
    w <= 768 ? "top bottom" : w <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  const wordStagger = w <= 768 ? 0.012 : 0.02;
  const charStagger = w <= 768 ? 0.02 : 0.03;

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new TextSplitter(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          invalidateOnRefresh: true,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: wordStagger,
        immediateRender: false,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new TextSplitter(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
          invalidateOnRefresh: true,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: charStagger,
        immediateRender: false,
      }
    );
  });
}
