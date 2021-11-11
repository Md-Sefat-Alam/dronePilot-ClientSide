import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink activeClassName="" to='' className="navbar-brand">Drone Pilot</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to='/explore' className="nav-link">Explore</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to='/purchase' className="nav-link">Purchase</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex gap-5 text-white align-items-center'>
                        <div>
                            <NavLink activeClassName="active" className="nav-link" to='/dashboard'>Dashboard</NavLink>
                        </div>
                        <div>
                            <NavLink to='/login' activeClassName="userShow" style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'inline-block',
                                backgroundColor: 'lightgray',
                                textAlign: 'center',
                                verticalAlign: 'center',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}>
                                {/* <NavLink activeClassName="userShow" to='/login'>Login</NavLink> */}
                                <i class="fas fa-sign-in-alt fs-1 mt-1"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Nav;