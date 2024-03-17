import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Cards() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Container>
        <Col md={6} lg={4}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="webs.png" />
            <Card.Body>
              <Card.Title>Monash Paramedicine e-learning Platform</Card.Title>
              <Card.Text>
                Developed a web application for Monash Paramedicine
              </Card.Text>
              <Button variant="primary">Click here to view more!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default Cards;
