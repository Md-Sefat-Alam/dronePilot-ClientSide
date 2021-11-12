import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import useAuth from '../../../Hooks/useAuth'
import DashboardHome from '../DashboardHome/DashboardHome'
import DashboardMyOrders from '../DashboardMyOrders/DashboardMyOrders'
import DashboardPay from '../DashboardPay/DashboardPay'
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct'

import {
    Switch,
    Route,
    NavLink,
    Link,
    useRouteMatch
} from "react-router-dom";
import Review from '../Review/Review';

const Dashboard = () => {
    const { logOut, user, setIsLoading } = useAuth();
    let { path, url } = useRouteMatch();

    const [userData, setUserData] = useState([])

    // useEffect(() => {
    //     const url = 'http://localhost:7000/users'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    const { uid } = user;
    useEffect(() => {
        // setIsLoading(true);
        const url = `http://localhost:7000/users/${uid}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                console.log(data)
            })
            .finally(() => {
                // setIsLoading(false)
            })
    }, [])

    console.log(userData.access)

    return (
        <div>
            <nav class="container-fluid navbar navbar-dark bg-dark fixed-top">
                <div class="container d-flex justify-content-between">
                    <div>
                        <span class="navbar-toggler-icon fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" style={{ cursor: 'pointer' }}></span>
                    </div>
                    <div>
                        <h3 className='text-white fw-bolder'>Dashboard</h3>
                    </div>
                </div>
            </nav>
            {/* Dashboard Nav end */}

            <div class="offcanvas offcanvas-start bg-dark text-white" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                    <button type="button" class="btn-close text-reset bg-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            width: '50%',
                            height: '50%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}>
                            {
                                user.photoURL ? <img className='img-fluid' src={user.photoURL} alt='user' /> : <img className='img-fluid' src='https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg' alt='user' />
                            }
                        </div>
                        <div className='text-center'>
                            {userData?.access === 'admin' && <span className='border-3 bg-warning fw-bold rounded-pill px-2 m-1 d-inline-block'>admin</span>}
                            {user?.displayName ? <h5>{user?.displayName}</h5> : userData?.name && <h5>{userData?.name}</h5>}
                            {user.email && <h6>{user.email}</h6>}
                        </div>
                    </div>
                    <hr />
                    <div>
                        {
                            userData.access === 'admin' ? <div>
                                <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/home`}>Dashboard Home</NavLink>

                                <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/manage-all-orders`}>Manage All Orders</NavLink>

                                <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/add-product`}>Add a Product</NavLink>

                                <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/make-admin`}>Make Admin</NavLink>

                                <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/manage-product`}>Manage Product</NavLink>
                            </div>
                                :
                                <div>
                                    <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/home`}>Dashboard Home</NavLink>

                                    <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/my-orders`}>My Orders</NavLink>

                                    <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/pay`}>Pay</NavLink>

                                    <NavLink activeClassName="dashSelected" className='d-block p-1 cursor-pointer hover-red text-decoration-none bg-white text-dark fw-bold my-2 rounded' data-bs-dismiss="offcanvas" to={`${url}/review`}>Review</NavLink>

                                </div>
                        }
                        <Link to='/home' className='btn btn-secondary btn-sm m-2'>Go to Home</Link>
                        <button onClick={logOut} className='btn btn-danger btn-sm m-2'>Log out</button>
                    </div>
                </div>
            </div>
            {/* Dashboard side bar end */}


            <div className='wrap-full-width products-section my-5'>
                <div className='container content-wrapper'>
                    {/* products section */}
                    <section className='py-3'>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/home`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/my-orders`}>
                                <DashboardMyOrders></DashboardMyOrders>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <DashboardPay></DashboardPay>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/manage-all-orders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/add-product`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/make-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/manage-product`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </section>
                    {/* end products section */}
                </div>
            </div>

        </div>
    );
};

export default Dashboard;