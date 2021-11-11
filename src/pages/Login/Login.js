import React, { useState } from 'react';
import './Login.css'
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import GoogleLogIn from './GoogleLogIn';
import { useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const { signInUsingEmailPassword, setUser, setError, setIsLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        if (e.target.value < 6) {
            setPass('')
        }
        else {
            setPass(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && pass) {
            signInUsingEmailPassword(email, pass)
                .then((userCredential) => {
                    // Signed in
                    setUser(userCredential.user)
                    history.push(redirect_uri)
                    alert('Login Successful')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    setError(errorCode)
                }).finally(() => setIsLoading(false))
        }
        else {
            setEmail('')
            setPass('')
            alert('Wrong Password')
        }
    }
    return (
        <>
            <Nav></Nav>
            <div className='wrap-full-width login-section'>
                <div className='content-wrapper d-flex justify-content-center align-items-center'>
                    {/* products section */}
                    <section className='py-3'>
                        <div className=''>
                            <h5 className='header'>Login</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping">Email</span>
                                    <input onBlur={handleEmail} required type="email" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping2">Password</span>
                                    <input onBlur={handlePass} required type="password" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div>
                                    <input type='submit' value='Login' className='btn btn-primary' />
                                </div>
                            </form>
                            <hr />
                            <p className='text-dark'>You don't have an account <Link to='/register' className='inline'>Register</Link></p>
                            <hr />
                            <GoogleLogIn></GoogleLogIn>
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