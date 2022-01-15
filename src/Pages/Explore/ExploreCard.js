import React from "react";

/* import bootstrap Card,Col */
import Card from "react-bootstrap/Card";
import  Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

/* import css */
import './Explore.css'

function ExploreCard(props) {
    const {user} = useAuth()
    const userEmail = user?.email
    const {name,image,price,description}=props.acousticGuitarObject

    const handleAddToCart = () =>{
        const orderItem = {
            name : name,
            imageUrl : image,
            productPrice : price,
            email : userEmail,
            productType : 'Acoustic Guitar'
        }
        console.log(orderItem)

        /* send product data to the server */
        fetch('http://localhost:5000/cart',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('Your product add successfully.See that on Dashboard page')
                }
            })
        
    }

    /* if user are not logIn we redirect to the logIn page */
    const history = useHistory()

    const handleLogInRedirect = () =>{
        history.push('/login')
    }
    return (
        <Col xs={12} md={4} className="main-card-col">

            <Card className='h-100 secondery-dark'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h3 className="poppins-semiBold">{name}</h3>
                    <h4 className="poppins-semiBold">Rs {price}</h4>
                    <p className="poppins-regular">{description}</p>
                    {
                        user?.email ?
                        <button className="secondery-background poppins-semiBold" onClick={handleAddToCart}>Add to Cart</button> 
                        : 
                        <button className="secondery-background poppins-semiBold" onClick={handleLogInRedirect}>Add to Cart</button>
                    }
                </Card.Body>
            </Card>

        </Col>
    )
}
export default ExploreCard;