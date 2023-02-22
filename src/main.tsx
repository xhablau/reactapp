import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './rotas'
import { initializeApp } from "firebase/app";
import { config } from './config/config';

initializeApp(config.firebaseConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>    
    <Rotas />
  </React.StrictMode>,
)
