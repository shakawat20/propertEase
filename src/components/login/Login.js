import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init'
import googleIcon from '../propertEase/Image_Icon/Icon/Group 573.png'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useLocation } from 'react-router-dom';
const Login = () => {

  console.log("my name is login")

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
        // localStorage.setItem('user', gUser?.email)




    };

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
            .then((result) => {

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
console.log("local storage")

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
                        console.log("apollo", data)
                        if (from) {
                            navigate(from)
                        }
                        if (!from) {
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
        <div
        style={{
         
  
        }}>
        <div className="min-h-screen flex items-center justify-center  ">
  
          <div className="bg-white white p-8 rounded shadow-md w-96" style={{border:'1px solid black'}}>
            <h2 className="text-2xl font-semibold mb-4 black" >Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4 ">
                <label htmlFor="email" className="block text-gray-700"style={{width:"90px"}}>Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                  required
                  style={{border:"1px solid gray"}}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700" style={{width:"90px"}}>Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                  required
                  style={{border:"1px solid gray"}}
                  

                />
              </div>
              <div className='flex justify-center'>
                <button onClick={() => signInWithEmailAndPassword(email, password)}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                  style={{border:"1px solid gray"}}
                >
                  Login
                </button>
              </div>
  
            </form>
  
            <div className='flex flex-col justify-center items-center'>
              <span>
                or
              </span>
              <br />
              <button onClick={() => signIn()} type="submit" className="border rounded border-blue text-black py-2 px-4" style={{border:"1px solid gray"}}>
                signInWithGoogle
              </button>
              <br />
  
              <span>
                or
              </span>
              <Link to='/signup'>
                <button type="submit" className="border  rounded border-blue text-gray py-2 px-4" style={{color:"black",border:"2px solid gray"}}>
                  create account
                </button>
              </Link>
            </div>
  
          </div>
        </div>
      </div>
 


    );
};

export default Login;