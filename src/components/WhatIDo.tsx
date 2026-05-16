import "./styles/WhatIDo.css";
import { config } from "../config";

const skillKeys = ["develop", "iot", "security"] as const;

const WhatIDo = () => {
  return (
    <section className="whatIDO section-container" id="what-i-do">
      <div className="what-inner">
        <header className="what-header">
          <h2 className="what-title">
            What <span>I do</span>
          </h2>
          <p className="what-lead">
            Full-stack engineering, IoT pipelines, and secure infrastructure — the
            areas I focus on day to day.
          </p>
        </header>

        <div className="what-box-in">
          {skillKeys.map((key, index) => {
            const skill = config.skills[key];
            return (
              <article key={key} className="what-card">
                <span className="what-card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <div className="what-card-head">
                  <h3>{skill.title}</h3>
                  <p className="what-card-tag">{skill.description}</p>
                </div>
                <p className="what-card-details">{skill.details}</p>
                <div className="what-card-tools">
                  <span className="what-card-tools-label">Skillset & tools</span>
                  <div className="what-card-tags">
                    {skill.tools.map((tool) => (
                      <span key={tool} className="what-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
