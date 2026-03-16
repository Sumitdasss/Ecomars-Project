import { useNavigate } from 'react-router-dom';
import Container from '../Common/Container'
import Flex from '../Common/Flex'
import { FaMagnifyingGlass,FaCartShopping } from "react-icons/fa6";
import { Iconone } from '../Common/Iconone';

import { FaUser,FaSortDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbartwo = () => {
  const navigate = useNavigate();
  return (
   <div className='w-full bg-[#F5F5F3] border-t-2 border-b-2 border-[#767676] '>
    <Container>
        <Flex className="h-[100px]  justify-between">
            
           
            <div className="relative w-[200px] group"> 
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800">
                    <Iconone />
                </div>
                <select className="block w-full appearance-none py-3 pl-10 text-lg font-medium text-gray-800 cursor-pointer focus:outline-none">
                    <option>Shop by Category</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                </select>
            </div>

           
            <div className="relative w-[600px] "> 
                <input 
                    className="w-full h-[50px] bg-white focus:outline-none pl-[20px] pr-[50px] " 
                    placeholder="Search..."
                />
               
              <button> <FaMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-black '/></button>
            </div>

            
            <div className="w-[100px] flex gap-x-6">
              <div className="dropdown dropdown-bottom">
  <div tabindex="0" role="button" className=" group  flex cursor-pointer"><FaUser /><FaSortDown className='group-focus:rotate-180 duration-500'/></div>
  <ul tabindex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<div className="">
  
  <button onClick={()=> navigate("/Cart")}><FaCartShopping className='text-[18px] cursor-pointer'/></button>
 
  
</div>
            </div>
            
        </Flex>
    </Container>
</div>
  )
}

export default Navbartwo