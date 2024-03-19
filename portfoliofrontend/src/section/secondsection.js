import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function SecondSection() {
  return (
    <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
      {" "}
      <Row>
        <Col className="text-center">
          <h1 style={{ fontFamily: "Playfair Display" }}>
            A little bit about me
          </h1>
          <p>
            My name is Andrew and I'm a recent graduate from Monash University,
            where I double majored in Software Development and Computer Networks
            Security, where I also grew a strong interest in Machine learning,
            Algorithmic theory and Application development. My approach to
            technology is characterized by a great understanding of development
            and security, this distinctive skillset allows me to innovate and
            problem-solve while maintaining data integrity and security in mind.
          </p>

          <p>
            <p id="aboutme">
              When I am not coding or designing systems, you can find me running
              at a nearby park, as I am a long distance running enthusiast.
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default SecondSection;
