import React from 'react';
import img1 from '../propertEase/Image_Icon/Image/17074986.jpg'
import img2 from '../propertEase/Image_Icon/Image/21960670.jpg'
import img3 from '../propertEase/Image_Icon/Image/37169361.jpg'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            img1: img1,
            title: "CEO",
            Name: "Dvid alaba",
            description: "A great CEO should have strong leadership skills, including the ability to inspire and motivate employees, set clear goals, and make tough decisions when necessary."

        },
        {
            title: "CEO",
            img1: img2,
            Name: "Anderson",
            description: " A great CEO should have strong leadership skills, including the ability to inspire and motivate employees, set clear goals, and make tough decisions when necessary."

        },
        {
            title: "CEO",
            img1: img3,
            Name: "Anik pichai",
            description: "A great CEO should have strong leadership skills, including the ability to inspire and motivate employees, set clear goals, and make tough decisions when necessary."

        },

    ]
    return (
        <div className='flex flex-col  justify-center items-center bg-white ' style={{width:"100%"}}>
            <h1 style={{textAlign:"center",fontSize:"40px",marginTop:"10px",marginBottom:"20px",fontWeight:"bold"} }>Testimonials</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center" style={{marginTop:"20px",width:"100%"}}>
                {
                    testimonials.map(data => <Testimonial img={data.img1} name={data.Name} title={data.title} description={data.description}></Testimonial>)
                }
            </div>

        </div>
    );
};

export default Testimonials;