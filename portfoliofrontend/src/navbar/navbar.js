import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Function for Navigation bar
function NavigationClickable() {
  return (
    // Navigation
    <>
      <Navbar
        style={{ borderBottom: "none", boxShadow: "none" }}
        bg="#FFFFFF"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "black" }}>
            Andrew Lee
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={{ color: "black" }}>
              Experience
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "black" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "black" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationClickable;
