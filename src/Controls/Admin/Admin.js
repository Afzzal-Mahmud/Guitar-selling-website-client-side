import React from "react";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import './Admin.css';

function Admin() {
    /* use react-hook form */
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    /* for make admin */
    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
      } = useForm();

    const handleAddProduct = (data) => {
        console.log(data)
    }
    const handleMakeAdmin = (data) =>{
        console.log(data)
    }
    return (
        <section>
            <Container>
                <div className="admin-panel-main">

                    <div className="make-new-admin-panel">
                        <img src="https://i.ibb.co/KwYm6fY/admin.png" alt="" />

                        {/* admin form */}

                        <h2 className="poppins-medium">Make Admin</h2>

                        <form onSubmit={handleSubmit2(handleMakeAdmin)}>
                            <label className="poppins-medium admin-form-label" htmlFor="email">Email</label>

                            {/* hendling email errors */}
                            {errors2.email && (<small className='text-danger'>{errors2.email.message}</small>)}

                            {/* email input field */}
                            <input name="email" {...register2("email", {
                                required: 'Email field is requird',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "invalid email Email field is requird"
                                }
                            })} type="email" placeholder="New admin email" />

                            {/* submit button */}
                            <input className="primary-background poppins-bold text-white" type="submit" value={"Make Admin"} />
                        </form>

                    </div>


                    <div className="add-product-panel">
                        <h2 className="poppins-medium">Add Product</h2>
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div>

                                <label className="poppins-medium" htmlFor="name" name="name">Product Name</label>

                                {/* hendling name errors */}
                                {errors.name && (<small className='text-danger'>{errors.name.message}</small>)}

                                <input {...register("name", { required: true })} type="text" />


                                <label className="poppins-medium" htmlFor="price" name="price">Product Price</label>

                                {/* hendling ratting errors */}
                                {errors.price && (<small className='text-danger'>{errors.price.message}</small>)}

                                <input {...register("price", {
                                    required: 'Product price is requerd',
                                    pattern: {
                                        value: /^[1-9]+[0-9]*$/,
                                        message: "Product minimu price start with $1"
                                    }
                                })} type="number" />


                                <label className="poppins-medium" htmlFor="description" name="description">Product Description</label>


                                <textarea name="description" htmlFor="description" {...register("description", { required: true })} cols="50" rows="4" placeholder="Write your product description"></textarea>


                                {/* submit button */}
                                <input className="primary-background poppins-bold text-white" type="submit" value={"Add Product"} />
                            </div>
                        </form>
                    </div>

                </div>
            </Container>
        </section>
    )
}
export default Admin