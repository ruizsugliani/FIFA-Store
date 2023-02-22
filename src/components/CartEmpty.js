import { Link } from "react-router-dom";
import EmptyCartLogo from "../images/empty_cart.png"

const CartEmpty = () => {
    return (
        <div className="CartEmptyContainer container d-flex flex-column align-content-center justify-content-center align-items-center mt-5">
            <h2 className="text-light">
                Okay, you are not supposed to be here.
                <br />
                There are not products in your cart yet, let's add some products ! 
            </h2>
            <img src={EmptyCartLogo} alt="Empty cart logo" />
            <Link className="linkButton mt-2" to={"/"}>
                <button className="btn btn-primary mb-2">Show me !</button>
            </Link>
        </div>
    )
}

export default CartEmpty;