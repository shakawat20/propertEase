import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase/firebase.init';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Signup = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const style = { display: "flex", justifyContent: "space-between", width: "450px" }
    const [sLoading, setsLoading] = useState(false)
    const [data, setData] = useState({})
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ name: data.FirstName })
        const userData = {
            firstName: data.FirstName,
            lastName: data.lastName,
            email: data.email,

        }
        setData(userData)
        dataSending(userData)
        reset()

        // if (user) {
            
        // }

    }


    const dataSending = async Data => {


        fetch('https://regal-residence-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)

        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                navigate('/')
            })
            

    }


    // useEffect(() => {

    //     fetch('https://regal-residence-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)

    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .then(error => {
    //             setsLoading(true)
    //         })

    // }, [data,sLoading])




    // useEffect(()=>{
    //     fetch('https://regal-residence-server.vercel.app/users', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(dataHope)

    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className='text-black'>
            <h1 style={{ textAlign: "center", marginTop: "10px", marginBottom: "5px" }}>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='text-black'>
                <div className='bg-white text-black' style={{width:"30%",display:'flex',justifyContent:"space-between"}}>
                    <label className='text-black'  htmlFor="firstName">First Name:</label>
                    <input id='firstName' style={{border:"1px solid black"}} className='bg-white border-rounded' placeholder='First lllName'  {...register("FirstName")} />
                </div>
                <div className='bg-white text-black' style={{width:"30%",display:'flex',justifyContent:"space-between"}}>
                    <label className='text-black'  htmlFor="lastName"> <span>Last Name:</span></label>
                    <input id='lastName' style={{border:"1px solid black"}} className='bg-white ' placeholder='Last Name' {...register("LastName")} />
                </div>

                <div className='bg-white text-black' style={{width:"30%",display:'flex',justifyContent:"space-between"}}>
                    <label className=' text-black' htmlFor="email"> <span>Email:</span> </label>
                    <input id='email' className='bg-white' style={{border:"1px solid black"}} placeholder='Username or Email' {...register("email")} />
                </div>

                <div className='bg-white text-black' style={{width:"30%",display:'flex',justifyContent:"space-between"}}>
                    <label  htmlFor="password"> <span>Password:</span></label>
                    <input id='password' className='bg-white text-black border-2px' style={{border:"1px solid black"}} placeholder='Password' {...register("password")} />
                </div>
                <div className='bg-white text-black ' style={{width:"30%",display:'flex',justifyContent:"space-between"}}>
                    <label htmlFor="confirmPassword"> <span>Confirm Password:</span> </label>
                    <input id='confirmPassword' className='bg-white ' style={{border:"1px solid black"}}  placeholder='Confirm Password' {...register("confirmPassword")} />
                </div>





                {errors.exampleRequired && <span>This field is required</span>}
                <div className='mt-10'>
                   <input style={{color:"black",width:"200px"}} className='btn  bg-white hover:bg-white' type="submit" /> 
                </div>

                
            </form>
        </div>

    );
};

export default Signup;