import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Register(){
    const [registerData,setRegisterData] = useState({})
    /* handle onChange of input field */
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)

        const newRegisterData = {...registerData}
        newRegisterData[field] = value;

        setRegisterData(newRegisterData)
    }
    /* on submit button click */
    const handleRegisterSubmit = e =>{
        e.preventDefault()
        if(registerData.password !== registerData.password2){
            alert("your password did not match")
            return
        }
        alert('working register')
    }
    return(
        <section className="logIn-section">
            <Container style={{padding:"4em"}}>
                <div className="logIn-form-container">
                    <img src="https://i.ibb.co/c2tVN7F/log-In-icon.png" alt="" />
                    <h2 className="primary-forground text-center mt-2 poppins-semiBold">Register Account</h2>
                    <p className="poppins-regular color-gray-2 text-center">Please register your account</p>

                    {/* main logIn form */}
                    <form onSubmit={handleRegisterSubmit} className="form-main">
                        <label htmlFor="name">name</label>
                        <input name="name" onChange={handleOnChange} type="email" placeholder="User name"/>

                        <label htmlFor="email">Email</label>
                        <input name="email" onChange={handleOnChange} type="email" placeholder="User E-mail"/>

                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={handleOnChange} type="password" placeholder="Password"/>

                        <label htmlFor="password">Confirm password</label>
                        <input name="password2" onChange={handleOnChange} type="password" placeholder="retype password"/>

                        {/* <NavLink to="/home"> */}
                        <input className="primary-background poppins-bold text-white" type="submit" value={"Register"}/>
                        {/* </NavLink> */}
                    </form>
                    <div className="extra-link">
                    <NavLink to="/home">Sign Up With Google</NavLink>
                    <NavLink to="/login">already have account ?</NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Register;