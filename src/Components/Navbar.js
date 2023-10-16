import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/final logo.png"

function BasicExample() {
  return (
    <div className="top">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container-fluid '>
      <Navbar.Brand href="#home">
           <img src={logo} alt=""  width="30"
              height="30"
              className="d-inline-block align-top" />
           {'  '}
            Mr.Apple
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            <Nav.Link  href="#Home-container">Home</Nav.Link>
            <Nav.Link  href="#Device">Device</Nav.Link>
            <Nav.Link href="#Test-container">Testimonials</Nav.Link>
            <Nav.Link href="#Footer">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;