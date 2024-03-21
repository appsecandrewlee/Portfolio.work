import React, { useState } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
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
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
            color: "black",
            fontFamily: "Playfair Display",
            paddingLeft: "1rem",
          }}
        >
          Menu
        </Navbar.Brand>
        <Navbar.Brand
          href="#home"
          className="d-block d-lg-none"
          style={{
            color: "black",
            fontFamily: "Playfair Display",
            fontWeight: 500,
            paddingLeft: "1rem",
          }}
        >
          Andrew Lee
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="d-lg-none ml-auto"
        >
          <Image src="/hamburger.png" alt="Menu" width="35" height="35" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center d-none d-lg-block"
        >
          <Navbar.Brand
            href="#home"
            style={{
              color: "black",
              fontFamily: "Paul Signature",
              fontSize: 25,
              marginLeft: "1.5rem",
            }}
          >
            AL
          </Navbar.Brand>
        </Navbar.Collapse>
        <Nav className="pr-3 d-none d-lg-block">
          <Navbar.Brand
            style={{
              fontFamily: "Playfair Display",
              fontSize: 20,
            }}
            href="#contact"
          >
            Contact
          </Navbar.Brand>
        </Nav>
      </Navbar>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-content">
          <div className="d-flex justify-content-end">
            <span
              onClick={toggleSidebar}
              style={{ cursor: "pointer", fontFamily: "Playfair Display" }}
            >
              X
            </span>
          </div>
          <Nav className="flex-column mt-4">
            <NavLink href="#home" toggleSidebar={toggleSidebar}>
              Home
            </NavLink>
            <NavLink href="#about" toggleSidebar={toggleSidebar}>
              About
            </NavLink>
            <NavLink href="#services" toggleSidebar={toggleSidebar}>
              Services
            </NavLink>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default NavigationClickable;
