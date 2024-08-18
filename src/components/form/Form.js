import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.init';
import "./Form.css"

const Form = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    const [Hdata, setData] = useState({})

    const { register, handleSubmit, setValue, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            number: ''
        }
    });

    const onSubmit = async data => {
        // const info={
        //     data
        // }
        setData(data)

        fetch('https://regal-residence-server.vercel.app/users', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Hdata)
        })
        console.log(data)

        reset()
    };

    return (
        <div className='w-100' style={{width:"100%"}}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-between  "  style={{borderRadius:"8px"}}>
                <h1 id='formTitle' style={{ display: "flex", justifyContent: "center", left: "-30px", fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Let us handle your  project, <br />professionally</h1>
                <div>
                    <input className='widthAdjust' placeholder='First Name' label="First Name" style={{ marginRight: "30px", paddingLeft: "20px", height: "35px", marginTop: "10px",color:"black",backgroundColor:"white",border:"2px solid black" }} {...register("firstName")} />
                    <input className='widthAdjust' placeholder='Last Name'{...register("lastName")} style={{ marginRight: "30px", paddingLeft: "20px", height: "35px", marginTop: "10px",color:"black",backgroundColor:"white",border:"2px solid black" }} />
                </div>
                <div>
                    <input className='widthAdjust' style={{ marginRight: "30px", paddingLeft: "20px", height: "35px", marginTop: "10px",color:"black",backgroundColor:"white",border:"2px solid black" }} placeholder='Email address' {...register("email")} />
                    <input className='widthAdjust'style={{ marginRight: "30px", paddingLeft: "20px", height: "35px", marginTop: "10px",color:"black",backgroundColor:"white",border:"2px solid black" }} placeholder='Number' {...register("number")} />
                </div>
                <div className='flex justify-center items-center' style={{width:"100%"}}>
                     <textarea id='widthAdjust' style={{ marginTop: "10px",color:"black",backgroundColor:"white",border:"2px solid black",width:"42%",position:"relative",left:"-15px" }}  {...register("areaText")} placeholder='Your Message' name="" ></textarea>
                </div>
               
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input style={{ marginTop: "20px" }} className="btn btn-primary btn-active" role="button" aria-pressed="true" type="submit" />
                </div>

            </form>
        </div>

    );
};

export default Form;