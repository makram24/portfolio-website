import { config } from "../config";
import "./styles/Highlights.css";

const Highlights = () => {
  return (
    <section className="highlights-section section-container" id="highlights">
      <div className="highlights-grid">
        {config.highlights.map((item) => (
          <div className="highlight-card" key={item.label}>
            <span className="highlight-value">{item.value}</span>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
