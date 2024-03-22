import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function SeventhSection() {
  return (
    <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
      {" "}
      <Row>
        <Col className="text-center">
          <h1 style={{ fontFamily: "Playfair Display" }}>Get in touch</h1>
          <p>
            <p id="contact">
              let me know if you want to chat with me or discuss opportunities!
              <br></br>
              I'm always down to learn and grow with likeminded people!
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default SeventhSection;
