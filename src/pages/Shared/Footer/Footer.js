import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' footer'>
            <div class="container" style={{ overflow: 'hidden' }}>
                <div className='text-center pb-4'>
                    <Link to='/home' style={{ textDecoration: 'none', userSelect: 'none' }} className='text-dark fw-bolder fs-1'>Drone <span className='text-warning'>Pilot</span> </Link>
                </div>
                <div class="row"
                    style={{
                        minHeight: '250px'
                    }}
                >
                    <div class="col">
                        <h5 className='heading-footer'>Explore</h5>
                        <ul className='footer-explore'
                            style={{
                                listStyle: 'none',
                            }}
                        >
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/explore'>Products</Link></li>
                            <li><Link to='purchase'>Purchase</Link></li>
                            <li><Link to='dashboard'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5 className='heading-footer'>Follow</h5>
                        <ul className='footer-explore'
                            style={{
                                listStyle: 'none',
                            }}
                        >
                            <li><a target='_blank' rel='noreferrer' href='https://www.facebook.com/'><i class="fab fs-3 fa-facebook-square"></i> Facebook</a></li>
                            <li><a target='_blank' rel='noreferrer' href='https://www.youtube.com/'><i class="fab fs-3 fa-youtube-square"></i> Youtube</a></li>
                            <li><a target='_blank' rel='noreferrer' href='https://www.twitter.com/'><i class="fab fs-3 fa-twitter-square"></i> Twitter</a></li>
                            <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/'><i class="fab fs-3 fa-linkedin"></i> LinkedIn</a></li>
                            <li><a target='_blank' rel='noreferrer' href='https://www.instagram.com/'><i class="fab fs-3 fa-instagram-square"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5 className='heading-footer'>Contact</h5>
                        <ul className='footer-explore'
                            style={{
                                listStyle: 'none',
                            }}
                        >
                            <li><i class="fas fa-phone-square-alt"></i> <span>+880100000000</span></li>
                            <li><i class="fas fa-tty"></i> <span>50860000</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-center fw-bolder'>&copy; All Right Reserved By <Link to='/home' style={{ textDecoration: 'none', userSelect: 'none' }} className='text-dark fw-bolder fs-6'>Drone <span className='text-warning'>Pilot</span> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;