import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import NotFound from "../components/NotFound";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.classList.add("page-scrollable");
    body.classList.add("page-scrollable");
    html.style.overflow = "auto";
    body.style.overflow = "auto";
    window.scrollTo(0, 0);

    return () => {
      html.classList.remove("page-scrollable");
      body.classList.remove("page-scrollable");
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [slug]);

  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  const gallery = project.gallery.length ? project.gallery : [project.image];
  const hero = gallery[activeImage] ?? project.image;

  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <Link to="/myworks" className="back-button" data-cursor="disable">
          ← All works
        </Link>
        <p className="project-detail-kind">
          {project.kind === "product" ? "Product" : "Client work"}
        </p>
        <h1>
          {project.title}
        </h1>
        <p className="project-detail-lead">{project.description}</p>
      </div>

      <div className="project-detail-hero">
        <img src={hero} alt={`${project.title} screenshot`} />
      </div>

      {gallery.length > 1 && (
        <div className="project-detail-thumbs" role="list">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`project-detail-thumb${
                index === activeImage ? " is-active" : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}`}
              data-cursor="disable"
            >
              <img
                src={src}
                alt={`${project.title} gallery image ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}

      <div className="project-detail-body">
        <div className="project-detail-main">
          <h2>About the project</h2>
          <p>{project.details}</p>

          {project.highlights.length > 0 && (
            <>
              <h3>Highlights</h3>
              <ul className="project-detail-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="project-detail-aside">
          <div className="project-detail-meta">
            <div>
              <h4>Category</h4>
              <p>{project.category}</p>
            </div>
            <div>
              <h4>Tools & stack</h4>
              <p>{project.technologies}</p>
            </div>
          </div>

          <div className="project-detail-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-cta"
                data-cursor="disable"
              >
                Open live project →
              </a>
            )}
            <Link
              to="/myworks"
              className="project-detail-secondary"
              data-cursor="disable"
            >
              Back to all works
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetail;
