import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../../utils/loadingProgress";
import {
  killCharScrollSetup,
  setCharTimeline,
  setAllTimeline,
} from "../utils/GsapScroll";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const canvas = canvasDiv.current;
    if (!canvas) return;

    let disposed = false;
    let rafId = 0;
    let mixer: THREE.AnimationMixer | undefined;
    let headBone: THREE.Object3D | null = null;
    let screenLight: THREE.Object3D | null = null;
    let character: THREE.Object3D | null = null;
    let debounce: ReturnType<typeof setTimeout> | undefined;

    const scene = new THREE.Scene();
    const rect = canvas.getBoundingClientRect();
    const container = { width: rect.width, height: rect.height };
    const aspect = container.width / container.height;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.width, container.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvas.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    const clock = new THREE.Clock();
    const light = setLighting(scene);
    const progress = setProgress((value) => setLoading(value));
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    const onResize = () => {
      if (!disposed && character) {
        handleResize(renderer, camera, canvasDiv, character);
      }
    };

    const finishLoading = () => {
      progress.loaded().then(() => {
        if (disposed) return;
        setTimeout(() => {
          if (disposed) return;
          light.turnOnLights();
        }, 2500);
      });
    };

    loadCharacter().then((gltf) => {
      if (disposed) return;

      if (!gltf) {
        console.error(
          "[character] Model missing. Upload dist/models/ (character.glb, character.enc, char_enviorment.hdr) and dist/draco/ to your server."
        );
        finishLoading();
        return;
      }

      document.body.classList.add("character-loaded");

      const animations = setAnimations(gltf);
      if (hoverDivRef.current) {
        animations.hover(gltf, hoverDivRef.current);
      }
      mixer = animations.mixer;
      const loadedCharacter = gltf.scene;
      character = loadedCharacter;

      if (loadedCharacter.parent) {
        loadedCharacter.parent.remove(loadedCharacter);
      }
      scene.add(loadedCharacter);

      headBone = loadedCharacter.getObjectByName("spine006") || null;
      screenLight = loadedCharacter.getObjectByName("screenlight") || null;

      setCharTimeline(loadedCharacter, camera);
      setAllTimeline();

      progress.loaded().then(() => {
        if (disposed) return;
        setTimeout(() => {
          if (disposed) return;
          light.turnOnLights();
          animations.startIntro();
        }, 2500);
      });

      window.addEventListener("resize", onResize);
    }).catch((error) => {
      console.error("[character] Unexpected load error:", error);
      if (!disposed) finishLoading();
    });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => {
        mouse = { x, y };
      });
    };

    const onTouchStart = (event: TouchEvent) => {
      const element = event.target as HTMLElement;
      debounce = setTimeout(() => {
        element?.addEventListener("touchmove", (e: TouchEvent) =>
          handleTouchMove(e, (x, y) => {
            mouse = { x, y };
          })
        );
      }, 200);
    };

    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    const animate = () => {
      if (disposed) return;
      rafId = requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      progress.clear();
      cancelAnimationFrame(rafId);
      clearTimeout(debounce);
      killCharScrollSetup();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
      scene.clear();
      renderer.dispose();
      if (canvas.contains(renderer.domElement)) {
        canvas.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim" />
          <div className="character-hover" ref={hoverDivRef} />
        </div>
      </div>
    </>
  );
};

export default Scene;
