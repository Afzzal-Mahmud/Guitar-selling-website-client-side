import React from "react";

/* import bootstrap Card,Col */
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";

/* import css */
import './Explore.css'

function ExploreCard(props) {
    const {name,image,description}=props.acousticGuitarObject
    return (
        <Col xs={12} md={4} className="main-card-col">

            <Card className='h-100'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{description}</p>
                    <button>Add to Cart</button>
                </Card.Body>
            </Card>

        </Col>
    )
}
export default ExploreCard;