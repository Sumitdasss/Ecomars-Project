

import { Route, Routes } from 'react-router-dom'
import './App.css'





import { Rootlayouts } from './Componatns/Layouts/Rootlayouts'
import Home from './Componatns/Pages/Home'
import Cart from './Componatns/Pages/Cart'




function App() {
  

  return (
   <>
   {/* <Heading/>
   
   <Layoutone/>
   <Layouttwo/>
  <Sliderlayout/>

<Hometwo/> */}
     

  <Routes>
    <Route path='/' element={<Rootlayouts/>}>
  <Route index element={<Home />} />
  <Route path="/Cart" element={<Cart />} /> 
  </Route>
</Routes>
   </>
  )
}

export default App
