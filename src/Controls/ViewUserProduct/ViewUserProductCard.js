import React from "react";

function ViewUserProductCard(props) {
    const {_id,name,email,productPrice,status} = props?.userDataObject
    const allUserOrders = props?.allUserOrdersMain

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to cancel this user order .This will be no longer see on her user profile?')

        if(proceed){
            const url = `https://fierce-beyond-84290.herokuapp.com/usercart/${id}`
        fetch(url,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully')
                /* cartData and setUserCart comes from Dashboard as props */
                const remainingData = allUserOrders.filter(data => data._id !==id)
                props.setLoadUserOrder(remainingData)
            }
        })
        }  
    }
    /* update status */
    // const handleUpdateStatus = (mail) =>{
    //     const proceed = window.confirm('Want to update the status ?')
    //     const userEmail = mail
        
    //     if (proceed) {
    //         const email = { userEmail }
    //         fetch('https://fierce-beyond-84290.herokuapp.com/usercart/updatestatus', {
    //             method: "PUT",
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(email)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.modifiedCount>0) {
    //                     alert('Update users all order status to successfull')
    //                     window.location.reload()
    //                 }
    //             })
    //     }
    // }
    return(
        /* use all dashboardCard css on this card */
        <div className="dashboard-content user-product-card">
                <h4 className="poppins-semiBold">{name}</h4>
                <h6 className="poppins-medium">Order from:  {email}</h6>
                <p className="poppins-regular">Price : Rs .{productPrice} </p>
                <div className="user-btn-group">
                <button className="secondery-background poppins-medium me-2" onClick={() => handleDelete(_id)}>Cancel</button>
                
                {status ? 
                <button className="secondery-background poppins-medium" 
                /* onClick={() => handleUpdateStatus(email)} */
                >{status}
                </button>
                :
                <button className="secondery-background poppins-medium">
                    not procced
                </button>
                }
                </div>
        </div>
    )
}
export default ViewUserProductCard