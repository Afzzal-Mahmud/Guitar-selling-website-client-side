import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import useAuth from "../../Hooks/useAuth";
import DashboardCard from "../Dashboard/DashboardCard";

function Cart() {
    const { user } = useAuth()
    const [cartData, setCartData] = useState([])
    const history = useHistory()
    useEffect(() => {
        const url = `http://localhost:5000/usercart?email=${user.email}`
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setCartData(data)
                console.log(data)
            })
    }, [user.email])

    const handleShipping = () => {
        const proceed = window.confirm('Want to proceed ?')

        if (proceed) {
            const userEmail = user.email
            const email = { userEmail }
            fetch('http://localhost:5000/usercart/update', {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(email)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        alert('Your ordar placed successfully Make sure you do not delete your product. Wait for our confirmation')
                        history.push('/confirmation')
                    }
                })
        }
    }

    return (
        <section className="dashboard-product secondery-background">
            {cartData?.length !== 0 ?
                <Container>
                    <h2 className="text-center poppins-semiBold">Your Order</h2>

                    <Button onClick={handleShipping} style={{ display: "flex", margin: "0 auto", marginBottom: "2em" }} className=" poppins-semiBold primary-background">Proced Shipping</Button>

                    {/* dashbord-grid */}
                    <div className="dashboard-grid">
                        {
                            cartData.map(dashboardData => <DashboardCard
                                key={dashboardData._id}
                                cartObject={dashboardData}
                                userCart={cartData}
                                setUserCart={setCartData}
                            ></DashboardCard>)
                        }
                    </div>
                </Container>
                :
                <h1 style={{ paddingTop: "5em" }} className="poppins-semiBold text-center">You had no order yet</h1>
            }
        </section>
    )
}
export default Cart