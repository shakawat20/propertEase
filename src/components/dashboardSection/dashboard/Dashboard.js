import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Payment from '../payment/Payment';
import auth from '../../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseAdmin from '../../../hooks/UseAdmin';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user)

    return (
        <div style={{ border: "1px solid gray",backgroundColor:"white" }}>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col " style={{ border: "1px solid black",backgroundColor:"white" }}>
                    {/* Page content here  */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side" style={{ border: "1px solid black" }}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-white  text-black">
                        {!user ? (
                            <p>nothing</p>
                        ) : (
                            <>
                                {admin && (
                                    <>
                                        <li ><Link to="/dashboard">Order list</Link></li>
                                        <li><Link to="/dashboard/addService">Add service</Link></li>
                                        <li><Link to="/dashboard/addAdmin">Add admin</Link></li>
                                    </>
                                )}
                                {!admin && <>

                                    {/* <li><Link to="/dashboard">Reserve</Link></li> */}
                                    <li><Link to="/dashboard">My Reservations</Link></li>
                                    <li><Link to="/dashboard/feedback">Feedback</Link></li>


                                </>}
                            </>
                        )}




                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;