import React from 'react';
import img1 from '../../Regal Residence/Image_Icon/Icon/map-pin-2-fill.png'

const Product = ({ title, img, place }) => {
    return (
        <div style={{ textAlign: "center", margin: "auto", marginTop: "20px" }}>
            <img src={img} alt="" style={{ height: '375px', width: '377px' }} />
            <header><h1 className='font-bold text-3xl '>{title}</h1></header>
            <div className='flex items-center justify-center'> 
                <img height={"20px"} width={"20px"} src={img1} alt="" />
                <h4 style={{padding:"7px"}} className='font-thin'>{place}</h4>
            </div>


        </div>
    );
};

export default Product;