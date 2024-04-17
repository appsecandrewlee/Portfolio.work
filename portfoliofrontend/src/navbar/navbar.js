import React, { useState, useEffect } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-scroll";

import "./navbar.css";

const NavLink = ({ href, children, toggleSidebar }) => (
  <Nav.Link
    href={href}
    onClick={toggleSidebar}
    style={{ color: "black", fontFamily: "Playfair Display" }}
  >
    {children}
  </Nav.Link>
);

function NavigationClickable() {
  const [currentTime, setCurrentTime] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentDate, setFormattedDate] = useState("");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const currentDate = new Date();

      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      // Format the date
      const formattedDate = `${day}/${month}/${year}`;

      // Format the time to HH:MM:SS
      const formattedTime = `${hours}:${minutes}`;

      setFormattedDate(formattedDate);
      setCurrentTime(formattedTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar
        style={{ borderBottom: "none", boxShadow: "none" }}
        bg="#FFFFFF"
        variant="light"
        expand="lg"
      >
        <Navbar.Brand
          onClick={toggleSidebar}
          className="d-none d-lg-block"
          style={{
            cursor: "pointer",
            color: "black",
            fontFamily: "Playfair Display",
            paddingLeft: "1rem",
            fontSize: "3vh",
          }}
        >
          Menu
        </Navbar.Brand>
        <Navbar.Brand
          className="d-block d-lg-none"
          style={{
            cursor: "pointer",
            color: "black",
            fontFamily: "Playfair Display",
            fontSize: "2.5vh",
            marginLeft: "1.5rem",
          }}
        >
          <Link
            activeClass="active"
            to="Experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Andrew Lee
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="d-lg-none ml-auto"
        >
          <Image
            src={process.env.PUBLIC_URL + "/hamburger.png"}
            alt="Menu"
            width="45"
            height="45"
            onClick={toggleSidebar}
          />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center d-none d-lg-block"
        >
          <Navbar.Brand
            style={{
              cursor: "pointer",
              color: "black",
              fontFamily: "Paul Signature",
              fontSize: "3.5vh",
              marginLeft: "3.5vh",
            }}
          >
            <Link
              activeClass="active"
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              AL
            </Link>
          </Navbar.Brand>{" "}
        </Navbar.Collapse>
        <Nav className="pr-3 d-none d-lg-block">
          <Navbar.Brand
            style={{
              cursor: "pointer",
              fontFamily: "Playfair Display",
              fontSize: "3vh",
            }}
          >
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </Navbar.Brand>
        </Nav>{" "}
      </Navbar>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-content">
          <span
            style={{
              fontFamily: "Playfair Display",
              color: "#ECECEC",
              fontSize: "3vh",
              position: "absolute",
              bottom: "0",
              left: "0",
              padding: "1vh",
            }}
          >
            {currentTime} <br></br>
            {currentDate}
          </span>
          <span
            onClick={() => setShowSidebar(false)}
            style={{
              fontFamily: "Playfair Display",
              color: "#ECECEC",
              cursor: "pointer",
              fontSize: "3vh",
              position: "absolute",
              top: "0",
              right: "0",
              padding: "1vh",
            }}
          >
            Close
          </span>{" "}
          <div className="d-flex justify-content-end">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleSidebar}
            >
              <span
                style={{
                  cursor: "pointer",
                  fontFamily: "Playfair Display",
                  color: "#ECECEC",
                  fontSize: "12.5vh",
                }}
              >
                <sup>1</sup>Projects
              </span>
            </Link>{" "}
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleSidebar}
            >
              <span
                style={{
                  cursor: "pointer",
                  fontFamily: "Playfair Display",
                  color: "#ECECEC",
                  fontSize: "12.5vh",
                }}
              >
                <sup>2</sup>About
              </span>
            </Link>{" "}
          </div>
          <NavLink toggleSidebar={toggleSidebar}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleSidebar}
            >
              <span
                style={{
                  cursor: "pointer",
                  fontFamily: "Playfair Display",
                  color: "#ECECEC",
                  fontSize: "12.5vh",
                }}
              >
                <sup>3</sup>Contact
              </span>
            </Link>{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavigationClickable;
