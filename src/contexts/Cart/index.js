import { createContext, useState } from "react";

const CartContext = createContext({});

const CartProvider = ( { children } )  => {

    const [ itemsInCart, setItemsInCart ] = useState([])

    const hasProducts = () => {
        return itemsInCart.length > 0;
    }

    return (
        <CartContext.Provider value={ {itemsInCart, setItemsInCart, hasProducts} }>
            { children }
        </CartContext.Provider>
    )

}
export { CartContext, CartProvider }
