import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';

const DashboardReview = () => {
    // const [product, setProduct] = useState({});
    const { user, admin } = useAuth();
    const [ratingCheck, setRatingCheck] = useState('')
    console.log(ratingCheck, 'from cheker')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)

        data.uid = user.uid;
        data.ratingNumber = ratingCheck;

        if (admin) {
            alert("admin user can't add Review")
        }
        else {
            if (ratingCheck) {
                const url = 'https://hidden-taiga-02605.herokuapp.com/add-review';

                axios.post(`${url}`, data)
                    .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                            alert('Added successfully');
                        }
                    })
                e.target.reset();
            }
            else {
                alert('Rating fill carefully')
            }
        }
    };

    const handleRatingInput = (e) => {
        const inputValue = e.target.value;
        console.log(inputValue)
        if (!isNaN(inputValue)) {
            if (inputValue >= 0 && inputValue <= 5) {
                setRatingCheck(inputValue)
            }
            else {
                setRatingCheck('')
            }
        }
        else {
            setRatingCheck('')
        }
    }
    return (
        <div>
            <div className='wrap-full-width products-section my-5'>
                <div className='content-wrapper text-dark'>
                    {/* rating section */}
                    <section className='py-3'>
                        <h5 className='header'>Please Add a Review</h5>
                        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                                <label for="name1" className="form-label">Name</label>
                                <input {...register("ratingName", { required: true })} defaultValue={user.name} type="text" className="form-control" id="name1" />
                            </div>
                            <div className="col-md-6">
                                <label for="price2" className="form-label">Email</label>
                                <input {...register("ratingEmail", { required: true })} defaultValue={user.email} type="email" className="form-control" id="price2" />
                            </div>
                            {/* রেটিং আর রিভিউ একই সাথে দেওয়া হল। আলাদা দিলে maintain করা যাবে না। কে কন rating দিলো কি অনুসারে দেখাবো অনেক সমস্যা, তাই একই সাথে দিলাম */}
                            <div className="col-12 col-md-3">
                                <label for="clientMobile" className="form-label">Rating in Number</label>
                                <input onChange={handleRatingInput} type="tel" className="form-control" id="clientMobile" placeholder="max 5 amd min 0" />
                            </div>
                            <div className="col-12">
                                <label for="description3" className="form-label">Rating Text</label>
                                <textarea {...register("ratingText", { required: true })} className="form-control" id="description3" placeholder="" />
                            </div>

                            {errors.exampleRequired && <span>This field is required</span>}

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Purchase</button>
                            </div>
                        </form>
                    </section>
                    {/* end purchase section */}
                </div>
            </div>
        </div>
    );
};

export default DashboardReview;