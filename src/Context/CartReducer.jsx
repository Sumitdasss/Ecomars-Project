// eslint-disable-next-line react-refresh/only-export-components
export const initialstate = {
    Cartitem: [], // এখানে 'i' ছোট হাতের আছে, এটি খেয়াল রাখবেন
}

export function Cartreduser(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const item = action.payload;
            const existingitem = state.Cartitem.find((c) => c.id === item.id);
            if (existingitem) {
                return {
                    ...state,
                    Cartitem: state.Cartitem.map((c) =>
                        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
                    )
                }
            }
            return {
                ...state,
                Cartitem: [...state.Cartitem, { ...item, quantity: 1 }]
            }
        }
        case "INCREMENT": // এটি অবশ্যই যোগ করুন
            return {
                ...state,
                Cartitem: state.Cartitem.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case "DECREMENT":
            return {
                ...state,
                Cartitem: state.Cartitem.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ).filter((item) => item.quantity > 0)
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                Cartitem: state.Cartitem.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
}