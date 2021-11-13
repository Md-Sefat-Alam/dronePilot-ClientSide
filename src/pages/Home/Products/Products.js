import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
import { useHistory } from 'react-router';

const Products = ({ fromManageProduct, product }) => {
    const history = useHistory();

    const { name, price, description, imgURL, _id } = product;
    // "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"


    const handleDeleteProduct = (productId) => {
        const confirmation = window.confirm("Are you sure you want to Delete this Product?")
        if (confirmation) {
            // const url = `https://hidden-taiga-02605.herokuapp.com/products/${productId}`
            const url = `https://hidden-taiga-02605.herokuapp.com/products/${productId}`
            axios.delete(url)
                .then(response => {
                    if (window.confirm('Deleted Successful. Want to Reload?')) {
                        history.go(0)
                    }
                })
                .catch(error => {

                });
        }
        return confirmation;
    }
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
                {
                    fromManageProduct ? <div className='card-body'>
                        <button onClick={(e) => {
                            e.target.setAttribute('disabled', 'true')
                            if (handleDeleteProduct(_id)) {
                                e.target.setAttribute('disabled', 'true')
                            }
                            else {
                                e.target.removeAttribute('disabled');
                            }
                        }} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                        :
                        <div className="card-body">
                            <Link className='btn btn-warning' to={`/purchase/${_id}`}>Buy Now</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Products;