import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
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