import React, { useState, useEffect } from 'react';
import './Home.css'
import Nav from '../../Shared/Nav/Nav';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shared/Footer/Footer';
import { getRatingStars } from '../../Shared/RatingShow/rating';



const Home = () => {
    const [product6, setProduct6] = useState([]);
    const [reviews, setReviews] = useState([])
    const url = 'https://hidden-taiga-02605.herokuapp.com/get-product/6';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct6(data))
    }, [])


    useEffect(() => {
        const url = 'https://hidden-taiga-02605.herokuapp.com/get-review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
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

                    <hr />
                    {/* user Review section */}
                    <section className='py-3'>
                        <h5 className='header'>User Review</h5>
                        <div className="row row-cols-1 row-cols-md-3 g-1">

                            {
                                reviews.map(review => {
                                    const { ratingName, ratingEmail, ratingNumber, ratingText, uid } = review
                                    return (
                                        <div class="card w-100">
                                            <div class="card-body text-dark">
                                                <h5 class="card-title">{ratingName} -- <mall className='text-muted text-sm'>({ratingEmail})</mall></h5>
                                                <p class="card-text">{ratingText}</p>
                                                <p class="card-text">{getRatingStars(ratingNumber)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                    {/* end user Review section */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;