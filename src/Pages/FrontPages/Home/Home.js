import React from "react";
import Container from "react-bootstrap/Container";

/* import home style */
import './Home.css'

/* import about us page to home page */
import AboutUs from '../AboutUs/AboutUs'
/* import Unique guitar Collection list on home page */
import UniqueCollections from "../UniqueCollections.js/UniqueCollections";
import Review from "../Review/Review";
import Footer from "../../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";

function Home() {
    return(
        <>
        <Container className='hero-container'>
            <div className='hero-main'>
                <p className='color-gray poppins-Regular'>EXPART DESIGNER MAKE YOUR GUITAR !</p>
                <h1 className='poppins-bold hero-title'>Some grate instrument <br className="hide-mobile"/> comes with grate <br className="hide-mobile"/> experience .</h1>
                <div className="hero-btn poppins-bold">
                    <NavLink to='/explore'>
                    <button className='primary-background explore-btn'>
                        Explore More</button>
                    </NavLink>

                    <NavLink to='feedback'>
                        <button>Contact Us</button>
                    </NavLink>
                </div>
            </div>
            <div className='hero-image'>
                <img src="https://i.ibb.co/87tjLph/guitar-home-removebg-preview.png"/>
            </div>
        </Container>

        {/* about page */}
        <AboutUs></AboutUs>

        {/* unique guitar collections list page */}
        <UniqueCollections></UniqueCollections>

        {/* Review page */}
        <Review></Review>

        {/* Footer */}
        <Footer></Footer>
        </>
    )
}
export default Home;