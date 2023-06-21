import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signUp/Signup';
import Residences from './components/residences/Residences';
import Orders from './components/dashboardSection/orders/Orders'
import { useState } from 'react';
import Dashboard from './components/dashboardSection/dashboard/Dashboard';
import AddService from './components/dashboardSection/addService/AddService';
import MakeAdmin from './components/makeAdmin/MakeAdmin';

import MyBookings from './components/dashboardSection/myBookings/MyBookings';
import UseAdmin from './hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase/firebase.init';




function App() {
  const [home, setHome] = useState({})
  const [project, setProject] = useState({})
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = UseAdmin(user)
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path='/login' element={<Login></Login>} />

        <Route path='/residences' element={<Residences home={home} setHome={setHome} project={project}></Residences>} />

        <Route path="/signup" element={<Signup></Signup>} />

        <Route path="/dashboard" element={<Dashboard></Dashboard>} >

          {/* <Route index element={<Orders></Orders>}></Route> */}
          {admin && <>
            <Route index path='/dashboard' element={<Orders></Orders>}></Route>
            <Route path='/dashboard/addService' element={<AddService setProject={setProject} ></AddService>}></Route>
            <Route path='/dashboard/addAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          </>}


          {
            !admin &&

            <Route index path='/dashboard' element={<MyBookings></MyBookings>}></Route>
          }

        </Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
