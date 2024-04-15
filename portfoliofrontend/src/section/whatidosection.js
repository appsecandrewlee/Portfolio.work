import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newstyles.css";

function WhatIDoSection() {
  const [showImage, setShowImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ paddingTop: "13vh" }}>
      <h1 className="text-center" style={{ fontFamily: "Playfair Display" }}>
        Professional Values
      </h1>
      <p
        className="text-center"
        style={{ fontFamily: "Playfair Display", fontSize: "1.8vh" }}
      >
        Some values that I abide by
      </p>

      <Container
        style={{
          paddingTop: "4vh",
          animation: "fadeIn 7s",
          paddingLeft: 0,
          marginLeft: 0,
          marginRight: 0,
          paddingRight: 0,
        }}
      >
        <Row id="about" noGutters>
          <Col className="text-left extended-text">
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Paul Signature",
                fontSize: "clamp(6vh, 7vw, 10vh)",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/Desktop.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                01
              </sup>{" "}
              Continuous Development
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              Continuous Development
            </h1>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Paul Signature",
                fontSize: "clamp(6vh, 7vw, 10vh)",
                marginTop: "4vh",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/servers.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                02
              </sup>{" "}
              Team Player
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              Team Player
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                0 02
              </sup>{" "}
              Team Player
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              Team Player
            </h1>
            <div style={{ marginBottom: "4vh" }}></div>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Paul Signature",
                fontSize: "clamp(6vh, 7vw, 10vh)",
                marginTop: "4vh",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/curious.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                03
              </sup>{" "}
              Always Curious
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              Always Curious
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              Always Curious
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              Always Curious
            </h1>
            <div style={{ marginBottom: "4vh" }}></div>
          </Col>
        </Row>
      </Container>
      {showImage && (
        <img
          className="hover-image"
          src={showImage}
          alt="Hover"
          style={{
            position: "fixed",
            top: position.y,
            left: position.x + 400,
            transform: "translate(-50%, -50%) rotate(-15deg)",
            pointerEvents: "none",
            transition: "all 0.3s ease-out",
          }}
        />
      )}
    </div>
  );
}

export default WhatIDoSection;
