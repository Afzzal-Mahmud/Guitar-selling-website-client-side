import React from "react";
function UniqueCollectionCards(props) {
    const {name,image,price,description} = props.guitarObject
    return(
        <>
        <div className="guitar-card-body">
            <img className="card-image" src={image}/>

            <div className="card-content">
                <h3 className="poppins-semiBold secondery-forground">{name}</h3>
                <h4 className="poppins-semiBold secondery-black">Rs. {price}</h4>
                <p>{description}</p>
                <button className="primary-background poppins-bold">Buy Now</button>
            </div>
        </div>
        </>
    )
}
export default UniqueCollectionCards