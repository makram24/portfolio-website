import { useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import AgentSkillCard from "../components/AgentSkillCard";
import "../components/styles/AgentSkills.css";
import "./Shop.css";

const Shop = () => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.classList.add("page-scrollable");
    body.classList.add("page-scrollable");
    html.style.overflow = "auto";
    body.style.overflow = "auto";
    window.scrollTo(0, 0);

    return () => {
      html.classList.remove("page-scrollable");
      body.classList.remove("page-scrollable");
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Agent <span>Skills</span> Shop
        </h1>
        <p>
          All {config.agentSkills.length} live skills  one-time buys on Agensi,
          SkillHQ, and BuySkills.
        </p>
        <a
          className="shop-agensi-link"
          href={config.agentSkillsStorefront}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          Open Agensi storefront →
        </a>
      </div>

      <div className="shop-grid">
        {config.agentSkills.map((skill) => (
          <AgentSkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
