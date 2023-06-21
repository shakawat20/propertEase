import React, { useEffect, useState } from 'react';
import './CheckoutForm.css'
import loading from '../../loading/Loading'

import { CardElement, useStripe, useElements, } from '@stripe/react-stripe-js';
import Loading from '../../loading/Loading';

const CheckoutForm = ({ clientSecret, information,setSuccess,success,setTransaction,transaction}) => {


  const stripe = useStripe();
  const elements = useElements();
  



  const [cardError, setCardError] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);





  const handleSubmit = async (event) => {

    event.preventDefault()
    if (!elements || !stripe) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
    }

    if (!clientSecret) {
      return (

        <Loading></Loading>

      )
    }
    const { paymentIntent, Error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: information.email,
          },
        },
      },
    );

    if (paymentIntent.status === "succeeded" && clientSecret) {
      setSuccess("congrats")
      setTransaction(paymentIntent.id)


      fetch('https://regal-residence-server.vercel.app/orders', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(information)
      })
        .then(res => res.json())
        .then(data => console.log(data))


    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{
          height: "50px",
          width: "400px"
        }}>

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146'
                },
              },
            }} />
        </div>


        <button type="submit" className="btn" disabled={!stripe || !elements}>
          confirm
        </button>
        {errorMessage && <div>{cardError}</div>}
      </form>
      {
        success && 
        <p className='text-green-500'>{success}</p> 

      }
      {
          success && <p className='text-green-500'>{transaction}</p>
      }
    </>

  );
};
export default CheckoutForm