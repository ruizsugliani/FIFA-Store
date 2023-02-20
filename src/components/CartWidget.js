import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/Cart"

function CartWidget() {

    const { itemsInCart } = useContext(CartContext)

    const [totalItems, setTotalItems] = useState(0);

    useEffect( () => {
        itemsInCart.forEach(
            (item) => setTotalItems(totalItems + item.quantity))
    }, [itemsInCart])

    return (
        <div className="CartWidgetContainer container d-flex align-items-center justify-content-center rounded">
            <i className="fa-solid fa-cart-shopping"></i>
            <strong>{ totalItems }</strong>
        </div>
    )  
}

export default CartWidget