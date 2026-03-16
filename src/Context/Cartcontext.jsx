import { createContext, useContext, useReducer } from "react";
import { Cartreduser, initialstate } from "./CartReducer";


const CartContext = createContext();

export function CartProvider({ children }) {
   
    const [state, dispatch] = useReducer(Cartreduser, initialstate);

    return (
       
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    return useContext(CartContext);
}