import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyBookingResidence = ({ type, price, email, _id,handleRemove ,name,setInfo}) => {




    return (
        <div>
            <div className="card w-25 bg-white border-black text-black shadow-xl">
                {/* <label type="button" onClick={handleRxmove} className='btn'> x</label> */}
                <div style={{textAlign:"end"}}> <button style={{marginRight:"8px",marginTop:"10px",width:"29px",borderRadius:"5px",border:"1px solid gray"}}  onClick={()=>handleRemove(_id)} >x</button></div>
               
                <div className="card-body">
                    <h2 className="card-title">{type}</h2>
                    <p>{price} $ </p>
                  


                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal" onClick={() => setInfo( {price, email, type,name} )} className="btn text-black bg-white hover:bg-white">pay</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingResidence;