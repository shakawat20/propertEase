import React from 'react';
import './Residence.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from '../login/Login';




const Residence = ({ residence, setHome, setDeleteResidence, admin }) => {

   


const navigate=useNavigate()
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    // const [admin, adminLoading] = UseAdmin(user);
    const handleAddToBookingList = () => {

        if (!user) {
            
          // Check if the user is not an admin (not logged in)
          // Redirect the user to the login page
          navigate('/login', { state: { from: location }, replace: true })
        } else {
          // Call the setHome function for admins
          setHome(residence);
         
        }



      };



    return (
        <div className='bg-white text-black' style={{ width: "90%" }}>
            <div className="card w-70 bg-white  text-black shadow-xl " style={{border:"3px solid black"}}>

                <figure className="px-10 pt-10">
                    <img style={{ height: "300px", width: "400px" }} src={residence.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{residence.type}</h2>
                    <h2>{residence.layout}</h2>
                    <h2 style={{fontSize:"1.5rem"}}>{residence.price}$</h2>
                    <div className="card-actions">
                        {
                            admin ? <label htmlFor="my-modal" onClick={() => setDeleteResidence(residence)} className="btn bg-white text-black">Remove</label> :
                                <label htmlFor="my-modal-4" onClick={handleAddToBookingList} className="btn bg-white text-black hover:bg-white">Add to booking list</label>
                        }

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Residence;