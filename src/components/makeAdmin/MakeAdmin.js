import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log("data", data)
        fetch(`https://regal-residence-server.vercel.app/makeAdmin/${data.email}`,
            {
                method: 'PUT',

                headers: {
                    'Content-Type': 'application/json'



                },


            }

        )
            .then(res => res.json())
            .then(data => console.log(data))
        reset()
    };

    return (
        <div style={{position:"relative",left:'-250px',top:"60px"}}> 
            <div style={{textAlign:"center" }}>Make Admin</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email")} />
                <input type="submit" />

            </form>

        </div>



    );
};

export default MakeAdmin;