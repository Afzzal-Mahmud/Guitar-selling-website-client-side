import React, { useEffect, useState } from "react";
/* import container from react */
import Container from "react-bootstrap/Container";
/* import stylesheet */
import './ReviewCss.css'

/* import slick slider js */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ReviewCard from "./ReviewCard";

function Review() {
    /* slick responsive */
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    /* fetching data */
    const [personReview,setPersonReview]=useState([])

    useEffect(()=>{
        fetch('./personreview.json')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setPersonReview(data)
        })
    },[])
    return(
        <section className="primary-background review-section">
            <Container className="review-container pt-4">
            <h2 className="poppins-boldItalic">Review</h2>
            <p>Hear some review of our customer</p>
        
        <Slider {...settings}>
                {
                    personReview.map(reviewData => <ReviewCard
                    key={reviewData.uk}
                    reviewObject={reviewData}>
                    </ReviewCard>)
                }
        </Slider>
            
        </Container>
        </section>
    )
}
export default Review;