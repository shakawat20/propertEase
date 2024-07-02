import React, { useState } from 'react';
import StarRating from '../stars/StarRating';


import './Testimonial.css'

const Testimonial = ({ title, description, name, img }) => {  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value

  return (
    <div style={{ width: "367px", height: "287px" ,backgroundColor:"white",color:"black"}} >
      <div className='flex'>
        <img src={img} alt="" style={{ width: "64px", height: "64px", borderRadius: "50%",marginBottom:"20px"  }} />
        <div style={{ margin: "10px" }}>
          <h1 >{name}</h1>
          <h1>{title}</h1>
        </div>


      </div>
      <p>{description}</p>
      <StarRating></StarRating>


    </div>
  );
};

export default Testimonial;