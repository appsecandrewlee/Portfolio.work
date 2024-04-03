import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newstyles.css";

function WhatIDoSection() {
  return (
    <div style={{ paddingTop: "13vh" }}>
      <div>
        <Container
          style={{
            paddingTop: "4vh",
            animation: "fadeIn 7s",
            paddingLeft: 0,
            marginLeft: 0,
          }}
        >
          <Row id="about" noGutters>
            <Col className="text-left extended-text">
              <h1
                className="lift-up-animation" // Add lift-up-animation class
                style={{
                  fontFamily: "Paul Signature",
                  fontSize: "10vh",
                }}
              >
                <sup style={{ fontSize: "4vh", padding: "0.5ch" }}>01</sup>{" "}
                Full-Stack Development
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>001 </sup>{" "}
                Full-Stack Development
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>001 </sup>{" "}
                Full-Stack Development {"    "}
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>001 </sup>{" "}
                Full-Stack Development
              </h1>
              <h1
                className="lift-up-animation" // Add lift-up-animation class
                style={{
                  fontFamily: "Paul Signature",
                  fontSize: "10vh",
                  marginTop: "4vh",
                }}
              >
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>02 </sup>{" "}
                Software Security
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>002 </sup>{" "}
                Software Security
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>002 </sup>{" "}
                Software Security
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>002 </sup>{" "}
                Software Security
              </h1>
              <div style={{ marginBottom: "4vh" }}></div>
              <h1
                className="lift-up-animation" // Add lift-up-animation class
                style={{
                  fontFamily: "Paul Signature",
                  fontSize: "10vh",
                  marginTop: "4vh",
                }}
              >
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>03 </sup>{" "}
                {/* Add marginRight here */}
                Games Programming
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>003 </sup>{" "}
                {/* Add marginRight here */}
                Games Programming
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>003 </sup>{" "}
                {/* Add marginRight here */}
                Games Programming
                <sup style={{ fontSize: "4vh", padding: "1ch" }}>003 </sup>{" "}
                {/* Add marginRight here */}
                Games Programming
              </h1>
              <div style={{ marginBottom: "4vh" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default WhatIDoSection;
