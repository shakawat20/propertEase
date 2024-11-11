import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../propertEase/Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'
import auth from '../../firebase/firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import './Header.css'
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth)
    const [signOut] = useSignOut(auth)
    const [admin, adminLoading] = UseAdmin(user)
    const navigate=useNavigate()

    if (adminLoading || loading) {
        <Loading></Loading>
    }

    const list = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/residences">Projects</Link></li>
        {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About us</Link></li>

        {admin && <li><Link to="/dashboard">admin</Link></li>}
        
    </>
    const logOut = () => {
        signOut()
        navigate('/')
        
    }


    return (
        <div  className='bg-[#DDE3E9]'  style={{ position:"sticky",top:0,zIndex:100,color:"black" }}>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">PropertEase</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            list
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* 
                   { user ? <Link className='btn' to="/login">LogIn</Link>} */}
                    {user ? <button className="btn btn-ghost bg-white text-black" onClick={()=>logOut()}>signOut</button> : <Link className='btn btn-ghost bg-white text-black' to="/login">LogIn</Link>}

                </div>
            </div>



        </div>
    );
};

export default Header;