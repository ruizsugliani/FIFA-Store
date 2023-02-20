import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/Cart"
import CartPNG from "../images/cart.png"

function CartWidget() {

    const { itemsInCart, hasProducts } = useContext(CartContext)

    const [totalItems, setTotalItems] = useState(0);

    useEffect( () => {
        itemsInCart.forEach(
            (item) => setTotalItems(totalItems + item.quantity))
    }, [itemsInCart])

    return (
        <div className={`CartWidgetContainer container ${ hasProducts() ? "d-flex align-items-center justify-content-center rounded" : "d-none"} `}>
            <img src={CartPNG} alt="CartPNG-Icon" />
            <strong className="rounded">{ totalItems }</strong>
        </div>
    )  
}

export default CartWidget