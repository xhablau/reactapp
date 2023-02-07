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
import FirestoreAPI from './FirestoreApi/FirestoreApi'


initializeApp(config.firebaseConfig)



function Rotas() {
  
  return (
    <BrowserRouter>
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
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/' element={<Home />} />
        <Route path='/teste' element={<FirestoreAPI />} />

      </Routes>
    </BrowserRouter>

  )

}
export default Rotas
