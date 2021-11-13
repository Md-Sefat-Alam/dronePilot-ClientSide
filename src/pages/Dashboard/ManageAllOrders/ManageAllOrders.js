import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import ShowOrders from '../ShowOrders/ShowOrders';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `https://hidden-taiga-02605.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
        console.log(myOrders)
    }, [user])

    return (
        <div>
            <h4 className="header">Total Orders: {myOrders.length}</h4>

            <div class="row row-cols-1 row-cols-md-2 g-4">

                {
                    myOrders.map(order => <ShowOrders fromManageAllOrders='true' key={order._id} order={order}></ShowOrders>)
                }

            </div>
        </div>
    );
};

export default ManageAllOrders;