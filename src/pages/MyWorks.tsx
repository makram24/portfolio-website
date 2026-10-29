import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import type { Project } from "../data/projects";
import "./MyWorks.css";

type Filter = "all" | "product" | "client";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <Link
    className="myworks-card"
    to={project.url}
    aria-label={`View ${project.title} project details`}
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
  </Link>
);

const MyWorks = () => {
  const [filter, setFilter] = useState<Filter>("all");

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
  }, []);

  const products = config.productProjects;
  const featuredClients = config.featuredClientProjects;
  const archivedClients = config.archivedClientProjects;

  const visible = useMemo(() => {
    if (filter === "product")
      return { products, featuredClients: [], archivedClients: [] };
    if (filter === "client")
      return { products: [], featuredClients, archivedClients };
    return { products, featuredClients, archivedClients };
  }, [filter, products, featuredClients, archivedClients]);

  const productOffset = 0;
  const featuredOffset = visible.products.length;
  const archiveOffset = featuredOffset + visible.featuredClients.length;

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>Products and agent tools first  open any card for full project details</p>

        <div className="myworks-filters" role="tablist" aria-label="Filter works">
          {(
            [
              ["all", "All"],
              ["product", "Product"],
              ["client", "Client"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={filter === value}
              className={`myworks-filter${filter === value ? " is-active" : ""}`}
              onClick={() => setFilter(value)}
              data-cursor="disable"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {visible.products.length > 0 && (
        <section className="myworks-section">
          <div className="myworks-section-head">
            <h2>Featured products</h2>
            <p>Ship-ready builds, agent skills, and public engineering work</p>
          </div>
          <div className="myworks-grid">
            {visible.products.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={productOffset + index}
              />
            ))}
          </div>
        </section>
      )}

      {visible.featuredClients.length > 0 && (
        <section className="myworks-section">
          <div className="myworks-section-head">
            <h2>Selected client work</h2>
            <p>Agency sites with stronger visuals and brand presence</p>
          </div>
          <div className="myworks-grid">
            {visible.featuredClients.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredOffset + index}
              />
            ))}
          </div>
        </section>
      )}

      {visible.archivedClients.length > 0 && (
        <section className="myworks-section myworks-section-archive">
          <div className="myworks-section-head">
            <h2>Client archive</h2>
            <p>Additional brand websites delivered for clients</p>
          </div>
          <div className="myworks-grid myworks-grid-compact">
            {visible.archivedClients.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={archiveOffset + index}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MyWorks;
