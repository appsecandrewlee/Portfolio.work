import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"></h1>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Andrew Lee</span>
        <span className="linkedin">Gmail</span>
        <span className="linkedin">Github</span>
        <span className="linkedin">Linkedin</span>
        <span className="linkedin">Medium</span>
      </div>
    </div>
  );
}

export default Footer;
