
import Heading from './Heading'

import { Outlet } from 'react-router-dom'
import  Fotter  from './Fotter'

export const Rootlayouts = () => {
  return (
    <div>
        <Heading/>
       
        <Outlet/>
        <Fotter/>
    </div>

  )
}
