import "./styles/Education.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  const normalized = period.replace(/–/g, "-");
  if (normalized.includes(" - ")) {
    return normalized.split(" - ")[0].trim();
  }
  return period;
};

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      <div className="education-container">
        <header className="education-header">
          <h2>
            How I got <span>here</span>
          </h2>
          <p className="education-lead">
            Schools, degrees, and the path that got me building software.
          </p>
        </header>

        <div className="education-info">
          <div className="education-timeline" aria-hidden="true">
            <div className="education-dot" />
          </div>

          {config.education.map((item) => (
            <article
              key={`${item.school}-${item.period}`}
              className="education-info-box"
            >
              <span className="education-year">
                {getDisplayYear(item.period)}
              </span>
              <div className="education-body">
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                <p className="education-meta">
                  {item.period}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="education-description">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
