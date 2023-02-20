import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem"

const Cart = () => {

    const [totalPrice, setTotalPrice] = useState(0)
    const { itemsInCart } = useContext(CartContext);

    useEffect( () => {
        itemsInCart.forEach( 
            (item) => {
                let priceToSum = (item.quantity * parseInt(item.price)) / 2;
                setTotalPrice( (prevState) => prevState + priceToSum) //TODO: FIX !
            }
        )
    }, [itemsInCart])

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <h2>
                    There are not items in your cart yet, let's add some items ! 
                </h2>
                <Link className="linkButton" to={"/"}>
                    <button className="btn btn-primary mb-2">Show me !</button>
                </Link>
            </div>

            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <h2>
                    Cart summary
                </h2>
                {
                itemsInCart.map(
                    (item) => {
                        return (
                            <CartItem 
                            title = {item.title}
                            pictureUrl = {item.pictureUrl}
                            quantity = {item.quantity}
                            price = {item.price}
                            />
                        )
                    }
                )
                } 
                <strong>Total: ${totalPrice}</strong>
                <Link className="linkButton" to={"/"}>
                    <button className="btn btn-success mb-2">Proceed to payment</button>
                </Link>
            </div>
        </>
    )
}

export default Cart;