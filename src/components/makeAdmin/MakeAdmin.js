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
        <div style={{position:"relative",left:'-250px',top:"60px",color:"black" ,display:'flex',justifyContent:"center",alignItems:"center"}}> 
           
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>Make Admin</div>  <input style={{border:"1px solid black"}} placeholder='Email' type='email' {...register("email")} />
                <input style={{border:"1px solid black"}} type="submit" />

            </form>

        </div>



    );
};

export default MakeAdmin;