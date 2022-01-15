import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ExploreCard from "./ExploreCard";

function Explore() {
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
            Our Unique Catalog With Some Acoustic Guitar</h2>

            <p className="poppins-regular explore-sub-heading">We have some unique catalog for you. We sell Acoustic Guitar and we have professional for designing your Guitar</p>
            </div>
                <Row>
                
                    {
                        acousticGuitar.map(guitarData => <ExploreCard
                        key={guitarData._id}
                        acousticGuitarObject = {guitarData}
                        ></ExploreCard>)
                    }
                    
                </Row>
            </Container>
        </section>
)
}
export default Explore;



