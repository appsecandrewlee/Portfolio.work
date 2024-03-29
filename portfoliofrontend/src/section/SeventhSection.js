import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/b3e94e70-eb40-11ee-b428-632ee80a2804"; // TODO - update to the correct endpoint

function SeventhSection() {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
      <Row>
        <Col className="text-left">
          <h1 style={{ fontFamily: "Playfair Display", fontSize: "6vh" }}>
            Get in touch
          </h1>
          <p id="contact">
            let me know if you want to chat with me or discuss opportunities!
            <br></br> I'm always happy to grow with likeminded people!
            <br></br>
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
        </Col>
        <Col
          className="text-right"
          style={{ marginTop: "5.5vh", marginLeft: "20vh" }}
        >
          <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
            <Row>
              <Col xs={4}>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </Col>
              <Col xs={6}>
                <input type="email" placeholder="Email" name="email" required />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  style={{ fontFamily: "playfair Display" }}
                  placeholder="Message"
                  name="message"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <button type="submit">Submit</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SeventhSection;
