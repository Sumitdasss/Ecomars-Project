import React from 'react'
import Container from '../Common/Container'
import Flex from '../Common/Flex'
import Button from '../Common/Button'

const Layouttwo = () => {
  return (
    <div className=''>
<Container>
    <div className={"justify-between flex mt-[140px]"}>
        <div className="w-[650px] h-[780px] bg-[url(/src/assets/Image.png)] bg-cover bg-no-repeat bg-center">
           <div className="ml-[67px]">
            <h1 className="text-[49px] text-[#262626] font-bold pt-[500px]">Phones Sale</h1>
         <div className=" items-center flex gap-x-3">
               <p className="text-[16px] text-[#6D6D6D] font-medium">Up to</p>
                  <p className="text-[40px] text-[#262626] font-bold">30% </p> 
                     <p className="text-[16px] text-[#6D6D6D] font-medium"> sale for all phones!</p>

         </div>
            <Button text={"Shop Now"} className={"px-7 py-2 cursor-pointer text-[16px] font-semibold bg-[#262626] text-white mt-[20px]"}/>
          </div>

        </div>
        <div className="">

            <div className="w-[750px] h-[368px] bg-[url(/src/assets/1.png)] bg-cover bg-no-repeat bg-center">
              <div className="ml-[54px]">
            <h1 className="text-[49px] text-[#262626] font-bold pt-[75px]">Electronics Sale</h1>
         <div className=" items-center flex gap-x-3">
               <p className="text-[16px] text-[#6D6D6D] font-medium">Up to</p>
                  <p className="text-[40px] text-[#262626] font-bold">70% </p> 
                     <p className="text-[16px] text-[#6D6D6D] font-medium"> sale for all electronics!</p>

         </div>
            <Button text={"Shop Now"} className={"px-7 py-2 cursor-pointer text-[16px] font-semibold bg-[#262626] text-white mt-[20px]"}/>
          </div></div>
            <div className="w-[750px] h-[368px] bg-[url(/src/assets/Ad_3.jpg)] bg-cover bg-no-repeat bg-center mt-[40px]">
              <div className="ml-[54px]">
            <h1 className="text-[49px] text-[#262626] font-bold pt-[75px]">Furniture Offer</h1>
         <div className=" items-center flex gap-x-3">
               <p className="text-[16px] text-[#6D6D6D] font-medium">Up to</p>
                  <p className="text-[40px] text-[#262626] font-bold">50% </p> 
                     <p className="text-[16px] text-[#6D6D6D] font-medium">sale for all furniture items!</p>

         </div>
            <Button text={"Shop Now"} className={"px-7 py-2 cursor-pointer text-[16px] font-semibold bg-[#262626] text-white mt-[20px]"}/>
          </div></div>
        </div>

    </div>
</Container>
    </div>
  )
}

export default Layouttwo