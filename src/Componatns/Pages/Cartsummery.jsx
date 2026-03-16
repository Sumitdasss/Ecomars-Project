import { useCart } from "../../Context/Cartcontext";

export default function Carsummery() {

    const {state} =useCart();
    const {Cartitem}=state

    const totalitem= Cartitem.reduce((sum,item)=> sum+item.quantity,0)
    const subtotal = Cartitem.reduce((sum,item)=>sum +item.price * item.quantity,0) 
    const discount= subtotal *0.2;

    const deleveryfee= 15;
    const total =subtotal -discount+deleveryfee
    return(
        <div>
            <h1>Order Summery</h1>
            <div>
                <div>
                    <p>subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <div className="">
                    <p>total Item</p>
                    <p>${totalitem}</p>
                </div>
                <div className="">
                    <p>Discount</p>
                    <p>${discount}</p>
                </div>
                <div className="">
                    <p>delevery fee</p>
                    <p>${deleveryfee}</p>
                </div>
            </div>
            <div className="">
                <p>total</p>
                <p>${total}</p>
            </div>
            <button>Go to chekup</button>
        </div>
    )
    
}