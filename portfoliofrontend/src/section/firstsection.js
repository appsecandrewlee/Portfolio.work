import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./section.css";
import { Link } from "react-scroll";
import "../loading/loadinganimations.css";

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
                fontSize: "8vh",
              }}
            >
              Hi, I'm Andrew!
            </h1>
          </div>
          <div className="typewriter-delayed">
            <p style={{ fontSize: "2.5vh" }}>
              Aspiring Full-Stack Software & Security Engineer 🚀
            </p>
          </div>
          <div
            style={{
              padding: "20vh",
              display: "inline-block",
            }}
          >
            <a
              style={{
                fontFamily: "Playfair Display",
                marginTop: "0.1vh",
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
