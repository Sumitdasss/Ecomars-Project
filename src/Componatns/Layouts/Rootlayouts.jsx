
import React from 'react'
import { Outlet } from 'react-router-dom'
import Fotter from './Fotter' 
import Heading from './Heading'

export const Rootlayouts = () => {
  return (
    <>
    <Heading/>
      <Outlet /> 
      <Fotter />
    </>
  )
}