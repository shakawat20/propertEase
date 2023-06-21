import React from 'react';
import './Service.css'

const Service = ({title,price,description,img}) => {
    return (
        <div className='card' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  ,border:"2px solid gray" ,borderRadius:"10px",padding:"15px" ,height:"340px",width:"350px"}} >
            <img src={img} style={{height:"80px",width:"80px"}} alt="" />
            <h1 className='font-bold text-3xl'>{title}</h1>
            <h1 className='font-bold text-3xl'>{price}</h1>
            <p style={{ textAlign: 'justify', lineHeight: '1.5', fontSize: '15px', padding:"4px" }}>{description}</p>
        </div>
    );
};

export default Service;
