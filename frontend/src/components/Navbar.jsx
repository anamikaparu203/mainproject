import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function bar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link}to="#Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            
            <Nav.Link  as={Link}to="/Program">Program</Nav.Link>
            <Nav.Link as={Link} to="/Register">Sponsorship</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default bar;

