import React from 'react';
import './Residence.css'



const Residence = ({ residence, setHome, setDeleteResidence, admin }) => {


    // const [user, loading, error] = useAuthState(auth);
    // const [admin, adminLoading] = UseAdmin(user);



    return (
        <div style={{ width: "90%" }}>
            <div className="card w-70 bg-base-100 shadow-xl cardX">

                <figure className="px-10 pt-10">
                    <img style={{ height: "300px", width: "400px" }} src={residence.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{residence.type}</h2>
                    <h2>{residence.layout}</h2>
                    <h2 style={{fontSize:"1.5rem"}}>{residence.price}$</h2>
                    <div className="card-actions">
                        {
                            admin ? <label htmlFor="my-modal" onClick={() => setDeleteResidence(residence)} className="btn">Remove</label> :
                                <label htmlFor="my-modal-4" onClick={() => setHome(residence)} className="btn">Add to booking list</label>
                        }

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Residence;