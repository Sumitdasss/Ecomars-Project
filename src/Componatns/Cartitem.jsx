import { useCart } from "../Context/Cartcontex"
import { FaTrashAlt,FaPlus,FaMinus } from "react-icons/fa";

export default function Cartitem({item}){
    const {dispatch}=useCart();

    return(<>
    <div className="">
        <div className="">
            <img src={item.img} alt={item.name} />
            <div className="">
                <div className="">
< FaTrashAlt onClick={()=> dispatch({ type:"REMOVE_FROM_CART", payload:item.id})}/>
                </div>
            
                    <div className="">
                <p>{item.name}</p>
            </div>
            <div className="">
                <p>{item.color}</p>
            </div>
            <div className="">
                <p>{item.price}</p>
            </div>
            <div className="">
                <p>{item.size}</p>
            </div> 
                 <div className="">
<FaMinus onClick={()=>dispatch({type:"DECREMENT",payload:item.id})}/>
    <span>{item.quantity}</span>
    <FaPlus onClick={()=>dispatch({type:"INCREMENT",payload:item.id})}/>
                 </div>
            </div>
        </div>
    </div>
    </>)
}