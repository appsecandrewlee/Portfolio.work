import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function SecondSection() {
  return (
    <Container style={{ paddingTop: "12.5vh", animation: "fadeIn 7s" }}>
      {" "}
      <Row id="about">
        <Col className="text-center">
          <h1
            style={{
              fontFamily: "Playfair Display",
              fontSize: "4.8vh",
              marginRight: "1vh",
            }}
          >
            A little bit about me
          </h1>
          <p style={{ marginTop: "2vh", fontSize: "1.8vh" }}>
            My name is Andrew and I'm a recent graduate from Monash University,
            where I double majored in Software Development and Computer Networks
            Security with a strong empthasis on Software Engineering. I also
            enjoy dabbling in machine learning and DSA. My approach to
            technology is characterized by a great understanding of development
            and security, this distinctive skillset allows me to innovate and
            problem-solve while maintaining data integrity and security in mind.
          </p>

          <p>
            <p id="aboutme" style={{ fontSize: "1.8vh" }}>
              When I am not programming or designing systems, you can find me
              running at a nearby park, as I am a long distance running
              enthusiast.
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default SecondSection;
