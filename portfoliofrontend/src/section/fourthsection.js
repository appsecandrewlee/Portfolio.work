import TextAnimation from "react-text-animations";
import { Container, Row, Col } from "react-bootstrap";

function FourthSection() {
  return (
    <div>
      <Container style={{ paddingTop: "1rem", animation: "fadeIn 2s" }}>
        <Row>
          <Col className="text-center" id="projects">
            <h1
              style={{
                fontFamily: "Playfair Display",
                paddingTop: "5vh",
                marginLeft: "2vh",
                fontSize: "6vh",
              }}
            >
              Completed Projects{" "}
              <span style={{ fontFamily: "Paul Signature", marginLeft: "2vh" }}>
                <TextAnimation.Slide
                  target="Projects"
                  text={[
                    "Sentiment Analysis",
                    "Dynamic CMS",
                    "Penetration Testing",
                    "Microservices",
                    "UI/UX design",
                    "Network Security",
                    "Static Analysis",
                    "Penetration Testing",
                    "Games Programming",
                    "Mobile Applications",
                    "MEAN stack Web Apps",
                  ]}
                  animation={{
                    duration: 200,
                    delay: 5000,
                    timingFunction: "ease-out",
                  }}
                  loop={true}
                >
                  Projects
                </TextAnimation.Slide>
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 414 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: window.innerWidth <= 414 ? "center" : "flex-start",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div>
          <img
            src="Designborne.png"
            alt="Image 1"
            style={{ width: "45vh", height: "25vh" }}
          />
          <p style={{ fontStyle: "Playfair Display", marginLeft: "6vh" }}>
            Terminal-based-Designborne-Game{" "}
          </p>
        </div>
        <div>
          <img
            src="Nine-Men-Morris.png"
            alt="Image 2"
            style={{ width: "45vh", height: "25vh" }}
          />
          <p style={{ fontStyle: "Playfair Display", marginLeft: "6vh" }}>
            Nine-Men-Morris-Game{" "}
          </p>
        </div>
        <div>
          <img
            src="Systems.png"
            alt="Image 3"
            style={{ width: "45vh", height: "25vh" }}
          />
          <p style={{ fontStyle: "Playfair Display", marginLeft: "0vh" }}>
            Process-Scheduling,Operating Systems
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
