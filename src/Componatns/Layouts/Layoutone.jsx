import React from "react";
import Container from "../Common/Container";
import Button from "../Common/Button";
import Flex from "../Common/Flex";
import Icontwo from "../Common/Icontwo";
import Iconthree from "../Common/Iconthree";
import Iconfour from "../Common/Iconfour";

export const Layoutone = () => {
  return (
    <div className="">
      <div className="bg-[url(/src/assets/Image.jpg)] bg-cover bg-center h-[600px]">
        <Container>
          <div className="">
            <h1 className="text-[49px] text-[#262626] font-bold pt-[180px]">Final Offer</h1>
         <div className=" items-center flex gap-x-3">
               <p className="text-[16px] text-[#6D6D6D] font-medium">Up to</p>
                  <p className="text-[40px] text-[#262626] font-bold">50% </p> 
                     <p className="text-[16px] text-[#6D6D6D] font-medium"> sale for all furniture items!</p>

         </div>
            <Button text={"Shop Now"} className={"px-7 py-2 text-[16px] font-semibold bg-[#262626] text-white mt-[20px]"}/>
          </div>



        </Container>
      </div>
      <div className="border-t-2 border-b-2 border-[#F0F0F0] ">
      <Container>
<Flex className={"justify-between h-[80px]"}>
    <div className="text-[16px] text-[#6D6D6D] font-medium flex items-center"><span className="mr-[15px]"><Icontwo/></span>Two years warranty</div>
    <div className="text-[16px] text-[#6D6D6D] font-medium flex items-center"><span className="mr-[15px]"><Iconthree/></span>Free shipping</div>
    <div className="text-[16px] text-[#6D6D6D] font-medium flex items-center"><span className="mr-[15px]"><Iconfour/></span>Return policy in 30 days</div>
</Flex>
      </Container>
      </div>
    </div>
  );
};
