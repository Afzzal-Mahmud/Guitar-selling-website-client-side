import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import ViewUserProductCard from "./ViewUserProductCard";
import './userProduct.css'

function ViewUserProduct() {
    const [loadUserOrder,setLoadUserOrder] = useState([])

    useEffect(()=>{
        fetch('https://fierce-beyond-84290.herokuapp.com/allusercartdata')
        .then(Response => Response.json())
        .then(data => {
            setLoadUserOrder(data)
            console.log(data)
        })
    },[])
    // console.log(loadUserOrder,'check')
    return(
        <section>
            <Container>
            <h2 className="poppins-boldItalic user-title">See all your users order</h2>
                <div className="user-product-grid">
                    {
                        loadUserOrder.map(userData => <ViewUserProductCard
                        key={userData._id}
                        userDataObject={userData}
                        allUserOrdersMain={loadUserOrder}
                        setLoadUserOrder={setLoadUserOrder}></ViewUserProductCard>)
                    }
                </div>
            </Container>
        </section>
    )
}
export default ViewUserProduct