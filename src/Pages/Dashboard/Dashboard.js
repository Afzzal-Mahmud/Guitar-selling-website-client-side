import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './Dashboard.css'
import DashboardCard from "./DashboardCard";
import useAuth from '../../Hooks/useAuth'

function Dashboard () {
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
        <>
        <section className="dashboard-section">
            <Container style={{padding: "2em 0"}}>
            <div className="user-profile-container">
                {/* slide image class used on ReviewCard.js components */}
                <div className="slide-image">
                    <img src="https://i.ibb.co/12RSRdT/imagesone.jpg" alt="userDynamicImage" />
                </div>
                <h5 className="poppins-medium">afzzal</h5>
                <h6 className="poppins-medium">afzzalmahmud@gmail.com</h6>
                <p className="poppins-regular">Thanks for joining with us make sure you subscribe our Newsletter for more updated about guitar</p>

                <Button className="primary-background poppins-medium">Newsletter</Button>
            </div>
        </Container>
        </section>
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
        </>
    )
}
export default Dashboard