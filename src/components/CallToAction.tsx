import { Link } from "react-router-dom";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-title">Want to hang out in my pixel room?</h2>
        <p className="cta-lead">
          Or just drop me a note — I&apos;m easy to reach and happy to talk
          projects, roles, or ideas.
        </p>
        <div className="cta-buttons">
          <Link
            to="/play"
            className="cta-btn cta-btn-play"
            data-cursor="disable"
          >
            Explore the room →
          </Link>

          <a
            href={`mailto:${config.contact.email}`}
            className="cta-btn cta-btn-hire"
            data-cursor="disable"
          >
            Say hello →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
