import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SixthSection() {
  return (
    <Container style={{ paddingTop: "0.5rem", animation: "fadeIn 2s" }}>
      <Row className="text-center">
        <Col xs={12} md={6}>
          <h1
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2.1vh",
              marginLeft: "5vh",
            }}
          >
            Technologies that I've used<br></br>{" "}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2vh",
              marginLeft: "2vh",
            }}
          >
            <img
              src="/cassandra.svg"
              alt="Monash Logo"
              style={{ height: "8vh", width: "auto", marginRight: "5rem" }}
            />
            <img
              src="/firebase.svg"
              alt="Firebase Logo"
              style={{ height: "8vh", width: "auto", marginLeft: "5rem" }}
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2.7vh",
              marginLeft: "5vh",
            }}
          >
            Experience
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5vh",
              marginLeft: "0.5vh",
            }}
          >
            <a
              href="https://www.monash.edu/medicine/spahc/paramedicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/University.png"
                alt="Monash University Logo"
                style={{ height: "9vh", width: "auto", marginLeft: "3rem" }} // Adjusted size and margin of the logo
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SixthSection;
