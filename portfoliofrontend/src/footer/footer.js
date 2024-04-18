import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./footer.css";

function Footer() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleMouseEnter = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
      setTimeout(() => {
        setAnimationStarted(false);
      }, 3500); 
    }
  };

  return (
    <div className="text-center" style={{ marginTop: "2vh" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/rocket.png"}
              alt="Rocket Logo"
              className={`rocket-logo ${animationStarted ? "rocket-fly" : ""}`}
              onMouseEnter={handleMouseEnter}
            />
          </div>
        </Link>
      </div>
      <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
        <p className="footer-text">
          {animationStarted ? "Click Here" : "© 2024 Andrew Lee"}
        </p>
      </Link>
    </div>
  );
}

export default Footer;
