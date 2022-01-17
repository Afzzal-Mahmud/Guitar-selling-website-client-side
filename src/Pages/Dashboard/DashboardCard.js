import React from "react";

function DashboardCard(props) {
    const {_id,name,imageUrl,productType,productPrice} = props.cartObject
    const cartData = props.userCart

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to delete ?')

        if(proceed){
            const url = `http://localhost:5000/usercart/${id}`
        fetch(url,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully')
                /* cartData and setUserCart comes from Dashboard as props */
                const remainingData = cartData.filter(data => data._id !==id)
                console.log(remainingData)
                props.setUserCart(remainingData)
            }
        })
        }  
    }
    return(
        <div className="dashboard-card secondery-dark">
                        {/* add conditional rendaring based on image */}
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
                            <button className="secondery-background poppins-medium" onClick={() => handleDelete(_id)}>Delete</button>
                        </div>
                    </div>
        // <h2>hello</h2>
    )
}
export default DashboardCard