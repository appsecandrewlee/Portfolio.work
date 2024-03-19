import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function FourthSection() {
  return (
    <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
      {" "}
      <Row>
        <Col className="text-center"></Col>
        <h1
          style={{
            fontFamily: "Playfair Display",
            paddingTop: "100px",
          }}
        ></h1>
        <p>hello</p>
      </Row>
    </Container>
  );
}
export default FourthSection;
