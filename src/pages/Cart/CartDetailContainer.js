import CartDetail from "./CartDetail";
import CartCheckout from "./CartCheckout";

const CartDetailContainer = () => {

    return (
        <div className="container d-flex justify-content-center align-items-center justify-content-center align-content-center mt-5">
            <CartDetail />
            <CartCheckout />
        </div>
    )
}

export default CartDetailContainer;