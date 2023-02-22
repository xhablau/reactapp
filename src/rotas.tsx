import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import AboutUs from './Home/About Us/AboutUS'
import LoginUser from './Home/Componentes Home/HeaderHome/LoginUser'
import ContactUs from './Home/Contact Us/ContactUs'

import Home from './Home/Home'
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import AuthRoute from './components/AuthRoute'
import RegisterUser from './Home/Componentes Home/HeaderHome/RegisterUser'
import HomePage from './HomePage/HomePage'
import Planos from './Planos/Planos'
import ThanksMensal from './Planos/ThanksMensal'
import ThanksTrimestral from './Planos/ThanksTrimestral'
import ThanksSemestral from './Planos/ThanksSemestral'
import PlanosHome from './Home/Planos/PlanosHome'


initializeApp(config.firebaseConfig)



function Rotas() {
  return (
    
      <Routes>
        <Route
          path="/"
          
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/welcomemensal" element={<ThanksMensal />} />
        <Route path="/welcometrimestral" element={<ThanksTrimestral />} />
        <Route path="/welcomesemestral" element={<ThanksSemestral />} />
        <Route path="/planoshome" element={<PlanosHome />} />
        
      </Routes>
    
  );
}

export default Rotas
