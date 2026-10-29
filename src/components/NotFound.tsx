import { Link } from "react-router-dom";
import "../pages/MyWorks.css";

const NotFound = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Page <span>not found</span>
        </h1>
        <p>That URL is not part of this portfolio.</p>
      </div>
    </div>
  );
};

export default NotFound;
