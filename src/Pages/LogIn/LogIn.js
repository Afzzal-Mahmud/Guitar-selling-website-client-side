import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

/* import css */
import "./LogIn.css"

function LogIn(){
    const [logInData,setLogInData] = useState({})
    /* handle onChange of input field */
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)

        const newLogInData = {...logInData}
        newLogInData[field] = value;

        setLogInData(newLogInData)
    }
    /* on submit button click */
    const handleLogInSubmit = e =>{
        e.preventDefault()
        alert('working')
    }
    return(
        <section className="logIn-section">
            <Container style={{padding:"4em"}}>
                <div className="logIn-form-container">
                    <img src="https://i.ibb.co/c2tVN7F/log-In-icon.png" alt="" />
                    <h2 className="primary-forground text-center mt-2 poppins-semiBold">Log In</h2>
                    <p className="poppins-regular color-gray-2 text-center">Sign In to your account</p>

                    {/* main logIn form */}
                    <form onSubmit={handleLogInSubmit} className="form-main">
                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={handleOnChange} type="email" placeholder="User E-mail"/>

                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={handleOnChange} type="password" placeholder="Password"/>

                        {/* <NavLink to="/home"> */}
                        <input className="primary-background poppins-bold text-white" type="submit" value={"Log In"}/>
                        {/* </NavLink> */}
                    </form>
                    <div className="extra-link">
                    <NavLink to="/register">
                        <button>Register Account</button>
                    </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default LogIn