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
    </div>
  );
}

export default FourthSection;
