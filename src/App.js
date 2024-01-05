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
import Contact from './components/contact/Contact';
import About from './components/about/About';
import RequireAuth from './components/requireAuth/RequireAuth'
import Residence from './components/residences/Residence';
import Feedback from './components/dashboardSection/feedback/Feedback';




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
        {/* <Route path="/residence" element={<Residence></Residence>}/> */}

        <Route path="/login" element={<Login></Login>} />

        <Route path='/residences' element={<Residences home={home} setHome={setHome} project={project}></Residences>} />

        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} >

          {admin && <>
            <Route index path='/dashboard' element={<Orders></Orders>}></Route>
            <Route path='/dashboard/addService' element={<AddService setProject={setProject} ></AddService>}></Route>
            <Route path='/dashboard/addAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          </>}

          {
            !admin && <>
              <Route  path='/dashboard' element={<RequireAuth><MyBookings></MyBookings></RequireAuth>} > </Route>
              <Route path='/dashboard/feedback' element={<RequireAuth><Feedback></Feedback></RequireAuth>} > </Route>
            </>

          }

        </Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
