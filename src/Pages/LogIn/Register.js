import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

/* import react hook form */
import { useForm } from "react-hook-form";


function Register(){
    /* use react-hook form */
    const { register, handleSubmit, formState: { errors } } = useForm();

    /* on submit button click */
    const handleRegisterSubmit = data =>{
        // e.preventDefault()
        if(data.password !== data.password2){
            alert("your password did not match")
            return
        }
        // alert('working register data')
        console.log(data)
    }
    return(
        <section className="logIn-section">
            <Container style={{padding:"4em"}}>
                <div className="logIn-form-container">
                    <img src="https://i.ibb.co/c2tVN7F/log-In-icon.png" alt="" />
                    <h2 className="primary-forground text-center mt-2 poppins-semiBold">Register Account</h2>
                    <p className="poppins-regular color-gray-2 text-center">Please register your account</p>



                    {/* main logIn form */}
                    <form onSubmit={handleSubmit(handleRegisterSubmit)} className="form-main">

                        {/* name field */}
                        <label htmlFor="name">name</label>

                        <input name="name" type="text" {...register("name", { required: true })} placeholder="User name"/>


                        {/* email field */}
                        <label htmlFor="email">Email</label>

                        {/* hendling email errors */}
                        {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}


                        <input name="email" type="email" {...register("email", { required: 'email field is requird',
                        pattern : {
                            value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message : "invalid email"
                        }
                        })} placeholder="User E-mail"/>

                        

                        {/* password validation */}
                        <label htmlFor="password">Password</label>

                        {/* hendling password errors */}
                        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}


                        <input name="password" type="password" {...register("password", { required: 'password field is requird',
                        pattern : {
                            value : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message : "Minimum eight characters, at least one letter and one number:"
                        }
                        })} placeholder="Password"/>


                        {/* confirm password field */}
                        <label htmlFor="password">Confirm password</label>

                        <input name="password2" type="password" {...register("password2", { required: true })} placeholder="retype password"/>

                        
                        {/* submit button */}
                        <input className="primary-background poppins-bold text-white" type="submit" value={"Register"}/>
                        
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