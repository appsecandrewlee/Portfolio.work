import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function WhatIDoSection() {
  const [showImage, setShowImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ paddingTop: "0vh", overflowX: "hidden" }}>
      <Container
        style={{
          paddingTop: "4vh",
          animation: "fadeIn 7s",
          marginLeft: "-100vw",
        }}
      >
        <Row id="about" noGutters>
          <Col className="text-left extended-text">
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair  Display",
                fontSize: "clamp(4vh, 7vw, 4.8vh)",
                lineHeight: "0.7",
                width: "200vw",
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
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                001
              </sup>{" "}
              <span>Continuous Development</span>
            </h1>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "clamp(4vh, 7vw, 10vh)",
                lineHeight: "0.7",

                marginTop: "4vh",
              }}
              onMouseEnter={() =>
                setShowImage(process.env.PUBLIC_URL + "/servers.jpg")
              }
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowImage(null)}
            >
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                02
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup
                style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "0.5ch" }}
              >
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                0 02
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                002
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Team Player
              </span>
            </h1>
            <div style={{ marginBottom: "4vh" }}></div>
            <h1
              className="lift-up-animation"
              style={{
                fontFamily: "Playfair Display",
                fontSize: "clamp(6vh, 7vw, 10vh)",
                lineHeight: "0.7",

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
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
              <sup style={{ fontSize: "clamp(2vh, 3vw, 4vh)", padding: "1ch" }}>
                003
              </sup>{" "}
              <span style={{ fontSize: "clamp(3vh, 4vw, 5vh)" }}>
                Always Curious
              </span>
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
