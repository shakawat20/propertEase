import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../checkoutForm/CheckoutForm'

const stripePromise = loadStripe('pk_test_51ND8OoBH3R7X5Kq3nuY3sbq3MnyL7O4ZppvMpZoCANMGXYzyMjVDoJfoVZDSvFuk5L3E5OPi5L46x21vuzwDsxV0005AAEeWGa');


const Payment = ({ clientSecret, information }) => {

    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')




    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />

            <div className="modal">
                <div className='modal-box'>
                    <label htmlFor="my-modal" onClick={() => {
                        setSuccess('')
                        setTransaction('')

                    }} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <Elements stripe={stripePromise} >
                        <CheckoutForm information={information} success={success} setSuccess={setSuccess} clientSecret={clientSecret} setTransaction={setTransaction} transaction={transaction} />
                    </Elements>



                </div>


            </div>
        </div>


    );
};

export default Payment;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
