import { useCart } from "../Context/Cartcontex"
import Cartsummery from "./Cartsummery"
import { useNavigate } from "react-router-dom"
import Cartitem from "./Cartitem";
export default function Cart() {
    const navigate =useNavigate();
    const {state} =useCart();
    const {Cartitem} = state;
    if(Cartitem.length ===0){
        return(
            <div>
                <h1>Your Cart is Emty</h1>
                <button onClick={()=>navigate("/")}></button>
            </div>
        )

    }
    

    
    return(
        <>
        <div className="">
            <div className="">
                <div className="">
                    <h1 onClick={()=> navigate("/")}>Home &gt;</h1>
                   <h2>Cart</h2> 


                </div>
                <h1>Your Cart</h1>
                </div>
                <div className="">
                    <div className="">
                        {Cartitem.map((item) =>(
                          <Cartitem key={item.id}  item={item}/> 
                        ))}
                    </div>
                    <div className="">
                        <Cartsummery/>
                    </div>
                </div>
                </div>
                </>
    )
    
}