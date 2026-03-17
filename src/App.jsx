

import { Route, Routes } from 'react-router-dom'
import './App.css'

import  {Layoutone}  from './Componatns/Layouts/Layoutone'
import Layouttwo from './Componatns/Layouts/Layouttwo'
import Sliderlayout from './Componatns/Layouts/Sliderlayout'
import Hometwo from './Componatns/Hometwo'
import  {Rootlayouts}  from './Componatns/Layouts/Rootlayouts'
import Home from './Componatns/Pages/Home'
import Cart from './Componatns/Cart'










function App() {
  

  return (
   <>
   
      
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
      
          <Route index element={
            <>
              <Layoutone />
              <Layouttwo />
              <Sliderlayout />
              <Hometwo />
              <Home />
            </>
          } />
          
         
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

  
   </>
  )
}

export default App
