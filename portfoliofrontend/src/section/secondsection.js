import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function SecondSection() {
  return (
    <Container style={{ paddingTop: "1rem" }}>
      {" "}
      <Row>
        <Col className="text-center">
          <h1 style={{ fontFamily: "Playfair Display" }}>
            A little bit about me
          </h1>
          <p>
            My name is Andrew and I'm a recent graduate from Monash University,
            where I double majored in Software Development and Computer Software
            Security, where I also grew a strong interest in Machine learning,
            Algorithmic theory and Application development.
          </p>

          <p>
            <p id="aboutme">
              Leveraging my specialized knowledge in both Software Development
              and Security, my approach is characterized a great understanding
              of development and security,This distinctive skill set allows me
              to innovate and problem-solve while maintaining data integrity of
              private companies and operating systems.
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default SecondSection;
