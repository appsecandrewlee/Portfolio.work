import TextAnimation from "react-text-animations";
import { Container, Row, Col } from "react-bootstrap";
function FourthSection() {
  // Select all project images
  const images = document.querySelectorAll(".project-image");

  const rotateAngle = 10;

  images.forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      img.style.transformOrigin = "center";

      if (x < rect.width / 2 && y < rect.height / 2) {
        // Top left quadrant
        img.style.transform = `perspective(600px) rotate3d(1, -1, 0, ${rotateAngle}deg)`;
        img.style.transition = "transform 0.2s ease-out";
      } else if (x >= rect.width / 2 && y < rect.height / 2) {
        // Top right quadrant
        img.style.transform = `perspective(600px) rotate3d(1, 1, 0, ${rotateAngle}deg)`;
        img.style.transition = "transform 0.2s ease-out";
      } else if (x < rect.width / 2 && y >= rect.height / 2) {
        // Bottom left quadrant
        img.style.transform = `perspective(600px) rotate3d(-1, -1, 0, ${rotateAngle}deg)`;
        img.style.transition = "transform 0.2s ease-out";
      } else if (x >= rect.width / 2 && y >= rect.height / 2) {
        // Bottom right quadrant
        img.style.transform = `perspective(600px) rotate3d(-1, 1, 0, ${rotateAngle}deg)`;
        img.style.transition = "transform 0.2s ease-out";
      } else {
        img.style.transform = "";
        img.style.transition = "";
      }
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
      img.style.transition = "";
    });
  });

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
                    "Android Applications",
                    "Object oriented Programming",
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
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Designborne.png"
            alt="Image 1"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Terminal-based-Designborne-Game
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Nine-Men-Morris.png"
            alt="Image 2"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Nine-Men-Morris-Game
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Systems.png"
            alt="Image 3"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "0vh",
            }}
          >
            {" "}
            Process-Scheduling,Operating Systems
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="HoHeal.png"
            alt="Image 4"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Software Dev Mock Project Industry Experience
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="SQL-Database.png"
            alt="Image 5"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            SQL Database Design
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Advanced-Database-Design.png"
            alt="Image 6"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "0vh",
            }}
          >
            {" "}
            Neo4j Database Graph Transversal{" "}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Memory.png"
            alt="Image 7"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Software Security, Integer Overflow{" "}
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Networks.png"
            alt="Image 8"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Network Security, Packet Sniff & DNS poison
          </p>
        </div>

        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="POMS.png"
            alt="Image 9"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Parcel Management Application{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="App1.png"
            alt="Image 10"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            MACathon Competition ML Camera Scanning App{" "}
          </p>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Android.png"
            alt="Image 11"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Android Java Movie Management Application
          </p>
        </div>

        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Monash_Prod.png
            "
            alt="Image 12"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Monash Paramedicine Platform (Productionised){" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          justifyContent: "space-between",
          paddingLeft: "2vh",
          paddingRight: "2vh",
          paddingTop: "4vh",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <img
            className="project-image"
            src="Portfolio.png"
            alt="Image 13"
            style={{ width: "100%", height: "40vh", objectFit: "cover" }}
          />
          <p
            style={{
              fontStyle: "Playfair Display",
              marginLeft: "6vh",
            }}
          >
            {" "}
            Portfolio website and work showcase{" "}
          </p>
        </div>
      </div>

      <div className="text-center">
        <h1 style={{ fontFamily: "Playfair Display" }}>Passion</h1>
        <p>My reads & for fun projects</p>
      </div>
    </div>
  );
}

export default FourthSection;
