import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import "./section.css"; // Import CSS file for styles
import "../loading/loadinganimations.css"; // Import CSS file for loading animations

function FirstSection() {
  return (
    <Container className="mt-5" style={{ paddingTop: "25vh" }}>
      <Row>
        <Col className="text-center">
          <div className="typewriter">
            <h1
              style={{
                fontFamily: "Playfair Display",
                marginBottom: "1vh",
                fontSize: "max(6vh, 4vw)",
              }}
            >
              Hi, I'm Andrew!
            </h1>
          </div>
          <div className="typewriter-delayed">
            <p style={{ fontSize: "max(2vh, 1.5vw)" }}>
              {" "}
              Aspiring Full-Stack Software & Security Engineer 🚀
            </p>
          </div>
          <div style={{ paddingTop: "22vh", display: "inline-block" }}>
            {" "}
            <a
              style={{
                fontFamily: "Playfair Display",
                marginTop: "0.5vh",
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                marginRight: "1.5vh",
              }}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src="/down_arrow.png"
                  alt="Down arrow"
                  style={{
                    animation: "slideDown 1.5s infinite",
                    marginBottom: "22vh",
                  }}
                />
              </Link>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstSection;
