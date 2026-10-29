import { useState } from "react";
import { config } from "../config";
import "./styles/AgentSkills.css";

const AgentSkills = () => {
  const [showPending, setShowPending] = useState(false);
  const live = config.liveAgentSkills;
  const pending = config.agentSkills.filter((s) => s.status === "pending");
  const visible = showPending ? config.agentSkills : live;

  return (
    <section className="agent-skills-section section-container" id="skills">
      <div className="agent-skills-inner">
        <header className="agent-skills-header">
          <h2>
            Agent <span>Skills</span>
          </h2>
          <p>
            Little helpers for your AI — CI/CD fixes, CRM bridges, and safe
            operators. One-time buys on Agensi, SkillHQ, and BuySkills.
          </p>
          <a
            className="agent-skills-storefront"
            href={config.agentSkillsStorefront}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            Browse my Agensi shop →
          </a>
        </header>

        <div className="agent-skills-grid">
          {visible.map((skill) => {
            const primaryUrl =
              skill.agensiUrl ?? skill.skillHqUrl ?? skill.buySkillsUrl;
            return (
              <article key={skill.id} className="agent-skill-card">
                <div className="agent-skill-meta">
                  <span
                    className={`agent-skill-status agent-skill-status--${skill.status}`}
                  >
                    {skill.status === "live" ? "Live" : "Pending"}
                  </span>
                  <span className="agent-skill-price">${skill.price}</span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="agent-skill-links">
                  <a
                    href={primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    Open listing
                  </a>
                  {skill.agensiUrl && (
                    <a
                      href={skill.skillHqUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      SkillHQ
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {pending.length > 0 && (
          <div className="agent-skills-toggle-wrap">
            <button
              type="button"
              className="agent-skills-toggle"
              onClick={() => setShowPending((v) => !v)}
              data-cursor="disable"
            >
              {showPending
                ? "Show live ones only"
                : `See ${pending.length} more on the way`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentSkills;
