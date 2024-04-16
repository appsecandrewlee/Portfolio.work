import React, { useState } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center">
      <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
        <p
          style={{
            color: "black",
            textDecoration: "none",
            margin: 0,
            fontSize: "5vh",
            fontFamily: "Paul Signature",
            cursor: "pointer",
          }}
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
