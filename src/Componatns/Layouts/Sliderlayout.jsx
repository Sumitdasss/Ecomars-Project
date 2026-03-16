
import Container from '../Common/Container'
import { FaPlus,FaMinus,FaCodeCompare,FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import React, { useState } from 'react';


const Sliderlayout = () => {

  const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    
  return (

    <Container>
         <h4 className='text-[40px] text-[#262626] font-bold mt-[135px]'>New Arrivals</h4>
    <div className="flex justify-between mt-[50px]">
       
            <div className="h-[465px] w-[350px] rounded-[10px] relative ">
                <div className="bg-[url(/src/assets/2.png)] w-full h-[370px] bg-cover bg-no-repeat bg-center">
                <div className="px-7 py-3 bg-[#262626] text-[16px] font-semibold text-white inline-block mt-[15px] ml-[15px]">New</div>
                  <div className="relative flex items-center ">
  
  <div className="relative flex items-center justify-center mt-[240px] ml-[280px]">
    
    <button id="opt1" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen1 ? '-translate-y-16 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
     <FaHeart/>
    </button>
    
    <button id="opt2" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen1 ? '-translate-y-32 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCodeCompare />
    </button>
    
    <button id="opt3" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen1 ? '-translate-y-48 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCartShopping/>
    </button>
    
    
    <button onClick={() => setIsOpen1(!isOpen1)} id="mainBtn" className="relative z-10 h-11 w-11 bg-[#262626] flex items-center justify-center text-white rounded-full shadow-2xl font-bold transition-transform active:scale-90">
    {isOpen1 ? <FaMinus size={18} /> : <FaPlus size={18} />}
    </button>
    
  </div>
</div>
        </div> 
        <div className="">

                <div id="bg1" className="h-full flex justify-between w-full  mt-[20px]">
                    <h4 id="text1" className="text-[20px] text-[#262626] font-semibold ">Basic Crew Neck Tee</h4>
                    <p className="text-[17px] text-[#767676] font-semibold pl-[50px]">$44.00</p>
                
                </div>
                <p className='text-[17px] text-[#767676] font-medium '>Black</p>
                </div>
            </div>



             <div className="h-[465px] w-[350px] rounded-[10px] relative ">
                <div className="bg-[url(/src/assets/3.png)] w-full h-[370px] bg-cover bg-no-repeat bg-center">
                   <div className="px-7 py-3 bg-[#262626] text-[16px] font-semibold text-white inline-block mt-[15px] ml-[15px]">New</div>
                  <div className="relative flex items-center ">
  
  <div className="relative flex items-center justify-center mt-[240px] ml-[280px]">
    
    <button id="opt1" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen2 ? '-translate-y-16 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
     <FaHeart/>
    </button>
    
    <button id="opt2" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen2 ? '-translate-y-32 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCodeCompare />
    </button>
    
    <button id="opt3" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen2 ? '-translate-y-48 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCartShopping/>
    </button>
    
    
    <button onClick={() => setIsOpen2(!isOpen2)} id="mainBtn" className="relative z-10 h-11 w-11 bg-[#262626] flex items-center justify-center text-white rounded-full shadow-2xl font-bold transition-transform active:scale-90">
    {isOpen2 ? <FaMinus size={18} /> : <FaPlus size={18} />}
    </button>
    
  </div>
</div>
        </div> 
        <div className="">

                <div id="bg1" className="h-full flex justify-between w-full  mt-[20px]">
                    <h4 id="text1" className="text-[20px] text-[#262626] font-semibold ">Basic Crew Neck Tee</h4>
                    <p className="text-[17px] text-[#767676] font-semibold pl-[50px]">$44.00</p>
                
                </div>
                <p className='text-[17px] text-[#767676] font-medium '>Black</p>
                </div>
            </div>
 <div className="h-[465px] w-[350px] rounded-[10px] relative ">
                <div className="bg-[url(/src/assets/4.png)] w-full h-[370px] bg-cover bg-no-repeat bg-center">
                   <div className="px-7 py-3 bg-[#262626] text-[16px] font-semibold text-white inline-block mt-[15px] ml-[15px]">New</div>
                  <div className="relative flex items-center ">
  
  <div className="relative flex items-center justify-center mt-[240px] ml-[280px]">
    
   <button id="opt1" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen3 ? '-translate-y-16 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
     <FaHeart/>
    </button>
    
    <button id="opt2" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen3 ? '-translate-y-32 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCodeCompare />
    </button>
    
    <button id="opt3" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen3 ? '-translate-y-48 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCartShopping/>
    </button>
    
    
    <button onClick={() => setIsOpen3(!isOpen3)} id="mainBtn" className="relative z-10 h-11 w-11 bg-[#262626] flex items-center justify-center text-white rounded-full shadow-2xl font-bold transition-transform active:scale-90">
    {isOpen3 ? <FaMinus size={18} /> : <FaPlus size={18} />}
    </button>
    
  </div>
</div>
        </div> 
        <div className="">

                <div id="bg1" className="h-full flex justify-between w-full  mt-[20px]">
                    <h4 id="text1" className="text-[20px] text-[#262626] font-semibold ">Basic Crew Neck Tee</h4>
                    <p className="text-[17px] text-[#767676] font-semibold pl-[50px]">$44.00</p>
                
                </div>
                <p className='text-[17px] text-[#767676] font-medium '>Black</p>
                </div>
            </div>
            <div className="h-[465px] w-[350px] rounded-[10px] relative ">
                <div className="bg-[url(/src/assets/5.png)] w-full h-[370px] bg-cover bg-no-repeat bg-center">
                   <div className="px-7 py-3 bg-[#262626] text-[16px] font-semibold text-white inline-block mt-[15px] ml-[15px]">New</div>
                  <div className="relative flex items-center ">
  
  <div className="relative flex items-center justify-center mt-[240px] ml-[280px]">
    
   <button id="opt1" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen4 ? '-translate-y-16 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
     <FaHeart/>
    </button>
    
    <button id="opt2" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen4 ? '-translate-y-32 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCodeCompare />
    </button>
    
    <button id="opt3" className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px]  rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 scale-0 ${isOpen4 ? '-translate-y-48 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
      <FaCartShopping/>
    </button>
    
    
    <button onClick={() => setIsOpen4(!isOpen4)} id="mainBtn" className="relative z-10 h-11 w-11 bg-[#262626] flex items-center justify-center text-white rounded-full shadow-2xl font-bold transition-transform active:scale-90">
    {isOpen4 ? <FaMinus size={18} /> : <FaPlus size={18} />}
    </button>
    
  </div>
</div>
        </div> 
        <div className="">

                <div id="bg1" className="h-full flex justify-between w-full  mt-[20px]">
                    <h4 id="text1" className="text-[20px] text-[#262626] font-semibold ">Basic Crew Neck Tee</h4>
                    <p className="text-[17px] text-[#767676] font-semibold pl-[50px]">$44.00</p>
                
                </div>
                <p className='text-[17px] text-[#767676] font-medium '>Black</p>
                </div>
            </div>
        </div>
        </Container>
  )
}

export default Sliderlayout