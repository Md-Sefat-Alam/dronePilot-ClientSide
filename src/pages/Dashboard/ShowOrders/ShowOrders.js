import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ShowOrders = ({ order }) => {
    const { clientName, clientEmail, clientMobile, quantity, clientAddress, productId, orderPerson, _id } = order
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://hidden-taiga-02605.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])


    const handleCancelOrder = (orderId) => {
        if (window.confirm("Are you sure you want to cancel this order?")) {
            const url = `https://hidden-taiga-02605.herokuapp.com/my-orders/${orderId}`
            axios.delete(url)
                .then(response => alert('Remove Successful'))
                .catch(error => {

                });
        }
    }
    return (
        <div class="col">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img style={{ opacity: '0.5' }} src={product.imgURL} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h6 class="card-title">{product.name}</h6>
                            <p class="card-text py-0 my-0">Client Name: {clientName}</p>
                            <p class="card-text py-0 my-0">Email: {clientEmail}</p>
                            <p class="card-text py-0 my-0">Mobile: {clientMobile}</p>
                            <p class="card-text py-0 my-0">Price: {product.price} tk</p>
                            <p class="card-text py-0 my-0">Quantity: {quantity}</p>
                            {order?.orderStatus && <p class="card-text py-0 my-0">Status: <span className="bg-warning px-2 py-1 text-white fw-bold rounded text-uppercase">{order.orderStatus}</span></p>}
                        </div>
                    </div>
                    <button onClick={() => handleCancelOrder(_id)} className='btn btn-danger'>Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default ShowOrders;