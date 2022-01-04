import  Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"

/* import font */
import '../../UtilityCss/UtilityCss.css'

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

  <Container>
      {/* logo */}
  <Navbar.Brand href="#home" className='poppins-boldItalic primary-forground'>Guitar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  {/* nav item */}
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto poppins-regular">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#explore">Explore</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Button className='primary-background'>Admin</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>

</Navbar>
    )
}
export default Header;