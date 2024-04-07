import React, { useEffect, useState } from "react";
import TextAnimation from "react-text-animations";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./newstyles.css";

function FourthSection() {
  const [animate, setAnimate] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);

  const [showModal12, setShowModal12] = useState(false);

  const handleShow1 = () => setShowModal1(true);
  const handleClose1 = () => setShowModal1(false);

  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => setShowModal2(false);

  const handleShow3 = () => setShowModal3(true);
  const handleClose3 = () => setShowModal3(false);

  const handleShow4 = () => setShowModal4(true);
  const handleClose4 = () => setShowModal4(false);

  const handleShow5 = () => setShowModal5(true);
  const handleClose5 = () => setShowModal5(false);

  const handleShow6 = () => setShowModal6(true);
  const handleClose6 = () => setShowModal6(false);

  const handleShow7 = () => setShowModal7(true);
  const handleClose7 = () => setShowModal7(false);

  const handleShow8 = () => setShowModal8(true);
  const handleClose8 = () => setShowModal8(false);

  const handleShow9 = () => setShowModal9(true);
  const handleClose9 = () => setShowModal9(false);

  const handleShow10 = () => setShowModal10(true);
  const handleClose10 = () => setShowModal10(false);

  const handleShow11 = () => setShowModal11(true);
  const handleClose11 = () => setShowModal11(false);

  const handleShow12 = () => setShowModal12(true);
  const handleClose12 = () => setShowModal12(false);

  const handleShow = () => {
    setShowModal(true);
    setAnimate(true);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setShowModal(false), 300); // match the duration of your transition
  };

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
              src={process.env.PUBLIC_URL + "/Designborne.png"}
              alt="Image 1"
              onClick={handleShow}
            />
            <p
              className="text-center"
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              Text-based Designborne (Dragonborne Replica Game)
            </p>
            <img
              src={process.env.PUBLIC_URL + "/magnifier.png"}
              alt="Magnifier"
              className="magnifier"
            />
          </div>
          <Modal
            show={showModal}
            onHide={handleClose}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "/Designborne.png"}
                alt="Image 1"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              src={process.env.PUBLIC_URL + "/Nine-Men-Morris.png"}
              alt="Image 2"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
              onClick={handleShow1}
            />
            <img
              src={process.env.PUBLIC_URL + "/magnifier.png"}
              alt="Magnifier"
              className="magnifier"
            />
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
          <Modal
            show={showModal1}
            onHide={handleClose1}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Design Patterns & OOP Principles</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "Nine-Men-Morris.png"}
                alt="Image 2"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose1}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              src={process.env.PUBLIC_URL + "Systems.png"}
              alt="Image 3"
              onClick={handleShow2}
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/magnifier.png"}
              alt="Magnifier"
              className="magnifier"
            />
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
          <Modal
            show={showModal2}
            onHide={handleClose2}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>OS algorithms and processes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "Systems.png"}
                alt="Image 3"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              src={process.env.PUBLIC_URL + "HoHeal.png"}
              alt="Image 4"
              onClick={handleShow3}
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img
              src={process.env.PUBLIC_URL + "/magnifier.png"}
              alt="Magnifier"
              className="magnifier"
            />
          </div>
          <Modal
            show={showModal3}
            onHide={handleClose3}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "HoHeal.png"}
                alt="Image 4"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

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
              onClick={handleShow4}
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
          <Modal
            show={showModal4}
            onHide={handleClose4}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="SQL-Database.png"
                alt="Image 5"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              onClick={handleShow5}
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>

          <p
            className="text-center"
            onClick={handleShow5}
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {" "}
            Neo4j Database Graph Transversal{" "}
          </p>
          <Modal
            show={showModal5}
            onHide={handleClose5}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Advanced-Database-Design.png"
                alt="Image 6"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              onClick={handleShow6}
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
            <Modal
              show={showModal6}
              onHide={handleClose6}
              size="lg"
              className="fade"
            >
              <Modal.Header closeButton>
                <Modal.Title>Designborne</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {" "}
                <img className="project-image" src="Memory.png" alt="Image 7" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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
              onClick={handleShow7}
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
          <Modal
            show={showModal7}
            onHide={handleClose7}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="Networks.png" alt="Image 8" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              onClick={handleShow8}
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
        <Modal
          show={showModal8}
          onHide={handleClose8}
          size="lg"
          className="fade"
        >
          <Modal.Header closeButton>
            <Modal.Title>Designborne</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <img className="project-image" src="POMS.png" alt="Image 9" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
              onClick={handleShow9}
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
          <Modal
            show={showModal9}
            onHide={handleClose9}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="App1.png" alt="Image 10" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              onClick={handleShow10}
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
          <Modal
            show={showModal10}
            onHide={handleClose10}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="Android.png" alt="Image 11" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              src="Monash_Prod.png"
              onClick={handleShow11}
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
          <Modal
            show={showModal11}
            onHide={handleClose11}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Monash_Prod.png"
                alt="Image 12"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
              onClick={handleShow12}
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
          <Modal
            show={showModal12}
            onHide={handleClose12}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>Designborne</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Portfolio.png"
                alt="Image 13"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
