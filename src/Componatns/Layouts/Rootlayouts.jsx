import React from 'react'
import Heading from './Heading'
import Navbartwo from './Navbartwo'
import { Outlet } from 'react-router-dom'
import { Fotter } from './Fotter'

export const Rootlayouts = () => {
  return (
    <div>
        <Heading/>
       
        <Outlet/>
        <Fotter/>
    </div>

  )
}
