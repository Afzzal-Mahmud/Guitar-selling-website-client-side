import React, { useState } from "react";

function DashboardCard(props) {
    const {name,imageUrl,productType,productPrice} = props.cartObject
    console.log(props.cartObject)
    return(
        <div className="dashboard-card secondery-dark">
                        
                        {
                            productType === 'Acoustic Guitar' ?
                            <div className="dashboard-image-regular">
                            <img src={imageUrl} alt="product Image" />
                        </div>
                             :
                        <div className="dashboard-image-unique">
                            <img src={imageUrl} alt="product Image" />
                        </div>
                        }

                        <div className="dashboard-content">
                            <h4 className="poppins-semiBold">{name}</h4>
                            <h6 className="poppins-medium">Type : {productType}</h6>
                            <p className="poppins-regular">Price : Rs .{productPrice} </p>
                            <button className="secondery-background poppins-medium">Delete</button>
                        </div>
                    </div>
        // <h2>hello</h2>
    )
}
export default DashboardCard