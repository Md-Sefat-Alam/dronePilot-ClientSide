import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const url = 'http://localhost:7000/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [])

    const makeAdminHandle = async (uid) => {
        console.log('hitted', uid)
        const url = `http://localhost:7000/users/${uid}`;
        const res = await axios.put(url);
        console.log(res)
    }
    const removeAdminHandle = async (uid) => {
        console.log('hitted', uid)
        const url = `http://localhost:7000/users/${uid}?remove=true`;
        const res = await axios.put(url);
        console.log(res)
    }

    return (
        <div >
            <h5 className='header text-center'>Make Admin</h5>
            {
                userData.map(singleUser => <div key={singleUser.userIdentity} className="d-flex my-5 my-md-0 flex-column flex-md-row p-1 m-3 align-items-center justify-content-end">
                    <div activeClassName="userInfo" style={{
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
                        {
                            user.photoURL ? <img className='img-fluid' src={user.photoURL} alt='user' /> : <img className='img-fluid' src='https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg' alt='user' />
                        }

                    </div>
                    <div className='mx-2'>
                        <h5>{singleUser.name}</h5>
                    </div>
                    <div className='mx-2 text-secondary'>
                        <h5>[ {singleUser.email} ]</h5>
                    </div>
                    <div className='mx-2'>
                        {
                            singleUser?.access === 'admin' ? (singleUser?.userIdentity === 'RDkJH8x21AdDCMDYo4KxcU45Zef1') ? <div className='d-flex'> <h5 className='rounded-2 text-white bg-warning px-2 mx-1'>{singleUser.access}</h5> <button className='btn btn-sm btn-secondary mx-1' disabled>Remove Admin</button>
                            </div>
                                :
                                <div className='d-flex'> <h5 className='rounded-2 text-white bg-warning px-2 mx-1'>{singleUser.access}</h5> <button onClick={(e) => {
                                    removeAdminHandle(singleUser.userIdentity);
                                    e.target.innerText = 'Require Reload'
                                    e.target.setAttribute('disabled', 'true');
                                }} className='btn btn-sm btn-secondary mx-1'>Remove Admin</button>
                                </div>
                                :
                                <button onClick={(e) => {
                                    makeAdminHandle(singleUser.userIdentity);
                                    e.target.innerText = 'Require Reload'
                                    e.target.setAttribute('disabled', 'true');
                                }} className='btn btn-sm btn-secondary'>Make Admin</button>
                        }
                    </div>
                    {/* */}

                    <div>

                    </div>
                </div>)
            }

        </div>
    );
};

export default MakeAdmin;