import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const clear = () => setItems([]);

    const addItem = (item) => {
        if(items.find(prod => item.id === prod.id))
        {
            let aux = items.map(prod => {
                if(prod.id === item.id)
                    return { ...prod, quantity: prod.quantity + item.quantity };
                else
                    return prod;
            });
            setItems(aux);
        }
        else
            setItems(prev => [...prev, item]);
    };

    const removeItem = (item) => {
        if(items.find(prod => item.id === prod.id))
        {
            let aux = items.filter(prod => prod.id != item.id);
            setItems(aux);
        }
        else
            console.error("No se encontró item con ID: "+item.id)
    };

    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = items.reduce((sum, item) => sum + item.price*item.quantity, 0).toFixed(2);
    
    return(
        <CartContext.Provider value={{items, addItem, removeItem, clear, cartCount, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
