import { Link } from "react-router-dom";
import { config } from "../config";
import AgentSkillCard from "./AgentSkillCard";
import "./styles/AgentSkills.css";

const AgentSkills = () => {
  return (
    <section className="agent-skills-section section-container" id="skills">
      <div className="agent-skills-inner">
        <header className="agent-skills-header">
          <h2>
            Agent <span>Skills</span>
          </h2>
          <p>
            Little helpers for your AI  CI/CD fixes, CRM bridges, and safe
            operators. Here are four favorites from the shop.
          </p>
        </header>

        <div className="agent-skills-grid">
          {config.featuredAgentSkills.map((skill) => (
            <AgentSkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div className="agent-skills-cta">
          <Link to="/shop" className="agent-skills-shop-btn" data-cursor="disable">
            Visit the skills shop →
          </Link>
          <a
            className="agent-skills-storefront"
            href={config.agentSkillsStorefront}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            Or browse on Agensi
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgentSkills;
