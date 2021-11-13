import React, { useState, useEffect } from 'react';
import './Home.css'
import Nav from '../../Shared/Nav/Nav';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    const [product6, setProduct6] = useState([]);
    const url = 'http://localhost:7000/get-product/6';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct6(data))
    }, [])
    return (
        <div>
            <Nav></Nav>
            <TopBanner />
            <div className='wrap-full-width products-section my-5'>
                <div className='content-wrapper text-white'>
                    {/* products section */}
                    <section className='py-3'>
                        <h5 className='header'>Products</h5>
                        <div className="row row-cols-1 row-cols-md-3 g-1">
                            {
                                product6.map(product => <Products key={product._key} product={product}></Products>)
                            }
                        </div>
                    </section>
                    {/* end products section */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;