import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { publicUrl } from "../utils/publicUrl";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hey — I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {" "}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
            <p className="landing-role-mobile">
              {config.landing.subtitle1}
              <span className="landing-role-sep" aria-hidden>
                {" "}
                ·{" "}
              </span>
              {config.landing.subtitle2}
            </p>
          </div>
          <div className="mobile-photo">
            <img src={publicUrl("/images/mypicnbg.png")} alt={config.developer.fullName} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
