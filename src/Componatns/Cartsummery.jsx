import { useCart } from "../Context/Cartcontex";
export default function Cartsummery(){
    const {state} =useCart();
    const {cartItem}=state;
const totalItem= cartItem.reduce((sum,item)=>sum+item.quantity,0)
const subTotal= cartItem.reduce((sum,item)=>sum+item.price * item.quantity,0)
const discount= subTotal*0.2
const delevery =15;
const total= subTotal-discount+delevery

    return(
        <>
        <div className="">
            <h1>Order sumery</h1>
            <div className="">
<div className="">
    <p>{subTotal}</p>
</div>
<div className="">
    <p>{totalItem}</p>
</div>
<div className="">
    <p>${discount}</p>
</div>
<div className="">
    <p>${total}</p>
</div>
<button>Go To Checout</button>
            </div>
            </div></>
    )
}