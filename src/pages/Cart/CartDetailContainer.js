import CartDetail from "./CartDetail";
import CartCheckout from "./CartCheckout";
import { useEffect, useState, useContext } from "react";

const CartDetailContainer = () => {

    return (
        <div className="container d-flex justify-content-center align-items-center justify-content-center align-content-center mt-5">
            <CartDetail />
            <CartCheckout />
        </div>
    )
}

export default CartDetailContainer;