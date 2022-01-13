import React, { useState } from "react";
import Container from "react-bootstrap/Container";
/* import react-hook-form */
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

/* import css */
import "./LogIn.css"

function LogIn(){
        
    /* use react-hook form */
    const { register, handleSubmit, formState: { errors } } = useForm();

    /* on submit button click */
    const handleLogInSubmit = data =>{
        console.log(data)
    }
    return(
        <section className="logIn-section">
            <Container style={{padding:"4em"}}>
                <div className="logIn-form-container">
                    <img src="https://i.ibb.co/c2tVN7F/log-In-icon.png" alt="" />
                    <h2 className="primary-forground text-center mt-2 poppins-semiBold">Log In</h2>
                    <p className="poppins-regular color-gray-2 text-center">Sign In to your account</p>

                    {/* main logIn form */}
                    <form onSubmit={handleSubmit(handleLogInSubmit)} className="form-main">

                        <label htmlFor="email">Email</label>

                        {/* hendling email errors */}
                        {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}

                        {/* email input field */}
                        <input name="email" {...register("email", { required: 'email field is requird',
                        pattern : {
                            value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message : "invalid email"
                        }
                        })} type="email" placeholder="User E-mail"/>


                        {/* password field */}
                        <label htmlFor="password">Password</label>

                        {/* hendling password errors */}
                        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}


                        {/* password field validation */}
                        <input name="password"  type="password" {...register("password", { required: 'password field is requird',
                        pattern : {
                            value : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message : "Minimum eight characters, at least one letter and one number:"
                        }
                        })}placeholder="Password"/>

                        
                        {/* submit button */}
                        <input className="primary-background poppins-bold text-white" type="submit" value={"Log In"}/>
                        
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