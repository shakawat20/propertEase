import React from 'react';
import './Orders.css'

const OrderRow = ({ booking, setRemoved,index }) => {
    
    const handleRemove = async (_id) => {

        await fetch(`https://regal-residence-server.vercel.app/orders/${_id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: _id })
        })
        .then(res => res.json())
            .then(data => setRemoved(data))


    }


    return (


        <tr style={{color:"black"}}>
            <th style={{color:"black"}}>{index + 1}</th>
            <td>{booking.name}</td>
            <td >{booking.email}</td>
            <td>{booking.type}</td>
            <td><button className='btn' onClick={()=>{
                
                
                handleRemove(booking._id)
            
            
            }}>remove</button></td>
        </tr>


    );
};

export default OrderRow;