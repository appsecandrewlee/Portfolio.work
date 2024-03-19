import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function FourthSection() {
  const projects = [
    "Dynamic-CMS",
    "Sentiment-Analysis",
    "Penetration-Testing",
    "Microservices",
  ];
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) => {
        const currentIndex = projects.indexOf(prevProject);
        const nextIndex = (currentIndex + 1) % projects.length;
        setKey(nextIndex);
        return projects[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [projects]);

  return (
    <div className="fourth-section">
      <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
        <Row>
          <Col className="text-center">
            <h1
              style={{
                fontFamily: "Playfair Display",
                paddingTop: "10px",
                marginRight: "20px",
              }}
            >
              Completed Projects on{" "}
              <span
                style={{ fontFamily: "Paul Signature", marginLeft: "15px" }}
              >
                {currentProject.split("").map((char, index) => (
                  <span
                    key={`${key}-${index}`}
                    className="letter"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FourthSection;
