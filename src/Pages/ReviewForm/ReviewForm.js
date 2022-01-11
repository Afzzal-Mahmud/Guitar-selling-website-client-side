import React from "react"
import Container from "react-bootstrap/Container"

/* import css */
import './ReviewForm.css'

function ReviewForm() {
    return(
        <section className="user-review-form-section">
            <Container>
            <h2 className="poppins-bold primary-forground py-4">Feedback Us</h2>
            <p className="poppins-regular color-gray-2 pb-2">Write us some feedback. For writing feedback you have to give a unique key of your review . It must have two uppercase letter and three number like (U5H42). Second, how many star you want to give and your cute description with in 20 word.Without logIn you cant be able to give us a review.</p>
            <form className="review-form-main">
                <div className="form-left-input">
                    <label className="poppins-medium" htmlFor="unique-key">Unique Key</label>
                    <input type="text" />
                    <label className="poppins-medium" htmlFor="name">Name</label>
                    <input type="text" />
                    <label className="poppins-medium" htmlFor="ratting">Ratting</label>
                    <input type="number" />
                    <label className="poppins-medium" htmlFor="description">Description</label>
                    <textarea name="description" cols="50" rows="4"></textarea>
                </div>
                <div className="form-right">
                    <img src="https://i.ibb.co/Tbzx0yL/Group-1.png" alt="" />
                </div>
            </form>
        </Container>
        </section>
    )
}
export default ReviewForm