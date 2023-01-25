import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import LoginUser from './Home/Componentes Home/HeaderHome/LoginUser'

import Home from './Home/Home'


function Rotas() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginUser' element={<LoginUser />} />
      </Routes>
    </Router>
  )

}
export default Rotas
