import React, { useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "./NavigationClickable.css";

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
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-block d-md-none"
            style={{
              color: "black",
              fontFamily: "Playfair Display",
              fontWeight: 500,
            }}
          >
            Andrew Lee
          </Navbar.Brand>
          <Navbar.Brand
            onClick={toggleSidebar}
            style={{ color: "black", fontFamily: "Playfair Display" }}
            className="d-none d-md-block"
          >
            Menu
          </Navbar.Brand>
          <Navbar.Brand
            href="#home"
            className="mx-auto d-none d-md-block"
            style={{
              color: "black",
              fontFamily: "Playfair Display",
              fontWeight: 500,
            }}
          >
            Andrew Lee
          </Navbar.Brand>
          <Navbar.Brand
            onClick={toggleSidebar}
            style={{ color: "black", fontFamily: "Playfair Display" }}
            className="d-flex align-items-center ml-auto d-md-none"
          >
            <Image src="/hamburger.png" alt="Menu" width="35" height="35" />
          </Navbar.Brand>
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
          <Nav className="ml-auto d-none d-md-flex">
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationClickable;
