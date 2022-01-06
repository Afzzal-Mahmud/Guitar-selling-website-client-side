import Container from "react-bootstrap/Container";
/* import styleshet for about page */
import './AboutUs.css'

function AboutUs() {
    return(
        <Container className="about-us-container">
            
            {/* about us image which is hide on mobile view */}

                <img className="about-us-image" src="https://i.ibb.co/f9368RJ/about-us-image-1.png"/>
    
    {/* about us description */}

            <div className="about-us-text">
                <h2 className="poppins-boldItalic primary-forground">What we do ?</h2>
                <p className="text-gray poppins-regular">
                We sell guitar and guitar instrumant . We have sincerity to provide you best services. We provide you the best guitar technician. The last GunBangla guitar is design by us. So Anything related to guitar come to us .We will fix it for you .
                </p>
            </div>
        </Container>
    )
}
export default AboutUs;