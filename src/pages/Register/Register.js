import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import useAuth from '../../Hooks/useAuth';
import GoogleLogIn from '../Login/GoogleLogIn';
import { useLocation, useHistory } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { createUserUsingEmailPassword, setError, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleName = (e) => {
        if (e.target.value) {
            setName(e.target.value)
        }
    }
    const handlePass = (e) => {
        if (e.target.value.length < 6) {
            setPass('')
        } else {
            setPass(e.target.value);
        }
    }


    const handleRegistration = (e) => {
        e.preventDefault();
        if (pass && email) {
            createUserUsingEmailPassword(email, pass)
                .then((userCredential) => {
                    // Signed in
                    const userIdentity = userCredential?.user?.uid;
                    const url = 'https://hidden-taiga-02605.herokuapp.com'

                    axios.post(`${url}/add-user`, { name, email, userIdentity })
                        .then(res => {
                            console.log(res);
                            if (res.data.insertedId) {
                            }
                        })
                    e.target.reset();


                    alert('Register Successful')
                    history.push(redirect_uri)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    setError(errorCode)
                }).finally(() => setIsLoading(false));
        }
        else {
            alert('Set Strong Password');
            setPass('');
        }
    }
    return (
        <>
            <Nav></Nav>
            <div className='wrap-full-width register-section'>
                <div className='content-wrapper d-flex justify-content-center align-items-center'>
                    {/* products section */}
                    <section className='py-3'>
                        <div className=''>
                            <h5 className='header'>Register</h5>
                            <form onSubmit={handleRegistration}>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping">Name</span>
                                    <input onChange={handleName} required type="text" maxLength='42' className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping">Email</span>
                                    <input onChange={handleEmail} required type="email" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div className="input-group flex-nowrap my-4" style={{ minWidth: '300px' }}>
                                    <span className="input-group-text" id="addon-wrapping2">Password</span>
                                    <input onChange={handlePass} required type="password" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div>
                                    <input type='submit' value='Register' className='btn btn-primary' />
                                </div>
                            </form>
                            <hr />
                            <p className='text-white'>All ready have an account? <Link to='/login' className='inline'>Login</Link></p>
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

export default Register;