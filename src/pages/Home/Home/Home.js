import React, { useState, useEffect } from 'react';
import './Home.css'
import Nav from '../../Shared/Nav/Nav';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../../Shared/Footer/Footer';
import { getRatingStars } from '../../Shared/RatingShow/rating';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth'



const Home = () => {
    const [product6, setProduct6] = useState([]);
    const [reviews, setReviews] = useState([])
    const url = 'https://hidden-taiga-02605.herokuapp.com/get-product/6';
    const { user } = useAuth();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        const url = 'http://localhost:7000/add-question';

        axios.post(`${url}`, data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Your Question Recorded');
                }
            })
        e.target.reset();

    };


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
                                product6.map(product => <Products key={product._key} product={product} fromManageProduct={false}></Products>)
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

                    <hr />
                    {/* Know About Drone section */}
                    <section className='py-3'>
                        <h5 className='header'>Know About Drone</h5>
                        <div className='text-dark'>
                            <h4>How Drones Work</h4>
                            <p>A typical unmanned aircraft is made of light composite materials to reduce weight and increase maneuverability. This composite material strength allows military drones to cruise at extremely high altitudes.</p>
                            <p>UAV drones are equipped with different state of the art technology such as infrared cameras, GPS and laser (consumer, commercial and military UAV). Drones are controlled by remote ground control systems (GSC) and also referred to as a ground cockpit.</p>
                            <p>An unmanned aerial vehicle system has two parts, the drone itself and the control system.</p>
                            <p>The nose of the unmanned aerial vehicle is where all the sensors and navigational systems are present. The rest of the body is full of drone technology systems since there is no space required to accommodate humans.</p>
                            <p>The engineering materials used to build the drone are highly complex composites designed to absorb vibration, which decrease the sound produced. These materials are very light weight.</p>
                            <h4>What Is A Drone And UAV Technology</h4>
                            <p>Below we examine the science and drone technology behind the DJI Phantom UAV.  We also have plenty of information on the latest drone technologies from the newest drones on the market.</p>
                            <p>Below we examine the science and drone technology behind the DJI Phantom UAV.  We also have plenty of information on the latest drone technologies from the newest drones on the market.</p>
                            <h4>Drone Types And Sizes</h4>
                            <p>UAV drones come in a wide variety of sizes, with the largest being mostly used for military purposes such as the Predator drone. The next in size are unmanned aircraft, which have fixed wings and require short runways.  These are generally used to cover large sections of land, working in areas such as geographical surveying or to combat wildlife poaching.</p>
                            <h4>VTOL Drones</h4>
                            <p>Next in size for drones are what is known as VTOL drones.  These are generally quadcopters but not all. VTOL drones can take off, fly, hover and land vertically. The exact meaning of VTOL is “Vertical Take-Off and Landing”.</p>
                            <p>Quite a few of the latest small UAV drones such as the DJI Mavic Air 2 take VTOL to the next level and can be launched from the palm of your hand</p>
                            <h4>Radar Positioning & Return Home</h4>
                            <p>The latest drones have dual Global Navigational Satellite Systems (GNSS) such as GPS and GLONASS.</p>
                            <p>Drones can fly in both GNSS and non satellite modes.  For example, DJI drones can fly in P-Mode (GPS & GLONASS) or ATTI mode, which doesn’t use GPS.</p>
                            <p>Highly accurate drone navigation is very important when flying, especially in drone applications such as creating 3D maps, surveying landscape and SAR (Search & Rescue) missions.</p>
                            <p>When the quadcopter is first switched on, it searches and detects GNSS satellites. High end GNSS systems use Satellite Constellation technology. Basically, a satellite constellation is a group of satellites working together giving coordinated coverage and are synchronized, so that they overlap well in coverage. Pass or coverage is the period in which a satellite is visible above the local horizon.</p>
                            <h4>UAV Drone GNSS On Ground Station Remote Controller</h4>
                            <p>The radar technology will signal the following on the remote controller display;</p>
                            <ul>
                                <li>Signal that enough drone GNSS satellites have been detected and the drone is ready to fly</li>
                                <li>Display the current position and location  of the drone in relation to the pilot</li>
                                <li>Record the home point for ‘Return To Home’ safety feature</li>
                                <li>Pilot initiated return to home by pressing button on Remote Controller or in an app</li>
                                <li>A low battery level, where the UAV will fly automatically back to the home point</li>
                                <li>Loss of contact between the UAV and Remote Controller, with the UAV flying back automatically to its home point</li>
                            </ul>
                        </div>
                    </section>
                    {/* end Know About Drone section */}


                    <hr />
                    {/* user Review section */}
                    <section className='py-3'>
                        <h5 className='header'>Have Any Questions?</h5>
                        <form className="row g-3 text-dark" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6">
                                <label for="userName4" className="form-label">Name</label>
                                <input {...register("name", { required: true })} type="name" className="form-control" id="userName4" />
                            </div>
                            <div className="col-md-6">
                                <label for="q_email" className="form-label">Email</label>
                                <input {...register("email", { required: true })} defaultValue={user.email} type="email" min='0' className="form-control" id="q_email" />
                            </div>
                            <div className="col-12">
                                <label for="q_question" className="form-label">Type Question in Details</label>
                                <textarea {...register("questions", { required: true })} className="form-control" id="q_question" placeholder="" />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit Question</button>
                            </div>
                        </form>
                    </section>
                    {/* end user Review section */}

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;