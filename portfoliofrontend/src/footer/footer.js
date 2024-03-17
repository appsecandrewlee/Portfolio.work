import React from "react";
import "./footer.css"; // make sure to create this file

function Footer() {
  return (
    <div className="footer" style={{ color: "black" }}>
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Andrew</span>Lee
          </h1>
          <p>
            Andrew Lee is a software engineer specializing in web development.
            He loves coding, teaching, and writing about technology.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li>
              <a href="#" style={{ color: "black" }}>
                Experience
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "black" }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "black" }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">© 2024 Andrew Lee</div>
    </div>
  );
}

export default Footer;
