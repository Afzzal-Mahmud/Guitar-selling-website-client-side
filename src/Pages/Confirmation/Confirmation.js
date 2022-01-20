import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";

function Confirmation() {
    return(
        <Container>
            <h1 style={{display:'flex',justifyContent: 'center',padding:'3em 0 1em 0',fontSize:'3em',textAlign:'center'}} className="poppins-bold primary-forground">Congrates we placed your order.And Pyment system comming soon</h1>
            <NavLink to='/home'>
                <Button className="d-flex m-auto poppins-medium">Go Home</Button>
            </NavLink>
        </Container>
    )
}
export default Confirmation