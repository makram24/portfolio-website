import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          reduceMotion: boolean;
        };

        if (!isDesktop || reduceMotion) {
          gsap.set(".work-flex", { clearProps: "transform,x" });
          return;
        }

        let translateX = 0;

        function setTranslateX() {
          const box = document.getElementsByClassName("work-box");
          if (box.length === 0) return;
          const container = document.querySelector(".work-container");
          if (!container) return;
          const rectLeft = container.getBoundingClientRect().left;
          const rect = box[0].getBoundingClientRect();
          const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
          const padding =
            parseInt(window.getComputedStyle(box[0]).padding, 10) / 2 || 0;
          translateX =
            rect.width * box.length - (rectLeft + parentWidth) + padding;
        }

        setTranslateX();

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: () => `+=${translateX}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            id: "work",
            invalidateOnRefresh: true,
            onRefresh: setTranslateX,
          },
        });

        timeline.to(".work-flex", {
          x: () => -translateX,
          ease: "none",
        });

        const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 100);

        return () => {
          window.clearTimeout(refreshId);
          timeline.kill();
          ScrollTrigger.getById("work")?.kill();
          gsap.set(".work-flex", { clearProps: "transform,x" });
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {config.homepageProjects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-outcome">{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.url}
              />
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Curious for more?</h3>
              <p>Products up front, client sites in the archive</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                Browse all works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
