import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';

const Register = () => {
    return (
        <>
            <Nav></Nav>
            <div className='wrap-full-width register-section'>
                <div className='content-wrapper d-flex justify-content-center align-items-center'>
                    {/* products section */}
                    <section className='py-3'>
                        <div className=''>
                            <h5 className='header'>Register</h5>
                            <form>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping">Email</span>
                                    <input required type="email" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping2">Password</span>
                                    <input required type="password" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div>
                                    <input type='submit' value='Register' className='btn btn-primary' />
                                </div>
                            </form>
                            <hr />
                            <p className='text-dark'>All ready have an account? <Link to='/login' className='inline'>Login</Link></p>
                        </div>
                    </section>
                    {/* end products section */}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;