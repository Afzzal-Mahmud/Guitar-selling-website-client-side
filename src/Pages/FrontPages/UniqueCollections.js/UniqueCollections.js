/* import fetching data from react */
import React, { useEffect, useState } from "react";
/* import container from react-bootstrap */
import Container from "react-bootstrap/Container";

import UniqueCollectionCards from "./UniqueCollectionCards";

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
        <Container>
            <h2 className="poppins-boldItalic">Our Unique Collections</h2>
            {
                uniqueGuitar.map(guitarData => <UniqueCollectionCards
                key={guitarData.uk}
                guitarObject={guitarData}
                ></UniqueCollectionCards>)
            }
        </Container>
    )
}
export default UniqueCollections