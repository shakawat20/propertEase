import React from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Products from '../products/Products';
import Testimonials from '../testimonials/Testimonials';
import img1 from '../../Regal Residence/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Booking</button>
                    </div>
                </div>
            </div>
            <Products></Products>
            <Testimonials></Testimonials>
            <div className='bg-base-200'>
               
                <div className='flex justify-center '>
                    <Form></Form>
                </div>

            </div>
        </div>
    );
};

export default Home;