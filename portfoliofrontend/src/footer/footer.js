import React from "react";
import "./footer.css"; // make sure to create this file

function Footer() {
  return (
    <div className="footer" style={{ color: "black" }}>
      <div className="footer-content">
        <div className="footer-section about">
          <h1
            className="logo-text"
            style={{ fontFamily: "Playfair Display" }}
          ></h1>
        </div>
      </div>
      <div className="footer-bottom" style={{ fontFamily: "Playfair Display" }}>
        © 2024 Andrew Lee
      </div>
    </div>
  );
}

export default Footer;
