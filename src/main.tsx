import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './rotas'
import axios from 'axios';


axios.get('/api/data', {
  headers: {
    'Cache-Control': 'no-cache',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
        
    <Rotas />
  </React.StrictMode>,
)
