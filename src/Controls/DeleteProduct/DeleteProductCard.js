import React from "react";

/* import bootstrap Card,Col */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function DeleteProductCard(props) {
    const {_id, name, image, price, description } = props.guitarObject

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete ?')

        if (proceed) {
            const url = `https://fierce-beyond-84290.herokuapp.com/deleteproduct/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        /* cartData and setUserCart comes from Dashboard as props */
                        const remainingData = props?.acousticGuitar.filter(data => data._id !== id)
                        console.log(remainingData)
                        props.setAcousticGuitar(remainingData)
                    }
                })
        }
    }

    return (
        <Col xs={12} md={4} className="main-card-col">

            <Card className='h-100 secondery-dark'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h3 className="poppins-semiBold">{name}</h3>
                    <h4 className="poppins-semiBold">Rs {price}</h4>
                    <p className="poppins-regular">{description}</p>

                    <button className="secondery-background poppins-semiBold" onClick={()=>handleDelete(_id)}>Delete</button>
                </Card.Body>
            </Card>

        </Col>
    )
}
export default DeleteProductCard;