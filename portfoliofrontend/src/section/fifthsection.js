import React from "react";
import { Card } from "react-bootstrap";
import "./section.css";
import "./carousel.css";

function FifthSection() {
  const images = [
    "/medium.png",
    "/IOS.jpg",
    "/improvement.jpg",
    "/Kali.png",
    "/OracleVM.png",
    "/stack.jpg",
    "/code.jpeg",
    "/pragmatic.jpeg",
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <Card key={index} className="card">
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FifthSection;
