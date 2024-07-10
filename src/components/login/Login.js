import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init'
import googleIcon from '../propertEase/Image_Icon/Icon/Group 573.png'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useLocation } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const style = {
        border: "1px solid gray",
        padding: "8px",
        borderRadius: "8px",
        display: 'flex',
        justifyContent: 'space-between',

    };


    let provider = new GoogleAuthProvider();



    const signIn = () => {


        signInWithPopup(auth, provider)
            .then((result) =>
             {

                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email } = result.user;
                const userInfo = {
                    email: email
                }
                const Name = displayName.split(' ')
                const userData = {
                    firstName: Name[0],
                    lastName: Name[1],
                    email: email
                }
                fetch('https://regal-residence-server-g1gkt4qs8-shakawat20.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)

                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Token', data.token)
                       

                    })

                fetch('https://regal-residence-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("apollo",data)
                        if(from){
                            navigate(from)
                        }
                        if(!from){
                            navigate('/')
                        }
                        
                    })



            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }







    // const [user, loading, error] = useAuthState(auth);


    // const [signInWithGoogle] = useSignInWithGoogle(auth);
    // const [data, setData] = useState({})
    // const navigate = useNavigate()


    // if (user) {
    //     setData(user)
    //     console.log(data)
    // }
    // if (data) {

    //         fetch('https://regal-residence-server.vercel.app/users', {

    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })

    // }




    // if (user) {

    // }



    // if (user) {
    //     navigate("/")
    // }





    // useEffect(() => {

    //     fetch('https://regal-residence-server.vercel.app/users', {

    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(error => {
    //             setLoading(true)
    //         })
    // }, [data, isLoading])




    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid gray", height: "500px" }}>


            <div style={{ padding: "5px", borderRadius: "4px", position: "relative", top: "-50px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "30px" }}>LogIn with Google</h1>
                <div style={style}>
                    <img src={googleIcon} style={{ height: "20px", width: "20px", display: "inline" }} alt="" />
                    <button style={{ paddingRight: "35px",color:"black" }} onClick={signIn}>signInWithGoogle</button>
                </div>

            </div>
            <div style={{ textAlign: "center" }}>or</div>
            <Link className=' btn  bg-white text-black hover:bg-white' to="/signup">create an account</Link>

        </div>


    );
};

export default Login;