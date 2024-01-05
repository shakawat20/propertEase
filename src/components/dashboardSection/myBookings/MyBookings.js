import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MyBookings.css'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';

import MyBookingResidence from './MyBookingResidence';
import Payment from '../payment/Payment';

import { useNavigate } from 'react-router-dom';


const MyBookings = () => {

    const [user, floading, ferror] = useAuthState(auth);
    const [myBookings, setMyBookings] = useState([])
    const [event, setEvent] = useState()
    const [info,setInfo]=useState({})
    // const [clientSecret, setClientSecret] = useState('')
    

    const [signOut, loading, error] = useSignOut(auth);
    const navigate=useNavigate()




    useEffect(() => {
        if (user) {
            fetch(`https://regal-residence-server-g1gkt4qs8-shakawat20.vercel.app/bookings/myBookings/${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            }
            )
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut()
                        navigate('/')

                    }
                    else {
                        return res.json()
                    }


                })
                .then(data => {
                    setMyBookings(data)
                    console.log(data)
                })
        }
    }, [user, event,signOut,navigate])

    const handleRemove = async (remove) => {

        await fetch(`https://regal-residence-server.vercel.app/removeBooking/${remove}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },

        })
            .then(res => res.json())
            .then(data => setEvent(data))


    }
  
    // const handlePayment = async (price, email, type, name) => {
    //     const info = { price: price }

    //     await fetch('https://regal-residence-server.vercel.app/create-payment-intent', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(info),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setClientSecret(data.clientSecret)
    //         });
    //     setInformation(info)


    // }

    console.log(info)

    if(!myBookings){
        console.log("hope is fucked up")
       return <div>hope is nothing</div>
    }


    return (
        <div className=' grid  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 '>


            {
                myBookings?.map(booking => <MyBookingResidence email={user.email} name={user.displayName} _id={booking._id} type={booking?.type} price={booking.price} handleRemove={handleRemove} setInfo={setInfo}></MyBookingResidence>)

            }
            {  info && <Payment info={info}></Payment>}

        </div>
    );
};

export default MyBookings;