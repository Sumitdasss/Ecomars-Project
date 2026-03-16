import { useCart } from "../../Context/Cartcontext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function SingleCartItem({ item }) {
    const { dispatch } = useCart();

    return (
        <div className="flex items-center gap-5 border-b pb-5 mb-5">
            {/* ইমেজ সেকশন */}
            <div className="w-[100px] h-[100px] bg-gray-100">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>

            
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                   
                    <MdDelete 
                        className="text-red-500 cursor-pointer text-xl"
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })} 
                    />
                </div>

                <div className="flex gap-4 text-sm text-gray-500 my-1">
                    <p>Size: <span className="text-black font-medium">{item.size || "XL"}</span></p>
                    <p>Color: <span className="text-black font-medium">{item.color}</span></p>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <h1 className="text-xl font-bold">${item.price}</h1>
                    
                    
                    <div className="flex items-center border px-3 py-1 gap-4">
                        <FaMinus 
                            className="cursor-pointer text-sm"
                            
                            onClick={() => dispatch({ type: "DECREMENT", payload: item.id })} 
                        />
                        <span className="font-semibold w-5 text-center">{item.quantity}</span>
                        <FaPlus 
                            className="cursor-pointer text-sm"
                            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}