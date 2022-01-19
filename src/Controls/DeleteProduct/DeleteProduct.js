import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DeleteProductCard from "./DeleteProductCard";

function DeleteProduct() {
    const [acousticGuitar,setAcousticGuitar] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allguitar')
        .then(Response => Response.json())
        .then(data => {
            setAcousticGuitar(data)
            console.log(data)
        })
    },[])
    return (
        <section className="secondery-background explore-section">
            <Container>
            <div className="explore-top-content">
            <h2 className="poppins-boldItalic">
            Delete your product</h2>

            <p className="poppins-regular explore-sub-heading">If you want to delete some product delete it . Make sure the product is no longer displaed on your website</p>
            </div>
                <Row>
                
                    {
                        acousticGuitar.map(guitarData => <DeleteProductCard
                            key={guitarData._id}
                            guitarObject = {guitarData}
                            acousticGuitar = {acousticGuitar}
                            setAcousticGuitar = {setAcousticGuitar}
                            ></DeleteProductCard>)
                    }
                    
                </Row>
            </Container>
        </section>
)
}
export default DeleteProduct;



