import "./styles/EngineeringProjects.css";
import { config } from "../config";

const EngineeringProjects = () => {
  return (
    <section
      className="engineering-section section-container"
      id="engineering"
    >
      <div className="engineering-container">
        <h2>
          Things I&apos;ve <span>built</span>
          <br /> &amp; shipped
        </h2>
        <p className="engineering-lead">
          Selected repos from{" "}
          <a
            href="https://github.com/makram24"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            github.com/makram24
          </a>
        </p>
        <div className="engineering-info">
          {config.engineeringProjects.map((project, index) => (
            <article key={project.title} className="engineering-info-box">
              <div className="engineering-info-in">
                <div className="engineering-role">
                  <h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      {project.title}
                    </a>
                  </h4>
                  <h5>{project.category}</h5>
                </div>
                <h3>{String(index + 1).padStart(2, "0")}</h3>
              </div>
              <p>{project.description}</p>
              <div className="engineering-meta">
                <div className="engineering-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className="engineering-github"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringProjects;
