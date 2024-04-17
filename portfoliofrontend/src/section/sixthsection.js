import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SixthSection.css";
import "./newstyles.css";

function SixthSection() {
  return (
    <Container style={{ paddingTop: "12.5vh", animation: "fadeIn 2s" }}>
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
        <Col xs={12} md={6} className="text-center">
          <h1
            className="section-title"
            style={{ fontSize: "2.5vh", marginBottom: "2vh" }}
          >
            Technologies I've used
          </h1>
          <div className="d-flex flex-wrap justify-content-center">
          <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
              <img
                src={process.env.PUBLIC_URL + "/cassandra.svg"}
                alt="Cassandra"
                className="logo"
              />
            </a>
            <a href="https://dev.u23s1012.monash-ie.me/">
              <img
                src={process.env.PUBLIC_URL + "/php.png"}
                alt="PHP"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img
                src={process.env.PUBLIC_URL + "/javascript.svg"}
                alt="JS"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Portfolio.work">
              <img
                src={process.env.PUBLIC_URL + "/react.svg"}
                alt="React"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/hackathon-ML">
              <img
                src={process.env.PUBLIC_URL + "/dart.svg"}
                alt="Dart"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Software-Developer-Industry-Mock-Client-Project">
              <img
                src={process.env.PUBLIC_URL + "/css.svg"}
                alt="CSS"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/Monash-Software-Testing-Analysis-Subject">
              <img
                src={process.env.PUBLIC_URL + "/python.svg"}
                alt="Python"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/SQL-database-design">
              <img
                src={process.env.PUBLIC_URL + "/mysql.svg"}
                alt="MySQL"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img
                src={process.env.PUBLIC_URL + "/html.svg"}
                alt="HTML"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Portfolio.work">
              <img
                src={process.env.PUBLIC_URL + "/bootstrap.svg"}
                alt="Bootstrap"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/Object-Oriented-Programming-Text-Based-Dragonborne-Game">
              <img
                src={process.env.PUBLIC_URL + "/java.svg"}
                alt="Java"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
              <img
                src={process.env.PUBLIC_URL + "/android-studio.svg"}
                alt="Android"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img
                src={process.env.PUBLIC_URL + "/angular.svg"}
                alt="Angular"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/hackathon-ML">
              <img
                src={process.env.PUBLIC_URL + "/djangoproject.svg"}
                alt="Django"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/MACathon_2023">
              <img
                src={process.env.PUBLIC_URL + "/npm.svg"}
                alt="NPM"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/Polyglot-Database-Design">
              <img
                src={process.env.PUBLIC_URL + "/mongodb.svg"}
                alt="MongoDB"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/MACathon_2023">
              <img
                src={process.env.PUBLIC_URL + "/firebase.svg"}
                alt="Firebase"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Android-Movie-Management-Application">
              <img
                src={process.env.PUBLIC_URL + "/json.svg"}
                alt="Json"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee?tab=repositories">
              <img
                src={process.env.PUBLIC_URL + "/github.svg"}
                alt="github"
                className="logo"
              />
            </a>

            <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
              <img
                src={process.env.PUBLIC_URL + "/c.svg"}
                alt="C"
                className="logo"
              />
            </a>

            <a href="https://dev.u23s1012.monash-ie.me/">
              <img
                src={process.env.PUBLIC_URL + "/jquery.svg"}
                alt="Jquery"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Monash-university-parcel-sender-project">
              <img
                src={process.env.PUBLIC_URL + "/nodejs.svg"}
                alt="nodejs"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
              <img
                src={process.env.PUBLIC_URL + "/Linux.png"}
                alt="Linux"
                className="logo"
              />
            </a>
            <a href="https://github.com/appsecandrewlee/Software-Testing-Analysis/blob/main/Software-Quality-Report-On-Monash-Supermarket.pdf">
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/CICD.png"}
                alt="Test"
                className="logo"
              />
            </a>

          </div>
        </Col>
        <Col md={6} className="text-center">
          <Row>
            <Col className="text-center">
              <div className="section">
                <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.5vh" }}>
                  Where i've worked
                </h1>
              <a
              href="https://www.monash.edu/medicine/spahc/paramedicine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/University.png"}
                alt="Monash University Logo"
                className="monash-logo"
              />
            </a>
            <a
              href="https://dwellstudent.com.au/adelaide/east-end-adelaide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/dwell.png"}
                alt="Dwell Logo"
                className="dwell-logo"
              />
            </a>

              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <div className="section">
                <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.5vh" }}>
                  Clubs and Societies
                </h1>
                <a href="https://www.monashcoding.com/">
            <img
              src={process.env.PUBLIC_URL + "/MAC.png"}
              alt="MAC Logo"
              className="logo"
            />
          </a>

          <a href="https://monsec.io/">
            <img
              src={process.env.PUBLIC_URL + "/cybersec.png"}
              alt="Cybersecurity Logo"
              className="logo"
            />
          </a>
          <a href="https://wired.org.au/">
            <img
              src={process.env.PUBLIC_URL + "/wired.jpeg"}
              alt="Wired Logo"
              className="logo"
            />
          </a>

              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <div className="section">
                <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.5vh" }}>
                  Hackathons I attended
                </h1>
              
               <a href="https://devpost.com/software/language-translator-app">
            <img
              src={process.env.PUBLIC_URL + "/macathon.png"}
              alt="Macathon Logo"
              className="logo"
            />
          </a>
          <a href="https://devpost.com/software/journal-ko8tlj">
            <img
              src={process.env.PUBLIC_URL + "/unihack2023.png"}
              alt="Unihack Logo"
              className="logo"
            />
          </a>

          <a href="https://monsec.io/competitions/#monsec-beginner-ctf">
            <img
              src={process.env.PUBLIC_URL + "/monsec.jpeg"}
              alt="CTF Logo"
              className="logo"
            />
          </a>
          <h1 className="section-title" style={{ fontSize: "2.5vh" }}>
            The software architecture i've used
          </h1>

          <a href="https://github.com/appsecandrewlee/Nine-Men-Morris-Game/tree/main/Nine-Men-Morris/Nine-Men-Morris/src">
            <img
              src={process.env.PUBLIC_URL + "/refactoring.png"}
              alt="Refactoring Guru Logo"
              className="logo"
            />
          </a>
          <a href="https://github.com/appsecandrewlee/Object-Oriented-Programming-Text-Based-Dragonborne-Game">
            <img
              src={process.env.PUBLIC_URL + "/SOLID.png"}
              alt="SOLID Logo"
              className="logo"
            />
          </a>
          <a href="https://github.com/appsecandrewlee/Software-Developer-Industry-Mock-Client-Project">
            <img
              src={process.env.PUBLIC_URL + "/mvc.png"}
              alt="MVC Logo"
              className="logo"
            />
          </a>
          <a href="https://github.com/appsecandrewlee/Low-Level-System-Scheduling-and-Operating-Systems">
            <img
              src={process.env.PUBLIC_URL + "/client-server.png"}
              alt="client-server"
              className="logo"
            />
          </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SixthSection;

