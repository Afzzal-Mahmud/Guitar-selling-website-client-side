import  Nav from "react-bootstrap/Nav";
import  Navbar from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import './Header.css'

/* import font */
import '../../UtilityCss/UtilityCss.css'
import { Link, NavLink } from "react-router-dom";

/* import firebase system */
import useAuth from "../../Hooks/useAuth";

function Header() {
  const {user,logOut} = useAuth()
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
      <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
    </Nav>
    
    {/* conditionally rander based on user logIn or logOut */}
        {
          user?.email ? 
          <Button onClick={logOut} className="primary-background poppins-medium">Log Out</Button>
          :
          <NavLink to="/login">
             <Button className="primary-background poppins-medium">Log In</Button>
          </NavLink>
        }
    
    <Nav>
      <NavLink to='/admin'>
      <Button className='primary-background poppins-medium ms-2'>Admin</Button>
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>

</Navbar>
    )
}
export default Header;
      
    