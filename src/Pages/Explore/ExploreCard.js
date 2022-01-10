import React from "react";

/* import bootstrap Card,Col */
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";

/* import css */
import './Explore.css'

function ExploreCard(props) {
    const {name,image,price,description}=props.acousticGuitarObject
    return (
        <Col xs={12} md={4} className="main-card-col">

            <Card className='h-100 secondery-dark'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h3 className="poppins-semiBold">{name}</h3>
                    <h4 className="poppins-semiBold">Rs {price}</h4>
                    <p className="poppins-regular">{description}</p>
                    <button className="secondery-background poppins-semiBold">Add to Cart</button>
                </Card.Body>
            </Card>

        </Col>
    )
}
export default ExploreCard;