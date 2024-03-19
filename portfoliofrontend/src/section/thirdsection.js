import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ThirdSection() {
  return (
    <Container style={{ animation: "fadeIn 2s" }}>
      <Row>
        <Col className="text-left">
          <div
            style={{
              backgroundColor: "#ECECEC",
              width: "550px",
              height: "200px",
              margin: "10px auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            {
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "Playfair Display",
                }}
              >
                TL:DR? That's okay!
              </p>
            }
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingLeft: "50px",
                paddingRight: "50px",
                marginTop: "auto",
                marginBottom: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src="/computer.png"
                  alt="Computer"
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
                  src="/ai.png"
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
                  src="/running.png"
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
