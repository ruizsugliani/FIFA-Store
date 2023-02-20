import { CartContext } from "../contexts/Cart";
import { useContext, useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";
import CartDetail from "./CartDetail";

const Cart = () => {
    
    const { hasProducts } = useContext(CartContext);

    return (
        <>
            {
            hasProducts() ?
            <CartDetail />
            :
            <CartEmpty />
            }
        </>
    )
}

export default Cart;