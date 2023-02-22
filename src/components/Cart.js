import { CartContext } from "../contexts/Cart";
import { useContext, useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";
import CartDetailContainer from "./CartDetailContainer";

const Cart = () => {
    
    const { hasProducts } = useContext(CartContext);

    return (
        <>
            { hasProducts() ? <CartDetailContainer /> : <CartEmpty /> }
        </>
    )
}

export default Cart;