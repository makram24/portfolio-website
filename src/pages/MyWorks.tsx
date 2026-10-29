import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>
          A friendly mix of agent skills, products, and client websites
        </p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <a
            className="myworks-card"
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project (opens in a new tab)`}
            data-cursor="disable"
          >
            <div className="myworks-card-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="myworks-card-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
