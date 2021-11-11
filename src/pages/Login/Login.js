import React from 'react';
import './Login.css'
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Nav></Nav>
            <div className='wrap-full-width login-section'>
                <div className='content-wrapper d-flex justify-content-center align-items-center'>
                    {/* products section */}
                    <section className='py-3'>
                        <div className=''>
                            <h5 className='header'>Login</h5>
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
                                    <input type='submit' value='Login' className='btn btn-primary' />
                                </div>
                            </form>
                            <hr />
                            <p className='text-white'>You don't have an account <Link to='/register' className='inline'>Register</Link></p>
                        </div>
                    </section>
                    {/* end products section */}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;