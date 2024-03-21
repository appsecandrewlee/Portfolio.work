import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./section.css";

function FifthSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/CMS_showcase.png", "/computer.png", "/ai.png"];

  function toggle() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <div className="d-flex justify-content-end">
      <Card
        className="card"
        onClick={toggle}
        style={{
          width: "70vh",
          height: "36.5vh",

          borderRadius: "15px",
          marginTop: "200px",
          marginBottom: "250px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          className="card-image"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "100% 100%",
            borderRadius: "10px",
          }}
        />
      </Card>
    </div>
  );
}

export default FifthSection;
