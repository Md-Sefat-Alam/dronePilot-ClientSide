import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-dark">Card title</h5>
                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="">ratings</li>
                <li className="">price</li>
            </ul>
            <div className="card-body">
                <Link className='btn btn-warning' to='/purchase'>Buy Now</Link>
            </div>
        </div>
    );
};

export default Products;