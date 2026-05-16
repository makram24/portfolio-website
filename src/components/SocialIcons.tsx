import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { publicUrl } from "../utils/publicUrl";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  const iconLinks = [
    { href: config.contact.github, icon: <FaGithub /> },
    { href: config.contact.linkedin, icon: <FaLinkedinIn /> },
    { href: config.contact.twitter, icon: <FaXTwitter /> },
    { href: config.contact.instagram, icon: <FaInstagram /> },
  ].filter((item) => item.href);

  return (
    <div className="icons-section">
      {iconLinks.length > 0 && (
        <div className="social-icons" data-cursor="icons" id="social">
          {iconLinks.map((item, index) => (
            <span key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </span>
          ))}
        </div>
      )}
      <a className="resume-button" href={publicUrl("/CV-Makram-Al-Moghrabi.pdf")} target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
