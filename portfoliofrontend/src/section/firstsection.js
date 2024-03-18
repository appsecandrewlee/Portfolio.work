import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./section.css";
function FirstSection() {
  return (
    <Container className="mt-5" style={{ paddingTop: "10rem" }}>
      <Row>
        <Col className="text-center">
          <div className="typewriter">
            <h1
              style={{ fontFamily: "Playfair Display", marginBottom: "1rem" }}
            >
              Hi, I'm Andrew!
            </h1>
          </div>
          <div className="typewriter-delayed">
            <p>Full-Stack Software & Security Developer 🚀</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstSection;
