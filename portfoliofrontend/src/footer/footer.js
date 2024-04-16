import React, { useState } from "react";
import { Link } from "react-scroll";

function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center">
      <hr
        style={{
          width: "100%",
          borderTop: "1px solid black",
          margin: 0,
        }}
      />
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
      <hr
        style={{
          width: "100%",
          borderTop: "1px solid black",
          margin: 0,
        }}
      />
    </div>
  );
}

export default Footer;
