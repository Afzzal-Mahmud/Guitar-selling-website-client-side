import React from "react";
import { Container } from "react-bootstrap";

/* import social-media icon from react-bootstrap */
import { Facebook, Instagram, Telegram, Twitter, Whatsapp } from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return(
        <div className='footer'>
            <Container className='footer-main text-white'>
                <div className="footer-contact">
                    {/* the left side of the footer */}
                    <div className="contact-info">
                    <h3 className='fw-bold poppinsBoldItalic primary-forground'>Guitar !</h3>
                    <p>1901 Street Road Jaintapur Sylhet</p>
                    <p>Call : 017-123456789</p>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                    <Facebook/>
                    <Twitter/>
                    <Whatsapp/>
                    <Instagram/>
                    <Telegram/>
                    </div>
                </div>
                <div className="footer-link">
                    <h4>Useful Link</h4>
                    <div className="link-container">
                        <p><Link className='text-white' to='/home'>Home</Link></p>
                        <p><Link className='text-white' to='/explore'>Explore</Link></p>
                        <p><Link className='text-white' to='/yourcart'>Your Cart</Link></p>
                        <p><Link className='text-white' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;