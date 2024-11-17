import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function bar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"> Orphan Life Foundation</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            
            <Nav.Link  as={Link}to="/Program">Program</Nav.Link>
            <Nav.Link as={Link} to="/Register">Sponsorship</Nav.Link>
            <Nav.Link as={Link}to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default bar;

