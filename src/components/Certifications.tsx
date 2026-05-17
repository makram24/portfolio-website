import "./styles/Certifications.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  const normalized = period.replace(/–/g, "-");
  const yearMatch = normalized.match(/\d{4}/);
  if (yearMatch) return yearMatch[0];
  if (normalized.includes(" - ")) {
    return normalized.split(" - ")[0].trim();
  }
  return period;
};

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          My certifications <span>and</span>
          <br /> credentials
        </h2>
        <div className="certifications-info">
          <div className="certifications-timeline">
            <div className="certifications-dot" />
          </div>
          {config.certifications.map((cert, index) => (
            <div key={index} className="certifications-info-box">
              <div className="certifications-info-in">
                <div className="certifications-role">
                  <h4>{cert.name}</h4>
                  <h5>{cert.issuer}</h5>
                </div>
                <h3>{getDisplayYear(cert.period)}</h3>
              </div>
              <p>
                {cert.issuer} · {cert.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
