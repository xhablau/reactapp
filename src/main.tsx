import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './rotas'
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import Home from './Home/Home';
import LoginUser from './Home/Componentes Home/HeaderHome/LoginUser';
import RegisterUser from './Home/Componentes Home/HeaderHome/RegisterUser';
import AboutUs from './Home/About Us/AboutUS';
import ContactUs from './Home/Contact Us/ContactUs';
import HomePage from './HomePage/HomePage';
import Planos from './Planos/Planos';
import ThanksMensal from './Planos/ThanksMensal';
import ThanksTrimestral from './Planos/ThanksTrimestral';
import ThanksSemestral from './Planos/ThanksSemestral';
import PlanosHome from './Home/Planos/PlanosHome';

initializeApp(config.firebaseConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

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
    <Route path='/' element={<Home />} />
    <Route path="https://mypersonal-40ff3.web.app/login" element={<LoginUser />} />
    <Route path="/register" element={<RegisterUser />} />
    <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/ContactUs' element={<ContactUs />} />
    <Route path='/HomePage' element={<HomePage />} />
    <Route path='/planos' element={<Planos />} />
    <Route path='/welcomeMensal' element={<ThanksMensal />} />
    <Route path='/welcomeTrimestral' element={<ThanksTrimestral />} />
    <Route path='/welcomeSemestral' element={<ThanksSemestral />} />
    <Route path='/planosHome' element={<PlanosHome />} />


  </Routes>
</BrowserRouter>
)



