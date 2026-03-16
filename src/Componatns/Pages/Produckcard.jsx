import { FaPlus, FaMinus, FaCodeCompare, FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import React, { useState } from 'react';

export default function Produckcard({ item }) {
  const [isOpen1, setIsOpen1] = useState(false);

  if (!item) return null;

  return (
    
    <div className="w-[350px] mb-[50px] relative">
      
   
      <div className="relative h-[370px] w-full group overflow-hidden">
        <img src={item.img} className='w-full h-full object-cover' alt={item.name} />
        
       
        <div className="absolute px-7 py-3 top-[10px] left-[10px] bg-[#262626] text-[16px] font-semibold text-white">
          New
        </div>

        <div className="absolute bottom-5 right-5 flex flex-col items-center">
          <button className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px] rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ${isOpen1 ? '-translate-y-16 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
            <FaHeart />
          </button>
          
          <button className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px] rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ${isOpen1 ? '-translate-y-32 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
            <FaCodeCompare />
          </button>
          
          <button className={`absolute h-11 w-11 text-[#5B5F77] focus:text-red-600 text-[24px] rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ${isOpen1 ? '-translate-y-48 scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
            <FaCartShopping />
          </button>

          <button 
            onClick={() => setIsOpen1(!isOpen1)} 
            className="relative z-10 h-11 w-11 bg-[#262626] flex items-center justify-center text-white rounded-full shadow-2xl transition-transform active:scale-90"
          >
            {isOpen1 ? <FaMinus size={18} /> : <FaPlus size={18} />}
          </button>
        </div>
      </div>

     
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[20px] text-[#262626] font-semibold">{item.name}</h4>
          <p className="text-[17px] text-[#767676] font-semibold">${item.price}</p>
        </div>
        <p className='text-[17px] text-[#767676] font-medium mt-1'>{item.color}</p>
      </div>
      
    </div>
  );
}