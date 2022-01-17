import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import useAuth from "../../Hooks/useAuth";
import DashboardCard from "../Dashboard/DashboardCard";

function Cart() {
    const {user} = useAuth()
    const [cartData,setCartData] = useState([])

    useEffect(() =>{
        const url = `http://localhost:5000/usercart?email=${user.email}`
        fetch(url)
        .then(Response => Response.json())
        .then(data => {
            setCartData(data)
            console.log(data)
        })
    },[user.email])

    return(
        <section className="dashboard-product secondery-background">
            <Container>
                <h2 className="text-center poppins-semiBold">Your Order</h2>

                {/* dashbord-grid */}
                <div className="dashboard-grid">
                    {
                        cartData.map(dashboardData => <DashboardCard
                        key={dashboardData._id}
                        cartObject = {dashboardData}
                        userCart = {cartData}
                        setUserCart = {setCartData}
                        ></DashboardCard>)
                    }
                </div>
            </Container>
        </section>
    )
}
export default Cart