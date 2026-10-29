import "./styles/Certifications.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  const yearMatch = period.match(/\d{4}/);
  return yearMatch?.[0] ?? "";
};

const Certifications = () => {
  return (
    <section
      className="certifications-section section-container"
      id="certifications"
    >
      <div className="certifications-container">
        <header className="certifications-header">
          <h2>
            My <span>certifications</span>
          </h2>
          <p className="certifications-lead">
            Credentials and programs that back up the work.
          </p>
        </header>

        <div className="certifications-info">
          <div className="certifications-timeline" aria-hidden="true">
            <div className="certifications-dot" />
          </div>

          {config.certifications.map((cert) => (
            <article
              key={`${cert.name}-${cert.issuer}`}
              className="certifications-info-box"
            >
              <span className="certifications-year">
                {getDisplayYear(cert.period)}
              </span>
              <div className="certifications-body">
                <h3>{cert.name}</h3>
                <p className="certifications-issuer">{cert.issuer}</p>
                <p className="certifications-meta">{cert.period}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
