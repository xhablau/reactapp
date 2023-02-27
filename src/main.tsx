import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './rotas'


// window.addEventListener('unload', () => {
//   localStorage.clear();
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
        
    <Rotas />
  </React.StrictMode>,
)
