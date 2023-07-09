import React from 'react';


const ModalForDelete = ({deleteResidence,setAfterDelete}) => {
 
    const  removeFromList = () => {
  

        fetch(`https://regal-residence-server.vercel.app/residence/${deleteResidence._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
          
        })
        .then(res=>res.json())
        .then(data=>setAfterDelete(data));
    }
    return (

   
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{deleteResidence._id}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" onClick={ removeFromList} className="btn">yes remove</label>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default ModalForDelete;