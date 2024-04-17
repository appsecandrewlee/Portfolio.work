import React, { useState } from "react";
import { Link } from "react-scroll";
import "./footer.css";
function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center">
      <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
        <p
          className="footer-text" // Added a class name for easier styling
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "Click Here" : "© 2024 Andrew Lee"}
        </p>
      </Link>
    </div>
  );
}

export default Footer;
