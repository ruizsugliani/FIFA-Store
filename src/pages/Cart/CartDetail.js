import CartItem from "./CartItem"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartDetail = () => {

    const { itemsInCart } = useContext(CartContext);

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <h2 className="text-light">
                Cart summary
            </h2>
            {
                itemsInCart.map(
                    (item) => {
                        return (
                            <CartItem 
                            id = {item.id}
                            title = {item.title}
                            pictureUrl = {item.pictureUrl}
                            quantity = {item.quantity}
                            price = {item.price}
                            />
                        )
                    }
                )
            } 
        </div>
    )
}

export default CartDetail;