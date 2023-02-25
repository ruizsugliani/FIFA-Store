import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import itemDeletePNG from "../../assets/trashcan.png"

const CartItemRemove = ( { id } ) => {

    const { removeItem } = useContext(CartContext)

    return (
        <button 
                onClick={() => removeItem(id)}
                type="button" 
                className="btn CartItemRemoveBtn" >
            <img 
                src={itemDeletePNG} 
                alt="item delete button image" />
        </button>
    )
}

export default CartItemRemove;