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
        <div className="engineering-info">
          {config.engineeringProjects.map((project, index) => (
            <article key={project.title} className="engineering-info-box">
              <div className="engineering-info-in">
                <div className="engineering-role">
                  <h4>{project.title}</h4>
                  <h5>{project.category}</h5>
                </div>
                <h3>0{index + 1}</h3>
              </div>
              <p>{project.description}</p>
              <div className="engineering-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringProjects;
