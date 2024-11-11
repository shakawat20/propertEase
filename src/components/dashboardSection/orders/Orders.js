import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Orders.css'
import OrderRow from './OrderRow';

const Orders = ({ home }) => {
    const [bookings, setBookings] = useState([])
    const [removed, setRemoved] = useState('')
    useEffect(() => {
        fetch('https://regal-residence-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [home, removed])





    // const handleRemove = async (_id) => {

    //     await fetch(`https://regal-residence-server.vercel.app/orders/${_id}`, {
    //         method: 'DELETE',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email: _id })
    //     })
    //         .then(res => res.json())
    //         .then(data => setRemoved(data))


    // }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead >
                        <tr style={{color:"black"}}>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Service</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map((booking, index) =>
                                <OrderRow index={index} booking={booking} setRemoved={setRemoved}  ></OrderRow>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;