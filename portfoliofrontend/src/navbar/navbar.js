import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//Libraries that is required to make NavigationClickable

//Function for Navigation bar
function NavigationClickable() {
  return (
    //Navigation
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Andrew Lee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Experience</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationClickable;
