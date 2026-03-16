import Carsummery from "./Cartsummery"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../Context/Cartcontext"
import SingleCartItem from "./Cartitem" // ১. কম্পোনেন্টের নাম বদলে SingleCartItem দিন

export default function Cart() {
    const navigate = useNavigate();
    const { state } = useCart();
    
   
    const cartData = state?.Cartitem || []; 

    if (cartData.length === 0) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">Your cart is empty</h1>
                <button 
                    className="mt-5 bg-black text-white px-6 py-2" 
                    onClick={() => navigate("/")}
                >
                    Go To Home
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-5">
            <div>
                <div className="flex gap-2 cursor-pointer">
                    <h1 onClick={() => navigate("/")}>Home &gt;</h1>
                    <h2 className="font-bold">Cart</h2>
                </div>
                <h1 className="text-3xl font-bold my-5">Your Cart</h1>
            </div>

            <div className="space-y-4">
              {state.Cartitem.map((item) => (
    <SingleCartItem key={item.id} item={item} />
))}
            </div>

            <div className="mt-10">
                <Carsummery />
            </div>
        </div>
    )
}