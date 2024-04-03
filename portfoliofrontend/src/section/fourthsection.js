import React, { useEffect } from "react";
import TextAnimation from "react-text-animations";
import { Container, Row, Col } from "react-bootstrap";
import "./newstyles.css";

function FourthSection() {
  useEffect(() => {
    const rotateAngle = 10;
    const images = document.querySelectorAll(".project-image");

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

    return () => {
      images.forEach((img) => {
        img.removeEventListener("mousemove", () => {});
        img.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div>
      <Container style={{ paddingTop: "13vh", animation: "fadeIn 2s" }}>
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
            position: "relative",
          }}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Designborne.png"
              alt="Image 1"
            />
            <p
              className="text-center"
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              Text-based Designborne (Dragonborne Replica Game)
            </p>
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Nine-Men-Morris.png"
              alt="Image 2"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Systems.png"
              alt="Image 3"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Process-Scheduling Operating Systems
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="HoHeal.png"
              alt="Image 4"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>
          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="SQL-Database.png"
              alt="Image 5"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Advanced-Database-Design.png"
              alt="Image 6"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Memory.png"
              alt="Image 7"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
            <p
              className="text-center"
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              {" "}
              Software Security (Stack Overflow)
            </p>
          </div>
        </div>
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Networks.png"
              alt="Image 8"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Network Security Packet Sniff & DNS poison
          </p>
        </div>

        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="POMS.png"
              alt="Image 9"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>
          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Parcel Management Application
          </p>{" "}
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="App1.png"
              alt="Image 10"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Android.png"
              alt="Image 11"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Android Movie Management Application{" "}
          </p>
        </div>

        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "30%",
            paddingRight: "1%",
          }}
        >
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Monash_Prod.png
            "
              alt="Image 12"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
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
          <div className="project-image-wrapper">
            <img
              className="project-image"
              src="Portfolio.png"
              alt="Image 13"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Portfolio Website (Deployed){" "}
          </p>
        </div>
      </div>
      <div className="text-center">
        <h1 style={{ fontFamily: "Playfair Display", fontSize: "8vh" }}>
          Passion
        </h1>
        <p style={{ fontFamily: "Playfair Display", fontSize: "2vh" }}>
          My reads & for fun projects
        </p>
      </div>
      <div style={{ marginTop: "6vh" }}></div>
    </div>
  );
}

export default FourthSection;
