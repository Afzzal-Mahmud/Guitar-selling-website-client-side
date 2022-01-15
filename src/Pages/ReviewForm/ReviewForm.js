import React from "react"
import Container from "react-bootstrap/Container"
import ContactUs from "../ContactUs/ContactUs"

/* import react-hook-form */
import { useForm } from "react-hook-form";

/* import css */
import './ReviewForm.css'

function ReviewForm() {
       /* use react-hook form */
       const { register, handleSubmit, formState: { errors } } = useForm();

       const handleReviewSubmit = (data) =>{
           console.log(data)
       }
    return(
        <section className="user-review-form-section">
            <Container>
            <h2 className="poppins-bold primary-forground py-4">Feedback Us</h2>
            <p className="poppins-regular color-gray-2 pb-2">Write us some feedback. For writing feedback you have to give a unique key of your review . It must have two uppercase letter and three number like (U5H42). Second, how many star you want to give and your cute description with in 20 word.Without logIn you cant be able to give us a review.</p>
            <form onSubmit={handleSubmit(handleReviewSubmit)} className="review-form-main">
                <div className="form-left-input">
                
                    <label className="poppins-medium" htmlFor="key" name="unique-key">Unique Key</label>

                    {/* hendling key errors */}
                    {errors.key && (<small className='text-danger'>{errors.key.message}</small>)}


                    <input type="text" {...register("key", { required: 'Two uppercase letter and max length 5',maxLength: 5,
                        pattern : {
                            value : /(?=.*[A-Z])/,
                            message : "Must contain Two UpperCase letter and max-Length 5"
                        }
                    })}/>


                    <label className="poppins-medium" htmlFor="name" name="name">Name</label>

                    {/* hendling name errors */}
                    {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}

                    <input {...register("name", { required: true })} type="text" />


                    <label className="poppins-medium" htmlFor="ratting" name="ratting">Ratting</label>

                    {/* hendling ratting errors */}
                    {errors.ratting && (<small className='text-danger'>{errors.ratting.message}</small>)}

                    <input {...register("ratting", { required: 'Add ratting One to Five',
                        pattern : {
                            value : /^[1-5]$/,
                            message : "Minimum 1 star, Maximum 5 star"
                        }
                        })} type="number" />


                    <label className="poppins-medium" htmlFor="description" name="description">Description</label>


                    <textarea name="description" htmlFor="description" {...register("name", { required: true })} cols="50" rows="4" placeholder="write at least 100 characters for aprove"></textarea>


                    {/* submit button */}
                    <input className="primary-background poppins-bold text-white" type="submit" value={"Add Review"}/>
                </div>
                <div className="form-right">
                    <img src="https://i.ibb.co/Tbzx0yL/Group-1.png" alt="" />
                </div>
            </form>
        </Container>
            {/* Contact form */}
            <ContactUs></ContactUs>
        </section>
    )
}
export default ReviewForm