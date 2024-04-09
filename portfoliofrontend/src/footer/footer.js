import React from "react";

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        borderTop: "1px solid black",
        padding: "1em",
      }}
    >
      <p>© 2024 Andrew Lee</p>
      <a
        href="mailto:appsec.andrewlee@gmail.com"
        style={{ color: "black", textDecoration: "none", marginRight: "1em" }}
      >
        Gmail
      </a>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none", marginRight: "1em" }}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/your-username/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none", marginRight: "1em" }}
      >
        LinkedIn
      </a>
      <a
        href="https://medium.com/@your-username"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none" }}
      >
        Medium
      </a>
    </div>
  );
}

export default Footer;
