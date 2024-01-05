import React, { useEffect, useState } from 'react';
import Residence from './Residence';
import Modal from '../modal/Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseAdmin from '../../hooks/UseAdmin';
import auth from '../../firebase/firebase.init';
import ModalForDelete from '../modalForDelete/ModalForDelete';
import Loading from '../loading/Loading';
// import { useContext } from 'react';
// import { MyContext } from '../../App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Residences = ({ setHome, home, project }) => {
    const [residences, setResidences] = useState([])
    const [deleteResidence, setDeleteResidence] = useState({})


    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = UseAdmin(user);
    const [afterDelete, setAfterDelete] = useState({})

    if (!afterDelete) {
        <Loading></Loading>
    }


    useEffect(() => {
        fetch('https://regal-residence-server.vercel.app/residence')
            .then(res => res.json())
            .then(data => {
                setResidences(data)

            })
    }, [home, project, afterDelete])


    return (
        <div>
              <ToastContainer  theme="dark"/>
        

        <div style={{ marginLeft: "35px" }} className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           
            {
                residences.map(residence =>
                    <Residence setHome={setHome} key={residence._id} residence={residence} setDeleteResidence={setDeleteResidence} admin={admin} ></Residence>
                )
            }



            {
                admin && !adminLoading ? (<ModalForDelete deleteResidence={deleteResidence} setAfterDelete={setAfterDelete}></ModalForDelete>) : (<Modal home={home}></Modal>)
            }




        </div>
        </div>

    );
};

export default Residences;