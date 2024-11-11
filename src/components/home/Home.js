import React from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Products from '../products/Products';
import Testimonials from '../testimonials/Testimonials';
import img1 from '../propertEase/Image_Icon/Image/pierre-chatel.jpg'
import { Link } from 'react-router-dom';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div style={{ backgroundColor: "white", color: "black"}}>


            <div className=" flex items-center justify-center" style={{width:"100%",height:"500px"}}>
                <div className="hero-content flex flex-row-reverse " style={{}}>
                    <img
                        src={img1} alt='hi'
                        className="w-[600px] rounded-lg shadow-2xl" />
                    <div className='w-100'>
                        <h1 className="text-5xl font-bold">Find Your Dream Property Today</h1>
                        <p className="py-6">
                        Explore the best properties available for sale in prime locations! Whether you're looking for a dream home or a smart investment, 
                        we bring you a wide range of options to suit your needs. Find detailed listings, virtual tours, and expert advice to help you make the right decision.
                        </p>
                        <button className="btn btn-primary"><Link to='/residences'>Get Started</Link> </button>
                    </div>
                </div>
            </div>


            {/* <div className="hero min-h-screen " >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to propertEase</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"><Link to="/residences">Booking</Link></button>
                    </div>
                </div>
            </div> */}
            <Products></Products>
            <Testimonials></Testimonials>
            <Contact></Contact>
            {/* <div className='bg-base-200'>

                <div className=' '>
                    <Form></Form>
                </div>

            </div> */}
        </div>
    );
};

export default Home;