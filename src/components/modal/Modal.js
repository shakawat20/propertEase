import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Modal.css'
// import { useState } from 'react';
// import { useEffect } from 'react';
import UseAdmin from '../../hooks/UseAdmin';
import { toast } from 'react-toastify';

const Modal = ({ home }) => {
    // const [booking, setBooking] = useState({})
    // const [mode, setMode] = useState(false)

    const notify = () => toast("Added to my orders!");

    const currentDate = new Date().toDateString();
    const { register, handleSubmit, setValue, reset } = useForm();

    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user)
    const onSubmit = data => {

        const bookingInfo = {
          
            date: currentDate,
            name: user?.displayName,
            email: user?.email,
            type: home.type,
            price: home.price,
            phone: data?.phone,
            img:home?.img
         


        }
        fetch('https://regal-residence-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)

        })
            .then(data => data.json())
            .then(res => {
                notify()
                console.log(res)})

        // setBooking(bookingInfo)
        // console.log(booking)
        // reset()

    }
    





    return (
        <div className='w-11/12 max-w-5xl bg-white' >


            {/* Put this part before </body> tag */}


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />

            <label htmlFor="my-modal-4" className="modal cursor-pointer"  >
                <label className="modal-box relative modal-border bg-white" htmlFor="" >

                    <label htmlFor="">
                        {
                            <h1 style={{ padding: "8px", display: "flex", justifyContent: 'center', fontWeight: "bold" }}>{home.type}</h1>
                        }
                    </label>
                    <form style={{ display: "flex", justifyContent: "center",color:"black" }} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black">✕</label>
                        <input className='bg-white' style={{border:"2px solid black",borderRadius:"3px"}}  value={currentDate} {...register("date")} />
                        <input className='bg-white' style={{border:"2px solid black",borderRadius:"3px"}}  value={user?.displayName} {...register("name")} />
                        <input className='bg-white' style={{border:"2px solid black",borderRadius:"3px"}}  value={user?.email} {...register("email")} />
                        <input className='bg-white' style={{border:"2px solid black",borderRadius:"3px"}} value={home.price} {...register("price")} />
                        <input className='bg-white'style={{border:"2px solid black",borderRadius:"3px"}} placeholder='Phone number' {...register("phone")} />

                        <button type='input' value='input' ><label htmlFor='my-modal-4' className="btn modal-action">Submit</label></button>

                    </form>

                </label>
            </label>

        </div >


    );
};

export default Modal;