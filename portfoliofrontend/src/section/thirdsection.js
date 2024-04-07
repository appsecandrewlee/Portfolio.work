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
              height: "25vh",
              margin: "2vh auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "2vh",
            }}
          >
            <p
              style={{
                fontSize: "2.5vh",
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
                marginBottom: "2.5vh",
              }}
            >
              {" "}
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/computer.png"}
                  alt="computer"
                  style={{ width: "58px", height: "50px" }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                  }}
                >
                  Techie
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/ai.png"}
                  alt="AI"
                  style={{ width: "65px", height: "50px", marginLeft: "-55px" }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    marginLeft: "-55px",
                    marginTop: "20px",
                  }}
                >
                  ML Enthusiast
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={process.env.PUBLIC_URL + "/running.png"}
                  alt="Running"
                  style={{ width: "62px", height: "50px", marginLeft: "-55px" }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    marginLeft: "-55px",
                    marginTop: "20px",
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
