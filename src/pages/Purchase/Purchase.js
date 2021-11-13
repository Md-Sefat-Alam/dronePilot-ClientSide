import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Nav from '../Shared/Nav/Nav';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';


const Purchase = () => {
    const history = useHistory();

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user, admin } = useAuth();

    const { _id, name, description, price, imgURL } = product;

    const url = `https://hidden-taiga-02605.herokuapp.com/product/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])




    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)

        data.productId = _id;
        data.orderPerson = user.uid;
        data.orderStatus = 'pending';

        if (admin) {
            alert("admin user can't add Orders")
        }
        else {
            const url = 'https://hidden-taiga-02605.herokuapp.com/client-order';

            axios.post(`${url}`, data)
                .then(res => {
                    console.log(res);
                    if (res.data.insertedId) {
                        alert('Added successfully');
                    }
                    history.push('/dashboard/my-orders')
                })
            e.target.reset();
        }
    };

    return (
        <div>
            <Nav></Nav>
            <div className='wrap-full-width products-section my-5'>
                <div className='content-wrapper text-dark'>
                    {/* product detail section */}
                    <section className='py-3'>
                        <div className='d-flex flex-column flex-sm-row justify-content-center'>
                            <div>
                                <img style={{ maxHeight: '350px' }} src={imgURL} className='img-fluid' alt='product img' />
                            </div>
                            <div className='mx-3'>
                                <h5>Product: {name}</h5>
                                <p style={{ maxWidth: '350px' }}>Description: {description}</p>
                                <p>Price: <span className='text-success fw-bolder'>{price}</span> tk</p>
                            </div>
                        </div>
                    </section>
                    {/* end product detail section */}

                    {/* purchase section */}
                    <section className='py-3'>
                        <h5 className='header'>Purchase Now</h5>
                        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                                <label for="name1" className="form-label">Name</label>
                                <input {...register("clientName", { required: true })} defaultValue={user.name} type="text" className="form-control" id="name1" />
                            </div>
                            <div className="col-md-6">
                                <label for="price2" className="form-label">Email</label>
                                <input {...register("clientEmail", { required: true })} defaultValue={user.email} type="email" className="form-control" id="price2" />
                            </div>
                            <div className="col-12 col-md-3">
                                <label for="clientMobile" className="form-label">Phone</label>
                                <input  {...register("clientMobile", { required: true })} type="tel" className="form-control" id="clientMobile" placeholder="01700000000" />
                            </div>
                            <div className="col-3 col-md-1">
                                <label for="clientMobile" className="form-label">Quantity</label>
                                <input  {...register("quantity", { required: true })} type="number" min='0' defaultValue='1' className="form-control" id="clientMobile" placeholder="" />
                            </div>
                            <div className="col-12">
                                <label for="description3" className="form-label">Address</label>
                                <textarea {...register("clientAddress", { required: true })} className="form-control" id="description3" placeholder="" />
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

export default Purchase;