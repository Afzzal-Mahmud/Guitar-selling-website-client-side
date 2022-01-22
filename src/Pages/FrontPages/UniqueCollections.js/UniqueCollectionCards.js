import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
function UniqueCollectionCards(props) {
    const {user} = useAuth();
    const userEmail = user.email
    const {name,image,price,description} = props.guitarObject

    /* if user is not logIn redirect to logIn page */
    const history = useHistory()
    const handleLogInRedirect = () =>{
        history.push('/login')
    }

    const handleAddToCart = () =>{
        const orderItem = {
            name : name,
            imageUrl : image,
            productPrice : price,
            email : userEmail,
            productType : 'Acoustic Unique Guitar'
        }
        console.log(orderItem)

        /* send product data to the server */
        fetch('https://fierce-beyond-84290.herokuapp.com/cart',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert(`${name} guitar added successfully.See that on Dashboard page`)
                    history.push('/cart')
                }
            })
    }

    return(
        <>
        <div className="guitar-card-body">
            <img className="card-image" src={image}/>

            <div className="card-content">
                <h3 className="poppins-semiBold secondery-forground">{name}</h3>
                <h4 className="poppins-semiBold secondery-black">Rs. {price}</h4>
                <p>{name}, {description}</p>

                {/* apply condition to see deshboard */}
                {
                        userEmail ?
                            <button className="primary-background poppins-semiBold" onClick={handleAddToCart}>Add to Cart</button> 
                        : 
                        <button className="primary-background poppins-semiBold" onClick={handleLogInRedirect}>Add to Cart</button>
                    }
            </div>
        </div>
        </>
    )
}
export default UniqueCollectionCards