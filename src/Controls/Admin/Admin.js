import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Admin() {
    return (
        <section>
            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                <Container className='py-3'>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto poppins-regular nav-links">
                            <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/feedback">Feedback Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar> */}

            <Container>
                <h2>Admin page</h2>
            </Container>
        </section>
    )
}
export default Admin