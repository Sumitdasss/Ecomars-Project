import { createContext, useContext, useReducer } from "react";
// Import er somoy file name 'CartReduser' (S diye) ebong bracket-e 'CartReducer' (C diye) kheyal korun
import { initialState, CartReducer } from "./CartReduser"; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);