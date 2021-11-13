import React, { useState, useEffect } from 'react';
import Products from '../../Home/Products/Products'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const url = 'https://hidden-taiga-02605.herokuapp.com/products';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='wrap-full-width'>
            <div className='content-wrapper'>
                <h4 className="header">Manage Products</h4>
                <div className="row row-cols-1 row-cols-md-3 gy-4">
                    {
                        products.map(product => <Products key={product._key} product={product} fromManageProduct={true}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;