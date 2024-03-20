import React, { useState } from "react";
import "./newsection.css";
import "./section.css";

function FifthSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/CMS_showcase.png", "/computer.png", "/ai.png"]; // replace these with the actual paths to your images

  function toggle() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  return (
    <div className="d-flex justify-content-end">
      <div className="d-flex align-items-start">
        <div style={{ marginRight: "20px" }}> {}</div>
        <div className="d-flex flex-column align-items-end">
          <div
            id={`flipcard`}
            className="card-image flip-container"
            onClick={toggle}
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "10px",
              marginTop: "500px",
              marginBottom: "400px",
              zIndex: 3,
              position: "absolute",
              left: "146vh",
            }}
          >
            <div className="flipper">
              <div className="front">
                <div
                  className="card-image"
                  style={{
                    width: "500px",
                    height: "400px",
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "100% 100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="back">
                <div
                  className="card-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "100% 100%",
                    borderRadius: "10px",
                  }}
                >
                  <p>Sample text here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
