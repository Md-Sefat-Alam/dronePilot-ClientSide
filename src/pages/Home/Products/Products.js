import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({ product }) => {
    const { name, price, description, imgURL, _id } = product;
    // "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ maxHeight: '200px' }} src={imgURL} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-dark">{name}</h5>
                    <p className="card-text text-dark">S{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">price: {price}</li>
                </ul>
                <div className="card-body">
                    <Link className='btn btn-warning' to={`/purchase/${_id}`}>Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;