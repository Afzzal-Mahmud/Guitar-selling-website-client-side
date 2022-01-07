/* import fetching data from react */
import React, { useEffect, useState } from "react";
/* import container from react-bootstrap */
import Container from "react-bootstrap/Container";

import UniqueCollectionCards from "./UniqueCollectionCards";
/* import css for some styling */
import './UniqueCollections.css'


function UniqueCollections() {
    /* fetching data from public folder.At the end of the project it would be the mongoDb data base*/
    const[uniqueGuitar,setUniqueGuitar] =useState([])

    useEffect(() =>{
        fetch('./uniqueguitar.json')
        .then(Response => Response.json())
        .then(data => {
            setUniqueGuitar(data)
            console.log(data)
        })
    },[])
    return(
        /* unique collections.js file is all about fetching data. All content is grow on uniqueCollectionCard.js file */
        <Container className="pt-4">
            <h2 className="poppins-boldItalic secondery-forground">
            Our Unique Collections</h2>

            <p className="poppins-regular color-gray-2 collection-sub-heading">We have some unique collection for you.Check it out</p>
            
        {/* the parent container for card */}

        <div className="card-container">

        {
                uniqueGuitar.map(guitarData => <UniqueCollectionCards
                key={guitarData.uk}
                guitarObject={guitarData}
                ></UniqueCollectionCards>)
        }

        </div>
        </Container>
    )
}
export default UniqueCollections