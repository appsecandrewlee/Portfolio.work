import React, { useState } from "react";
import { Link } from "react-scroll";
import "./footer.css";

function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center" style={{ marginTop: "2vh" }}>
      <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/rocket.png"}
            alt="Rocket Logo"
            className="rocket-logo"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </Link>
      <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
        <p className="footer-text">
          {hovered ? "Click Here" : "© 2024 Andrew Lee"}
        </p>
      </Link>
    </div>
  );
}

export default Footer;


