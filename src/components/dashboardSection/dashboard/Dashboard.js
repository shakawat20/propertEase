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
        <div style={{ border: "4px solid gray" }}>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col " style={{ border: "4px solid gray" }}>
                    {/* Page content here  */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side" style={{ border: "4px solid gray" }}>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {!user ? (
                            <p>nothing</p>
                        ) : (
                            <>
                                {admin && (
                                    <>
                                        <li><Link to="/dashboard">Order list</Link></li>
                                        <li><Link to="/dashboard/addService">Add service</Link></li>
                                        <li><Link to="/dashboard/addAdmin">Add admin</Link></li>
                                    </>
                                )}
                                {!admin && <li><Link to="/dashboard">My Bookings</Link></li>}
                            </>
                        )}




                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;