import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ShowOrders = ({ order, fromManageAllOrders }) => {
    const { clientName, clientEmail, clientMobile, quantity, clientAddress, productId, orderPerson, _id } = order
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://hidden-taiga-02605.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])


    const handleCancelOrder = (orderId) => {
        const confirmation = window.confirm("Are you sure you want to cancel this order?")
        if (confirmation) {
            const url = `https://hidden-taiga-02605.herokuapp.com/my-orders/${orderId}`
            axios.delete(url)
                .then(response => alert('Remove Successful'))
                .catch(error => {

                });
        }
        return confirmation
    }

    const handleShippingProduct = (productId) => {
        const confirmation = window.confirm('You Confirm Product Shipped?')
        if (confirmation) {
            const url = `https://hidden-taiga-02605.herokuapp.com/orders-status/${productId}`;
            axios.put(url)
                .then(response => console.log(response))
                .catch(error => {
                    console.error('There was an error!', error.code);
                });
        }
        return confirmation;
    }

    return (
        <div class="col">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={product.imgURL} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h6 class="card-title">{product.name}</h6>
                            <p class="card-text py-0 my-0">Client Name: {clientName}</p>
                            <p class="card-text py-0 my-0">Email: {clientEmail}</p>
                            <p class="card-text py-0 my-0">Mobile: {clientMobile}</p>
                            <p class="card-text py-0 my-0">Price: {product.price} tk</p>
                            <p class="card-text py-0 my-0">Quantity: {quantity}</p>
                            {
                                order.orderStatus ? order.orderStatus === 'pending' ? <p class="card-text py-0 my-0">Status: <span className="bg-warning px-2 py-0 text-white fw-bold rounded text-uppercase">pending</span></p>
                                    :
                                    <p class="card-text py-0 my-0">Status: <span className="bg-success px-2 py-0 text-white fw-bold rounded text-uppercase">Shipped</span></p>
                                    :
                                    <p class="card-text py-0 my-0">Status: <span className="bg-warning px-2 py-0 text-white fw-bold rounded text-uppercase">pending</span></p>
                            }

                            {
                                fromManageAllOrders ? order.orderStatus === 'shipped' ? <div>
                                    <button className='btn btn-success text-uppercase my-2 fw-bolder' disabled>{order.orderStatus}</button>
                                </div>
                                    :
                                    <div>
                                        <button onClick={(e) => {
                                            e.target.setAttribute('disabled', 'true')
                                            if (handleShippingProduct(_id)) {
                                                e.target.setAttribute('disabled', 'true')
                                            }
                                            else {
                                                e.target.removeAttribute('disabled');
                                            }

                                        }} className='btn btn-success text-uppercase btn-sm my-2'>{order.orderStatus ? order.orderStatus : "pending"}</button>

                                    </div>
                                    :
                                    <button onClick={(e) => {
                                        e.target.setAttribute('disabled', 'true')
                                        if (handleCancelOrder(_id)) {
                                            e.target.setAttribute('disabled', 'true')
                                        }
                                        else {
                                            e.target.removeAttribute('disabled');
                                        }

                                    }} className='btn btn-danger btn-sm my-2'>Cancel Order</button>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOrders;