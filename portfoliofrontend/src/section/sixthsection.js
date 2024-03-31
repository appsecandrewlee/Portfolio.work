import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SixthSection.css";

function SixthSection() {
  return (
    <Container style={{ paddingTop: "49vh", animation: "fadeIn 2s" }}>
      <h1
        className="text-center"
        style={{ fontFamily: "Playfair Display", fontSize: "6vh" }}
      >
        Experience
      </h1>
      <p className="text-center" id="Experience" style={{ fontSize: "1.8vh" }}>
        I have been in the Software Development space for over 2 years now.
        <br></br> I'm a passionate individual that is always eager to grow.{" "}
        <br></br>
        <br></br>
      </p>
      <Row className="text-center">
        <Col xs={12} md={6}>
          <h1 className="section-title">Technologies I've used</h1>
          <div className="logos-container">
            <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
              <img src="/cassandra.svg" alt="Cassandra" className="logo" />
            </a>
            <a href="https://dev.u23s1012.monash-ie.me/">
              <img src="/php.png" alt="PHP" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img src="/javascript.svg" alt="JS" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Portfolio.work">
              <img src="/react.svg" alt="React" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/hackathon-ML">
              <img src="/dart.svg" alt="Dart" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Software-Developer-Industry-Mock-Client-Project">
              <img src="/css.svg" alt="CSS" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/Monash-Software-Testing-Analysis-Subject">
              <img src="/python.svg" alt="Python" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/SQL-database-design">
              <img src="/mysql.svg" alt="MySQL" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img src="/html.svg" alt="HTML" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Portfolio.work">
              <img src="/bootstrap.svg" alt="Bootstrap" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/Object-Oriented-Programming-Text-Based-Dragonborne-Game">
              <img src="/java.svg" alt="Java" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
              <img src="android-studio.svg" alt="Android" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img src="/angular.svg" alt="Angular" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/hackathon-ML">
              <img src="/Djangoproject.svg" alt="Django" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/MACathon_2023">
              <img src="/npm.svg" alt="NPM" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
              <img src="/mongodb.svg" alt="MongoDB" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/MACathon_2023">
              <img src="/firebase.svg" alt="Firebase" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
              <img src="/json.svg" alt="Json" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee?tab=repositories">
              <img src="/github.svg" alt="github" className="logo" />
            </a>

            <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
              <img src="/c.svg" alt="C" className="logo" />
            </a>
            <img src="/jquery.svg" alt="Jquery" className="logo" />
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img src="/nodejs.svg" alt="nodejs" className="logo" />
            </a>
            <img src="/Linux.png" alt="Linux" className="logo" />
            <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
              <img src="/neo4j.png" alt="neo4j" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/SQL-database-design.git">
              {" "}
              <img src="/oracle.svg" alt="oracle" className="logo" />
            </a>
            <a href="https://github.com/appsecandrewlee/Software-Testing-Analysis/blob/main/Software-Quality-Report-On-Monash-Supermarket.pdf">
              {" "}
              <img src="/CICD.png" alt="Test" className="logo" />
            </a>
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

          <a href="https://www.monashcoding.com/">
            <img src="/MAC.png" alt="MAC Logo" className="logo" />
          </a>

          <a href="https://monsec.io/">
            <img
              src="/cybersec.png"
              alt="Cybersecurity Logo"
              className="logo"
            />
          </a>
          <a href="https://wired.org.au/">
            <img src="/wired.jpeg" alt="Wired Logo" className="logo" />
          </a>

          <h1 className="section-title" style={{ marginTop: "3vh" }}>
            Hackathons I attended
          </h1>
          <a href="https://devpost.com/software/language-translator-app">
            <img src="/macathon.png" alt="Macathon Logo" className="logo" />
          </a>
          <a href="https://devpost.com/software/journal-ko8tlj">
            <img src="/unihack2023.png" alt="Unihack Logo" className="logo" />
          </a>

          <a href="https://monsec.io/competitions/#monsec-beginner-ctf">
            <img src="/monsec.jpeg" alt="CTF Logo" className="logo" />
          </a>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="section-title">The software architecture i've used</h1>

          <a href="https://github.com/appsecandrewlee/Nine-Men-Morris-Game/tree/main/Nine-Men-Morris/Nine-Men-Morris/src">
            <img
              src="/refactoring.png"
              alt="Refactoring Guru Logo"
              className="logo"
            />
          </a>
          <a href="https://github.com/appsecandrewlee/Object-Oriented-Programming-Text-Based-Dragonborne-Game">
            <img src="/SOLID.png" alt="SOLID Logo" className="logo" />
          </a>
          <a href="https://github.com/appsecandrewlee/Software-Developer-Industry-Mock-Client-Project">
            <img src="/mvc.png" alt="MVC Logo" className="logo" />
          </a>
          <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
            <img
              src="/client-server.png"
              alt="client-server"
              className="logo"
            />
          </a>
          <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
            <img src="/async.png" alt="async" className="logo" />
          </a>

          {}
        </Col>

        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  );
}
export default SixthSection;
