import Container from "react-bootstrap/Container";

/* import home style */
import './Home.css'

function Home() {
    return(
        <Container className='hero-container'>
            <div className='hero-main'>
                <p className='color-gray poppins-Regular'>EXPART DESIGNER MAKE YOUR GUITAR !</p>
                <h1 className='poppins-bold hero-title'>Some grate instrument <br /> comes with grate <br /> experience .</h1>
                <div className="hero-btn poppins-bold">
                    <button className='primary-background explore-btn'>
                        Explore More</button>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className='hero-image'>
                {/* <img src="https://i.ibb.co/BPRfnkg/guitar-home-removebg-preview.png"/> */}
                
                <img src="https://i.ibb.co/87tjLph/guitar-home-removebg-preview.png"/>
            </div>
        </Container>
    )
}
export default Home;