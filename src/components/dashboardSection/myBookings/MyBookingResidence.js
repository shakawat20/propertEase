import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyBookingResidence = ({ type, price, email, _id,handleRemove ,handlePayment,name}) => {





    return (
        <div>
            <div className="card w-25 bg-base-100 shadow-xl">
                {/* <label type="button" onClick={handleRxmove} className='btn'> x</label> */}
                <div style={{textAlign:"end"}}> <button className='btn'style={{height:"-3px",width:"5px",marginRight:"8px",marginTop:"10px"}}  onClick={()=>handleRemove(_id)} >x</button></div>
               
                <div className="card-body">
                    <h2 className="card-title">{type}</h2>
                    <p>{price} $ </p>
                  


                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal" onClick={() => handlePayment( price, email, type,name )} className="btn">pay</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingResidence;