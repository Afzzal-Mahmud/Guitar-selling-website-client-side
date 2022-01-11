import  Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import './Header.css'

/* import font */
import '../../UtilityCss/UtilityCss.css'
import { Link } from "react-router-dom";

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

  <Container className='py-3'>
      {/* logo */}
  <Navbar.Brand href="#home" className='poppins-boldItalic logo primary-forground'>Guitar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  {/* nav item */}
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto poppins-regular nav-links">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
      <Nav.Link as={Link} to="/feedback">Feedback Us</Nav.Link>
      <Nav.Link as={Link} to="/login">Log In</Nav.Link>
    </Nav>
    <Nav>
      <Button className='primary-background poppins-medium'>Admin</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>

</Navbar>
    )
}
export default Header;