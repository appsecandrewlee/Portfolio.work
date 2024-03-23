import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
function SeventhSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
      {" "}
      <Row>
        <Col className="text-center">
          <h1 style={{ fontFamily: "Playfair Display" }}>Get in touch</h1>
          <p>
            <p id="contact">
              let me know if you want to chat with me or discuss opportunities!
              I'm always down to learn and grow with likeminded people!<br></br>
              I'm based in Melbourne, Australia <br></br>
              MEL-
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              -
              {time.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br></br>
              <br></br>
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default SeventhSection;
