import React from "react";

/* star ratting component */
import StarRatingComponent from "react-star-rating-component";

function ReviewCard(props) {
    const {imgUrl,description,name,starCount} = props.reviewObject
    return(
        <div className="slide-container">
                        <div className="slide-image">
                        <img src={imgUrl} alt="person image" />
                        </div>
                        <blockquote>{description}</blockquote>
                        <h3 className="slide-person-name poppins-medium">- {name}</h3>
                        {/* dynamic star components */}
                        <StarRatingComponent
                        name={'ratingStar'}
                        value={parseInt(starCount)}
                        starCount={5}/>
                    </div>
    )
}
export default ReviewCard