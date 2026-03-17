import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './Context/Cartcontex.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <Cartprovider>
    <App />
   </Cartprovider>
    </BrowserRouter>
    
  </StrictMode>
)
