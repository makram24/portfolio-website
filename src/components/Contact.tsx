import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "Github", href: config.contact.github },
  { label: "Portfolio", href: config.contact.portfolio },
  { label: "Linkedin", href: config.contact.linkedin },
  { label: "Twitter", href: config.contact.twitter },
  { label: "Facebook", href: config.contact.facebook },
  { label: "Instagram", href: config.contact.instagram },
].filter((link) => link.href);

const Contact = () => {
  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 92%",
        end: "bottom center",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
      },
    });

    contactTimeline.fromTo(
      ".contact-section h3",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
      }
    );

    contactTimeline.fromTo(
      ".contact-box",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
      },
      "-=0.4"
    );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={config.contact.phoneHref} data-cursor="disable">
                {config.contact.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
            <p>
              <span>{config.social.address}</span>
            </p>
          </div>
          {socialLinks.length > 0 && (
            <div className="contact-box">
              <h4>Social</h4>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  {link.label} <MdArrowOutward />
                </a>
              ))}
            </div>
          )}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
