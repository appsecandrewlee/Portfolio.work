import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SixthSection.css";

function SixthSection() {
  return (
    <Container style={{ paddingTop: "6rem", animation: "fadeIn 2s" }}>
      <h1 className="text-center" style={{ fontFamily: "Playfair Display" }}>
        Experience
      </h1>
      <p className="text-center" style={{}}>
        I have been in the Software Development space for over 2 years now.
        <br></br> I'm a passionate individual that is always eager to grow.{" "}
        <br></br>
        <br></br>
        <p style={{ fontFamily: "Playfair Display", fontSize: "2.2vh" }}>
          Summary:
        </p>
      </p>
      <Row className="text-center">
        <Col xs={12} md={6}>
          <h1 className="section-title">Technologies I've used</h1>
          <div className="logos-container">
            <img src="/cassandra.svg" alt="Cassandra" className="logo" />
            <img src="/php.png" alt="PHP" className="logo" />
            <img src="/javascript.svg" alt="JS" className="logo" />
            <img src="/react.svg" alt="React" className="logo" />
            <img src="/dart.svg" alt="Dart" className="logo" />
            <img src="/css.svg" alt="CSS" className="logo" />
            <img src="/python.svg" alt="Python" className="logo" />
            <img src="/mysql.svg" alt="MySQL" className="logo" />
            <img src="/html.svg" alt="HTML" className="logo" />
            <img src="/bootstrap.svg" alt="Bootstrap" className="logo" />
            <img src="/java.svg" alt="Java" className="logo" />
            <img src="android-studio.svg" alt="Android" className="logo" />
            <img src="/angular.svg" alt="Angular" className="logo" />
            <img src="/typescript.svg" alt="Typescript" className="logo" />
            <img src="/Djangoproject.svg" alt="Django" className="logo" />
            <img src="/git.svg" alt="Git" className="logo" />
            <img src="/npm.svg" alt="NPM" className="logo" />
            <img src="/bash.svg" alt="Bash" className="logo" />
            <img src="/mongodb.svg" alt="MongoDB" className="logo" />
            <img src="/firebase.svg" alt="Firebase" className="logo" />
            <img src="/Amazon.svg" alt="Amazon Services" className="logo" />
            <img src="/json.svg" alt="Json" className="logo" />
            <img src="/github.svg" alt="github" className="logo" />
            <img src="/gcloud.svg" alt="Google Cloud" className="logo" />
            <img src="/c.svg" alt="C" className="logo" />
            <img src="/jquery.svg" alt="Jquery" className="logo" />
            <img src="/nodejs.svg" alt="nodejs" className="logo" />
            <img src="/Linux.png" alt="Linux" className="logo" />
            <img src="/neo4j.png" alt="neo4j" className="logo" />
            <img src="/oracle.svg" alt="oracle" className="logo" />
          </div>
        </Col>

        <Col xs={12} md={6}>
          <h1 className="section-title">Where I've worked</h1>
          <div className="monash-logo-container">
            <a
              href="https://www.monash.edu/medicine/spahc/paramedicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/University.png"
                alt="Monash University Logo"
                className="monash-logo"
              />
            </a>
            <a
              href="https://dwellstudent.com.au/adelaide/east-end-adelaide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/dwell.png" alt="Dwell Logo" className="dwell-logo" />
            </a>
          </div>
          <div className="dwell-logo-container"></div>
          <h1 className="section-title" style={{ marginTop: "3vh" }}>
            Club Societies
          </h1>
          <img src="/MAC.png" alt="MAC Logo" className="logo" />
          <img src="/cybersec.png" alt="Cybersecurity Logo" className="logo" />
          <img src="/wired.jpeg" alt="Wired Logo" className="logo" />
          <h1 className="section-title" style={{ marginTop: "3vh" }}>
            Hackathons I attended
          </h1>
          <img src="/macathon.png" alt="Macathon Logo" className="logo" />
          <img src="/unihack2023.png" alt="Unihack Logo" className="logo" />
          <img src="/monsec.jpeg" alt="CTF Logo" className="logo" />

          {}
        </Col>
        <Col xs={12} md={6}>
          <h1 className="section-title">The software architecture i've used</h1>
          <img src="/OOP.png" alt="OOP Logo" className="logo" />
          <img
            src="/refactoring.png"
            alt="Refactoring Guru Logo"
            className="logo"
          />
          <img src="/SOLID.png" alt="SOLID Logo" className="logo" />
          <img src="/mvc.png" alt="MVC Logo" className="logo" />
          <img src="/client-server.png" alt="client-server" className="logo" />
          <img src="/async.png" alt="async" className="logo" />

          {}
        </Col>

        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  );
}
export default SixthSection;
