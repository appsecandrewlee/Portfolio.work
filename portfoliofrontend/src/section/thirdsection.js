import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ThirdSection() {
  return (
    <Container style={{ animation: "fadeIn 2s" }}>
      <Row>
        <Col className="text-center">
          <div
            style={{
              backgroundColor: "#ECECEC",
              width: "75%",
              height: "20vh",
              margin: "2vh auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "1vh",
            }}
          >
            <p
              style={{
                marginTop: "1vh",
                fontSize: "2vh",
                fontFamily: "Playfair Display",
              }}
            >
              TL:DR? That's okay!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: "auto",
                marginBottom: "1.5vh",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/computer.png"}
                  alt="computer"
                  style={{ width: "8vh", height: "7vh" }}
                />
                <p
                  style={{
                    fontSize: "1.8vh",
                    marginTop: "1vh",
                  }}
                >
                  Techie
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/ai.png"}
                  alt="AI"
                  style={{ width: "9.5vh", height: "7vh", marginLeft: "-8vh" }}
                />
                <p
                  style={{
                    fontSize: "1.8vh",
                    marginLeft: "-8vh",
                    marginTop: "1vh",
                  }}
                >
                  ML Enthusiast
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/running.png"}
                  alt="Running"
                  style={{ width: "8.5vh", height: "7vh", marginLeft: "-8vh" }}
                />
                <p
                  style={{
                    fontSize: "1.8vh",
                    marginLeft: "-8vh",
                    marginTop: "1vh",
                  }}
                >
                  Runner
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdSection;
