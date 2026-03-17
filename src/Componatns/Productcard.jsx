
import { useCart } from "../Context/Cartcontex"

export default function Productcard({item}){
    const {dispatch}=useCart();
    const handleAddToCart=()=>{
dispatch({
   type:"ADD_TO_CART" ,
   payload:item
})
    }
    return(
        <div>
            <div>
                <img src={item.img} alt={item.name} />
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
            <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    )
}