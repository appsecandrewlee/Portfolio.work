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
              src="Designborne.png"
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
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>
          <Modal
            show={showModal}
            onHide={handleClose}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                SOLID,DRY and KISS programming principles
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Designborne.png"
                alt="Image 1"
              />
            </Modal.Body>
            <Modal.Body>
              I've extensively applied object-oriented programming (OOP) and
              design principles, particularly focusing on the DRY (Don't Repeat
              Yourself) concept to ensure code efficiency. Embracing the KISS
              (Keep It Simple, Stupid) philosophy, I've streamlined complexities
              to maintain a straightforward and easily maintainable codebase. By
              proficiently utilizing robust data structures like hashmaps, I've
              demonstrated my adeptness in managing and optimizing data storage
              efficiently. Moreover, my expertise in designing UML diagrams has
              allowed me to visualize and architect complex systems effectively.
              Implementing SOLID principles underscores my dedication to
              crafting modular, extensible, and robust code.
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
              src="Nine-Men-Morris.png"
              alt="Image 2"
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
              onClick={handleShow1}
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
          <Modal
            show={showModal1}
            onHide={handleClose1}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Software Engineering, Design Patterns & OOP
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Nine-Men-Morris.png"
                alt="Image 2"
              />
            </Modal.Body>
            <Modal.Body>
              In this Nine Men's Morris project, I have implemented the observer
              pattern to facilitate dynamic updates, ensuring seamless
              communication between different components of the game. Adhering
              to SOLID principles, I've crafted a robust architecture that
              promotes scalability and maintainability, laying a strong
              foundation for future enhancements. By applying the DRY (Don't
              Repeat Yourself) concept, I've fostered efficient code reuse,
              minimizing redundancy and maximizing code efficiency. This
              software engineering architecture project exemplifies my
              dedication to implementing best practices in software design and
              development
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
              src="Systems.png"
              alt="Image 3"
              onClick={handleShow2}
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
          <Modal
            show={showModal2}
            onHide={handleClose2}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Priority Queues, File Commands and Multithreading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="Systems.png" alt="Image 3" />
            </Modal.Body>
            <Modal.Body>
              In the operating systems project, I demonstrated my expertise by
              implementing various essential concepts, particularly focusing on
              system scheduling algorithms and process management. Leveraging my
              proficiency in C programming, I coded a robust First Come First
              Serve (FCFS) algorithm and a Round Robin algorithm, ensuring fair
              process execution order and efficient resource utilization.
              Additionally, I expanded my skills by incorporating file commands,
              further enhancing the functionality and versatility of the system.
              Going beyond basic implementations, I delved into advanced topics
              such as server-to-client communication using sockets and
              multithreading, showcasing my ability to tackle complex challenges
              in system development.{" "}
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
              src="HoHeal.png"
              alt="Image 4"
              onClick={handleShow3}
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
            <img src="/magnifier.png" alt="Magnifier" className="magnifier" />
          </div>
          <Modal
            show={showModal3}
            onHide={handleClose3}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>PHP JS & SQL project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="HoHeal.png" alt="Image 4" />
            </Modal.Body>
            <Modal.Body>
              I've refined my skills in PHP, JavaScript, HTML, and MySQL,
              culminating in the creation of a comprehensive CMS for "Holistic
              Healing." This endeavor enabled me to translate technical
              proficiency into a tangible solution, fostering efficient content
              management and user engagement. Through iterative development and
              meticulous planning, I navigated the complexities inherent in web
              development with humility and dedication. Effective project
              management, coupled with clear communication and adept
              problem-solving, underscored my commitment to delivering value to
              both clients and teammates who i work with. As I reflect on this
              journey, I am grateful for the opportunity to contribute
              meaningfully to the project.
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
              <Modal.Title>
                Conceptual Design & Real-time implementation of Database
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="SQL-Database.png"
                alt="Image 5"
              />
            </Modal.Body>
            <Modal.Body>
              In this project focused on database management, I designed a
              cruise database tailored to handle various queries and operations
              efficiently. Leveraging my expertise in SQL and Oracle, I
              meticulously crafted the conceptual design, mapping out the
              structure and relationships within the database. Transitioning
              from conceptualization to implementation, I brought the database
              to life, ensuring seamless integration with existing systems and
              optimal performance. With a keen eye for detail, I executed
              complex queries, fine-tuning them to meet the diverse needs of the
              project. Through this hands-on experience, I gained practical
              insights into database administration tasks, from data retrieval
              to modification and optimization.{" "}
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
            Shortest Path Database Design (Data Science)
          </p>
          <Modal
            show={showModal5}
            onHide={handleClose5}
            size="lg"
            className="fade"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Neo4j and Cypher Design + implementation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Advanced-Database-Design.png"
                alt="Image 6"
              />
            </Modal.Body>
            <Modal.Body>
              {" "}
              showcased my proficiency in designing multi-storage, multi-purpose
              databases for back-end systems, utilizing cutting-edge
              technologies to achieve optimal performance and functionality.
              Leveraging my expertise, I designed and implemented multiple
              databases, each tailored to serve specific purposes and
              requirements, effectively organizing and managing diverse sets of
              data. Additionally, I employed advanced techniques such as
              utilizing Neo4j and Dijkstra's algorithm to efficiently find the
              shortest path within the graph database structure, demonstrating
              my ability to leverage specialized tools for complex tasks.
              Moreover, I excelled in query optimization, adeptly crafting
              queries to retrieve data and establish relationships within the
              graph database, ensuring streamlined access and manipulation of
              information.{" "}
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
                <Modal.Title>
                  Stack Overflow attack Netcat + C Programming
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {" "}
                <img className="project-image" src="Memory.png" alt="Image 7" />
              </Modal.Body>
              <Modal.Body>
                In this project, I implemented stack overflow and SQL injection
                techniques as part of an exploration into software security.
                Leveraging these methodologies, I delved deep into the
                vulnerabilities within software systems, analyzing potential
                points of exploitation and fortifying defenses against malicious
                attacks. Through hands-on experimentation, I demonstrated a
                comprehensive understanding of the mechanisms underlying stack
                overflow and SQL injection, identifying weaknesses and devising
                strategies to mitigate their impact. Additionally, I explored
                advanced concepts such as NOP-sled exploitation, leveraging
                techniques to bypass security measures and gain unauthorized
                access. Using netcat, I executed SQL commands to retrieve
                sensitive user information, illustrating the real-world
                implications of such vulnerabilities.{" "}
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
              <Modal.Title>
                Telnet Vulnerability Exploitation + DNS poison
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="Networks.png" alt="Image 8" />
            </Modal.Body>
            <Modal.Body>
              In this project, I conducted a DNS poisoning attack aimed at
              manipulating DNS resolution processes to redirect traffic to
              malicious destinations. By exploiting vulnerabilities in DNS
              protocols, I successfully intercepted and modified DNS query
              responses, directing users to unauthorized websites. Additionally,
              I executed a Man-in-the-Middle (MITM) attack using Telnet,
              intercepting communication between network nodes and dropping
              connections to gain unauthorized access.{" "}
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
            <Modal.Title>MEAN stack web development (POMS)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <img className="project-image" src="POMS.png" alt="Image 9" />
          </Modal.Body>
          <Modal.Body>
            In this project, I developed a Parcel Management Application
            utilizing MongoDB for backend data storage and TypeScript for
            frontend development. Leveraging CRUD operations, users can
            seamlessly add and delete parcels, offering a convenient solution
            for parcel management tasks. The application's architecture
            prioritizes efficiency and scalability, ensuring smooth data
            handling and retrieval processes. Additionally, Bootstrap.css was
            employed for styling, enhancing the user interface with modern and
            responsive design elements.{" "}
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
              <Modal.Title>MACathon Competition (Hackathon)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="App1.png" alt="Image 10" />
            </Modal.Body>
            <Modal.Body>
              In this project, I participated the development of an innovative
              language learning application, leveraging technologies to bridge
              communication gaps seamlessly. By integrating OpenCV, I
              facilitated image recognition capabilities, allowing users to
              translate text simply by capturing an image. Utilizing Python's
              FASTAPI framework, My team created a backend system to process
              image data and interact with external APIs for language
              translation. Collaborating closely with a dynamic team, I
              contributed to the frontend development using React JavaScript,
              crafting an intuitive user interface for seamless interaction. we
              ensured optimal performance and user experience across platforms.{" "}
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
              <Modal.Title>Android Application Development</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img className="project-image" src="Android.png" alt="Image 11" />
            </Modal.Body>
            <Modal.Body>
              This project, undertaken as part of the Monash Application
              Development Elective, involved the creation of a comprehensive
              Android mobile application. Leveraging RoomDB, a local database
              solution, and Firebase backend services, we developed a robust and
              scalable platform for data storage and management. The application
              seamlessly integrates with the Country API, utilizing JSON data
              for dynamic content retrieval and display.
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
              <Modal.Title>
                Monash Paramedicine Platform (Officially in use by Monash)
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Monash_Prod.png"
                alt="Image 12"
              />
            </Modal.Body>
            <Modal.Body>
              In leading the development of the Monash Paramedicine eLearning
              system, I participated in the full spectrum of development, from
              frontend to backend implementation, ensuring a cohesive and robust
              platform. With a focus on security, I designed and integrated
              multifactor authentication components, including email
              verification measures, to enhance the system's resilience against
              unauthorized access. Through thorough pen-testing and threat
              modeling, vulnerabilities such as HTTP and SQL injection were
              identified and addressed, resulting in 85% security coverage.
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
              <Modal.Title>
                Created Portfolio Website using react Javascript, CSS animations
                and HTML
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                className="project-image"
                src="Portfolio.png"
                alt="Image 13"
              />
            </Modal.Body>
            <Modal.Body>
              This project is simply a collection of my work as an aspiring
              software engineer. It's a portfolio website built using React and
              Bootstrap, showcasing the projects I've worked on during my two
              years in the field. I've utilized JavaScript for functionality,
              CSS for animations, and HTML for structure.{" "}
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
