import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let charFlickerInterval: ReturnType<typeof setInterval> | undefined;

const CHAR_SCROLL_IDS = [
  "char-landing",
  "char-about",
  "char-highlights",
  "char-whatido",
] as const;

export function killCharScrollSetup() {
  if (charFlickerInterval) {
    clearInterval(charFlickerInterval);
    charFlickerInterval = undefined;
  }
  CHAR_SCROLL_IDS.forEach((id) => ScrollTrigger.getById(id)?.kill());
  gsap.getById("char-screen-flicker")?.kill();
  killSectionScrollSetup();
}

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  killCharScrollSetup();

  let intensity: number = 0;
  charFlickerInterval = setInterval(() => {
    intensity = Math.random();
  }, 200);

  const tl1 = gsap.timeline({
    scrollTrigger: {
      id: "char-landing",
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      id: "char-about",
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tlHighlights = gsap.timeline({
    scrollTrigger: {
      id: "char-highlights",
      trigger: ".highlights-section",
      start: "top 85%",
      end: "top 35%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      id: "char-whatido",
      trigger: ".whatIDO",
      // Start ~25% viewport before section pins to top (turn + exit begins earlier)
      start: "top 75%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: THREE.Mesh | undefined;
  let monitor: THREE.Mesh | undefined;
  character?.children.forEach((object) => {
    if (object.name === "Plane004") {
      object.children.forEach((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        const material = child.material as THREE.MeshStandardMaterial;
        material.transparent = true;
        material.opacity = 0;
        if (material.name === "Material.027") {
          monitor = child;
          material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight" && object instanceof THREE.Mesh) {
      const material = object.material as THREE.MeshStandardMaterial;
      material.transparent = true;
      material.opacity = 0;
      material.emissive.set("#e8d4b8");
      gsap.timeline({
        id: "char-screen-flicker",
        repeat: -1,
        repeatRefresh: true,
      }).to(material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  const neckBone = character?.getObjectByName("spine005");
  if (window.innerWidth > 1024) {
    if (character) {
      const camHome = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };

      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .fromTo(
          camera.position,
          { x: camHome.x, y: camHome.y, z: camHome.z },
          { x: camHome.x, y: camHome.y, z: 22, duration: 1 },
          0
        )
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .fromTo(
          ".landing-container",
          { opacity: 1, y: "0%" },
          { opacity: 0, y: "40%", duration: 0.8 },
          0
        )
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .fromTo(
          camera.position,
          { x: camHome.x, y: camHome.y, z: 22 },
          {
            x: camHome.x,
            y: 8.4,
            z: 75,
            duration: 6,
            delay: 2,
            ease: "power3.inOut",
          },
          0
        )
        .fromTo(".about-section", { y: "0%" }, { y: "30%", duration: 6 }, 0)
        .fromTo(
          ".about-section",
          { opacity: 1 },
          { opacity: 0, delay: 3, duration: 2 },
          0
        )
        .fromTo(
          ".character-model",
          { x: "-25%", pointerEvents: "inherit" },
          { x: "-12%", pointerEvents: "none", delay: 2, duration: 5 },
          0
        )
        .fromTo(
          character.rotation,
          { y: 0.7, x: 0 },
          { y: 0.92, x: 0.12, delay: 3, duration: 3 },
          0
        )
        .fromTo(
          neckBone!.rotation,
          { x: 0 },
          { x: 0.6, delay: 2, duration: 3 },
          0
        )
        .fromTo(
          monitor!.material,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 3.2 },
          0
        )
        .fromTo(
          screenLight!.material,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 4.5 },
          0
        )
        .fromTo(
          monitor!.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4, scaleY: 1.4, y: "55%" },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      // Fade the character out as Highlights enters; keep it hidden for the rest
      tlHighlights.fromTo(
        ".character-model",
        { autoAlpha: 1, pointerEvents: "inherit" },
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Character is already hidden by Highlights  only nudge What I Do content
      tl3.fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0);
    }
  }
}

const SECTION_SCROLL_IDS = [
  "section-career",
  "section-education",
  "section-certifications",
] as const;

export function killSectionScrollSetup() {
  SECTION_SCROLL_IDS.forEach((id) => ScrollTrigger.getById(id)?.kill());
}

export function setAllTimeline() {
  killSectionScrollSetup();

  // Mobile: scrub is unreliable with native scroll  use enter / reverse scroll triggers
  if (window.innerWidth <= 768) {
    const scrollOptions = {
      start: "top bottom",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    } as const;

    gsap
      .timeline({
        scrollTrigger: {
          id: "section-career",
          trigger: ".career-section",
          ...scrollOptions,
        },
      })
      .fromTo(
        ".career-timeline",
        { maxHeight: "0%", opacity: 0 },
        {
          maxHeight: "100%",
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        ".career-info-box",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.52,
          ease: "power2.out",
          immediateRender: false,
        },
        "-=0.5"
      )
      .fromTo(
        ".career-dot",
        { animationIterationCount: "infinite" },
        { animationIterationCount: "1", immediateRender: false },
        "-=0.35"
      );

    gsap
      .timeline({
        scrollTrigger: {
          id: "section-education",
          trigger: ".education-section",
          ...scrollOptions,
        },
      })
      .fromTo(
        ".education-timeline",
        { maxHeight: "0%", opacity: 0 },
        {
          maxHeight: "100%",
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        ".education-info-box",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.16,
          duration: 0.52,
          ease: "power2.out",
          immediateRender: false,
        },
        "-=0.5"
      )
      .fromTo(
        ".education-dot",
        { animationIterationCount: "infinite" },
        { animationIterationCount: "1", immediateRender: false },
        "-=0.35"
      );

    gsap
      .timeline({
        scrollTrigger: {
          id: "section-certifications",
          trigger: ".certifications-section",
          ...scrollOptions,
        },
      })
      .fromTo(
        ".certifications-timeline",
        { maxHeight: "0%", opacity: 0 },
        {
          maxHeight: "100%",
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        ".certifications-info-box",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.16,
          duration: 0.52,
          ease: "power2.out",
          immediateRender: false,
        },
        "-=0.5"
      )
      .fromTo(
        ".certifications-dot",
        { animationIterationCount: "infinite" },
        { animationIterationCount: "1", immediateRender: false },
        "-=0.35"
      );

    const cardScroll = {
      start: "top bottom",
      toggleActions: "play none none reverse" as const,
      invalidateOnRefresh: true,
    };

    [
      { sel: ".highlight-card", tr: ".highlights-section", st: 0.1 },
      { sel: ".what-card", tr: ".whatIDO", st: 0.1 },
      { sel: ".engineering-info-box", tr: ".engineering-section", st: 0.14 },
      { sel: ".work-box", tr: ".work-section", st: 0.12 },
    ].forEach(({ sel, tr, st }) => {
      const nodes = gsap.utils.toArray(sel);
      if (!nodes.length) return;
      gsap.fromTo(
        nodes,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: st,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: tr,
            ...cardScroll,
          },
        }
      );
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      setTimeout(() => ScrollTrigger.refresh(), 450);
    });

    return;
  }

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      id: "section-career",
      trigger: ".career-section",
      start: "top 50%",
      end: "bottom 30%",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "0%" },
      { maxHeight: "100%", duration: 1, ease: "none" },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.2 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }

  const educationTimeline = gsap.timeline({
    scrollTrigger: {
      id: "section-education",
      trigger: ".education-section",
      start: "top 55%",
      end: "bottom 30%",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
  });
  educationTimeline
    .fromTo(
      ".education-timeline",
      { maxHeight: "0%" },
      { maxHeight: "100%", duration: 1, ease: "none" },
      0
    )
    .fromTo(
      ".education-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.2 },
      0
    )
    .fromTo(
      ".education-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.15, duration: 0.5 },
      0
    )
    .fromTo(
      ".education-dot",
      { animationIterationCount: "infinite" },
      { animationIterationCount: "1", delay: 0.3, duration: 0.1 },
      0
    );

  const certificationsTimeline = gsap.timeline({
    scrollTrigger: {
      id: "section-certifications",
      trigger: ".certifications-section",
      start: "top 55%",
      end: "bottom 30%",
      scrub: 1.5,
      invalidateOnRefresh: true,
    },
  });
  certificationsTimeline
    .fromTo(
      ".certifications-timeline",
      { maxHeight: "0%" },
      { maxHeight: "100%", duration: 1, ease: "none" },
      0
    )
    .fromTo(
      ".certifications-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.2 },
      0
    )
    .fromTo(
      ".certifications-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.15, duration: 0.5 },
      0
    )
    .fromTo(
      ".certifications-dot",
      { animationIterationCount: "infinite" },
      { animationIterationCount: "1", delay: 0.3, duration: 0.1 },
      0
    );
}
