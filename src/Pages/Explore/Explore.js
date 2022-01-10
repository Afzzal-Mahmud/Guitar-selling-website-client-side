import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ExploreCard from "./ExploreCard";

function Explore() {
    const [acousticGuitar,setAcousticGuitar] = useState([])

    useEffect(()=>{
        fetch('./acoustic.json')
        .then(Response => Response.json())
        .then(data => {
            setAcousticGuitar(data)
            console.log(data)
        })
    },[])
    return (
        <Container>
            <Row>
            
            {
                acousticGuitar.map(guitarData => <ExploreCard
                key={guitarData.name}
                acousticGuitarObject = {guitarData}
                ></ExploreCard>)
            }
                
            </Row>
        </Container>

)
}
export default Explore;



