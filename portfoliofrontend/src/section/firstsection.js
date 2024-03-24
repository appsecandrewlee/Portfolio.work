import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./section.css";
import { Link } from "react-scroll";
import "../loading/loadinganimations.css";

function FirstSection() {
  return (
    <Container className="mt-5" style={{ paddingTop: "8vh" }}>
      <Row>
        <Col className="text-center">
          <div className="typewriter">
            <h1
              style={{
                fontFamily: "Playfair Display",
                marginBottom: "1vh",
                fontSize: "6vh",
              }}
            >
              Hi, I'm Andrew!
            </h1>
          </div>
          <div className="typewriter-delayed">
            <p style={{ fontSize: "1.9vh" }}>
              Aspiring Full-Stack Software & Security Engineer 🚀
            </p>
          </div>
          <div
            style={{
              padding: "200px",
              display: "inline-block",
            }}
          >
            <a
              href="#aboutme"
              style={{
                fontFamily: "Playfair Display",
                marginBottom: "0.1rem",
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Link
                activeClass="active"
                to="aboutme"
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
