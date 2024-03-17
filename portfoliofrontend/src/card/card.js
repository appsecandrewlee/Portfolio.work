import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src="webs.png" />
      <Card.Body>
        <Card.Title>Monash Paramedicine e-learning Platform</Card.Title>
        <Card.Text>
          Developed a web application for Monash Paramedicine
        </Card.Text>
        <Button variant="primary">Click here to view more!</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
