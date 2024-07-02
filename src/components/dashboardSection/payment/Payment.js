import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../checkoutForm/CheckoutForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe('pk_test_51ND8OoBH3R7X5Kq3nuY3sbq3MnyL7O4ZppvMpZoCANMGXYzyMjVDoJfoVZDSvFuk5L3E5OPi5L46x21vuzwDsxV0005AAEeWGa');


const Payment = ({ info }) => {
    const [clientSecret, setClientSecret] = useState('')

    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')
    console.log(info.price)
    useEffect(() => {
        console.log(info)
        
        if (info?.price) {
            fetch('https://regal-residence-server.vercel.app/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => {
                    setClientSecret(data.clientSecret)
                });
        }


    }, [info])



    return (
        <div>
            <ToastContainer theme="white"/>

            <input type="checkbox" id="my-modal" className="modal-toggle" />

            <div className="modal ">
                <div className='modal-box bg-white '>
                    <label htmlFor="my-modal" onClick={() => {
                        setSuccess('')
                        setTransaction('')

                    }} className="btn btn-sm btn-circle absolute right-2 top-2" style={{backgroundColor:"white",color:"black"}}>✕</label>

                    <Elements stripe={stripePromise} >
                        <CheckoutForm info={info} success={success} setSuccess={setSuccess} clientSecret={clientSecret} setTransaction={setTransaction} transaction={transaction} />
                    </Elements>



                </div>


            </div>
        </div>


    );
};

export default Payment;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
