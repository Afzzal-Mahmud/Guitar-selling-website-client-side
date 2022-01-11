import React from "react";

/* import container from bootstrap */
import Container from "react-bootstrap/Container";

/* import stylesheet */
import "./ContactUs.css"

function ContactUs() {
    return(
        <Container className="contact-us-section">
            <h2 className="poppins-bold primary-forground">Contact Us</h2>
            <p className="color-gray-2">Get in touch with us. Discuss about your problem and get solution.</p>

            <form className="contact-form-main">

                <div className="contact-form-image">
                    <img src="https://i.ibb.co/pzZnxzv/contact-us-image-1-2.png" alt="" />
                </div>

                <div>
                    <label className="poppins-medium" htmlFor="name">Name</label>
                    <input type="text" />

                    <label className="poppins-medium" htmlFor="email">E-mail</label>
                    <input type="email" />
                    
                    <label className="poppins-medium" htmlFor="description">Why Us</label>
                    <textarea name="description" cols="50" rows="4"></textarea>
                </div>
            </form>
        </Container>
    )
}
export default ContactUs