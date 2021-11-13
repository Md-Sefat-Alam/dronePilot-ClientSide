import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)

        const url = 'https://hidden-taiga-02605.herokuapp.com/add-product';

        axios.post(`${url}`, data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added successfully');
                }
            })
        e.target.reset();

    };


    return (
        <div className='py-5'>
            <h5 className='header'>Add a New Product</h5>
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <label for="name1" className="form-label">Product Name</label>
                    <input {...register("name", { required: true })} type="name" className="form-control" id="name1" />
                </div>
                <div className="col-md-6">
                    <label for="price2" className="form-label">Price</label>
                    <input {...register("price", { required: true })} type="number" min='0' className="form-control" id="price2" />
                </div>
                <div className="col-12">
                    <label for="description3" className="form-label">Description</label>
                    <textarea {...register("description", { required: true })} className="form-control" id="description3" placeholder="" />
                </div>
                <div className="col-12">
                    <label for="imageURL" className="form-label">Image URL</label>
                    <input  {...register("imgURL", { required: true })} type="url" className="form-control" id="imageURL" placeholder="" />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;