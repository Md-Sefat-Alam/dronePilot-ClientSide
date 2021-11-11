import React from 'react';
import './Home.css'
import Nav from '../../Shared/Nav/Nav';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <TopBanner />
            <div className='wrap-full-width products-section my-5'>
                <div className='content-wrapper text-white'>
                    {/* products section */}
                    <section className='py-3'>
                        <h5 className='header'>Products</h5>
                        <Products></Products>
                    </section>
                    {/* end products section */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;