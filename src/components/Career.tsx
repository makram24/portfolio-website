import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  const normalized = period.replace(/–/g, "-");
  if (normalized.includes(" - ")) {
    const [start] = normalized.split(" - ").map((p) => p.trim());
    return start;
  }
  return period;
};

const Career = () => {
  return (
    <section className="career-section section-container" id="career">
      <div className="career-container">
        <header className="career-header">
          <h2>
            Where I&apos;ve <span>been</span>
          </h2>
          <p className="career-lead">
            Roles, teams, and what I picked up along the way.
          </p>
        </header>

        <div className="career-info">
          <div className="career-timeline" aria-hidden="true">
            <div className="career-dot" />
          </div>

          {config.experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="career-info-box"
            >
              <span className="career-year">{getDisplayYear(exp.period)}</span>
              <div className="career-body">
                <h3>{exp.position}</h3>
                <p className="career-company">{exp.company}</p>
                <p className="career-meta">
                  {exp.period}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
                <p className="career-description">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
