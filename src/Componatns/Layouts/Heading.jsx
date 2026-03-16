import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'
import Image from '../Common/Image'
import profile from '/src/assets/Logo.png'
import { Link } from 'react-router-dom'
import Navbartwo from './Navbartwo'

const Heading = () => {
  return (
    <div className='w-full bg-white'>
        <Container>
<Flex className={"justify-between h-20"}>
<div className="w-[40%]">
   <Image img={profile}/>
</div>
<div className="w-[60%]">
    <ul className='flex items-center gap-x-10'>
        <li className='text-[16px] text-[#767676] font-normal hover:text-[#262626] hover:font-bold duration-500'><Link to="/home">Home</Link></li>
        <li className='text-[16px] text-[#767676] font-normal hover:text-[#262626] hover:font-bold duration-500'><Link to="/shop">Shop</Link></li>
        <li className='text-[16px] text-[#767676] font-normal hover:text-[#262626] hover:font-bold duration-500'><Link to="/about">About</Link></li>
        <li className='text-[16px] text-[#767676] font-normal hover:text-[#262626] hover:font-bold duration-500'><Link to="/contact">Contact</Link></li>
    </ul>
</div>


</Flex>



        </Container>
<Navbartwo/>
    </div>
    
  )
}

export default Heading