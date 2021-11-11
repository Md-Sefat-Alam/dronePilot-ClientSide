import React from 'react';
import Nav from '../../Shared/Nav/Nav';

const Dashboard = () => {
    return (
        <div>
            <Nav />
            <div className='wrap-full-width products-section my-5'>
                <div className='content-wrapper text-white'>
                    {/* products section */}
                    <section className='py-3'>
                        <h5 className='header'>Products</h5>
                    </section>
                    {/* end products section */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;