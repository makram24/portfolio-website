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
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My education <span>and</span>
          <br /> background
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot" />
          </div>
          {config.education.map((item, index) => (
            <div key={index} className="education-info-box">
              <div className="education-info-in">
                <div className="education-role">
                  <h4>{item.degree}</h4>
                  <h5>{item.school}</h5>
                </div>
                <h3>{getDisplayYear(item.period)}</h3>
              </div>
              <p>
                {item.detail} · {item.location} · {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
