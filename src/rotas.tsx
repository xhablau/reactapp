import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import AboutUs from './Home/About Us/AboutUS'
import LoginUser from './Home/Componentes Home/HeaderHome/LoginUser'

import Home from './Home/Home'


function Rotas() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </Router>
  )

}
export default Rotas
