import { createContext, useState, useMemo } from "react";

const CartContext = createContext({});

const CartProvider = ( { children } )  => {

    const [ itemsInCart, setItemsInCart ] = useState([]);

    const itemsTotal = useMemo(() => {
        return itemsInCart.reduce((acc, item) => parseInt(acc) + item.quantity, 0);
    }, [itemsInCart]);

    const totalPrice = useMemo(() => {
        return itemsInCart.reduce((acc, item) => parseInt(acc) + (item.price * item.quantity), 0);
    }, [itemsInCart]);

    const hasProducts = () => {
        return itemsInCart.length > 0;
    }

    const isAlreadyInCart = (newItem) => {
        return itemsInCart.some(item => item.title === newItem.title)
    }

    const updateQuantity= (newItem) => {
        let itemIndex = itemsInCart.findIndex(item => item.title === newItem.title);
        itemsInCart[itemIndex].quantity += newItem.quantity;
    }

    const addNewItem = (newItem) => {
        isAlreadyInCart(newItem) ? updateQuantity(newItem) : setItemsInCart([...itemsInCart, newItem]);
    }

    const removeItem = (id) => {
        let updatedItemsInCart = itemsInCart.filter( item => item.id != id );
        setItemsInCart(updatedItemsInCart);
    }

    const clearCart = () => {
        setItemsInCart([])
    }

    return (
        <CartContext.Provider value={ {itemsInCart, setItemsInCart, hasProducts, addNewItem, itemsTotal, removeItem, clearCart, totalPrice} }>
            { children }
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }