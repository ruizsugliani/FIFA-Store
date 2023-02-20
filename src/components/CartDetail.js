import CartItem from "./CartItem"
import { CartContext } from "../contexts/Cart";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

const CartDetail = () => {

    const [totalPrice, setTotalPrice] = useState(0);
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
            <strong>Total: ${totalPrice}</strong>
            <Link className="linkButton" to={"/"}>
                <button className="btn btn-success mb-2">Proceed to payment</button>
            </Link>
            <Link className="linkButton" to={"/cart"}>
                <button className="btn btn-danger mb-2">Clear cart</button>
            </Link>
        </div>
    )
}

export default CartDetail;