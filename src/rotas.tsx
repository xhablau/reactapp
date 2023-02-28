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
import IsPremium from './Planos/IsPremium'
import MyBody from './HomePage/BodyHomePage/MyBody'
import PoliticaPrivacidade from './Home/PoliticaPrivacidade'


initializeApp(config.firebaseConfig)



function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}  />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/planos' element={<Planos />} />
        <Route path='/welcomeMensal' element={<ThanksMensal />} />
        <Route path='/welcomeTrimestral' element={<ThanksTrimestral />} />
        <Route path='/welcomeSemestral' element={<ThanksSemestral />} />
        <Route path='/planosHome' element={<PlanosHome />} />
        <Route path='/isPremium' element={<IsPremium />} />
        <Route path='/MyBody' element={<MyBody />} />
        <Route path='/PoliticadePrivacidade' element={<PoliticaPrivacidade />} />


      </Routes>
    </BrowserRouter>
  );
}

export default Rotas
