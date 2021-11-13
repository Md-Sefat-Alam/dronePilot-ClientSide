import React, { useEffect, useState } from 'react';
import Products from '../../Home/Products/Products';
import Nav from '../../Shared/Nav/Nav';

const Explore = () => {
    const [products, setProducts] = useState([]);

    const url = 'https://hidden-taiga-02605.herokuapp.com/products';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Nav></Nav>
            <div className='wrap-full-width'>
                <div className='content-wrapper'>
                    <div className="row row-cols-1 row-cols-md-3 g-1">
                        {
                            products.map(product => <Products key={product._key} product={product}></Products>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Explore;