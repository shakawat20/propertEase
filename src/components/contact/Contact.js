import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='border text-black  rounded-lg mt-10 w-full lg:w-3/4 pl-6 pr-6 pt-12 pb-12 m-auto mb-10'>
            <form className='flex flex-col lg:flex-row justify-between' onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:mr-6 lg:w-1/2'>
                    <h1 className='text-2xl mb-6'>Greetings! How may I be of service to you today? Don't hesitate to ask any questions or let me know how I can assist you.</h1>
                    <div className='mt-10'>
                        <div className='flex items-center mb-4'>
                            <i className="fa-solid fa-location-dot pr-4"></i>
                            <h1>Dhaka, Bangladesh</h1>
                        </div>
                        <div className='flex items-center mb-4'>
                            <i className={`fa-solid fa-envelope pr-4`}></i>
                            <h1>shakawat.cse20@gmail.com</h1>
                        </div>
                        <div className='flex items-center'>
                            <i className="fa-sharp fa-solid fa-phone pr-4"></i>
                            <h1>+8801609431059</h1>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <input placeholder='Name' className="input border border-gray-300 w-full mb-4 bg-white" {...register("name")} />
                    <input placeholder='Email' className="input border border-gray-300 w-full mb-4 bg-white" {...register("email")} />
                    <textarea placeholder='Message' className="input border text-center pt-16 items-center border-gray-300 w-full mb-4 h-40 resize-none bg-white" {...register("message")}></textarea>
                    <input className="block bg-white border-gray-300 text-black btn w-full hover:bg-white" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Contact;
