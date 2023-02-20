import { useState, useContext } from "react";
import { CartContext } from "../contexts/Cart";

const CartItemRemove = ( {id} ) => {

    const INITIAL_QUANTITY_TO_REMOVE = 1;
    const [actualCount, setCount] = useState(INITIAL_QUANTITY_TO_REMOVE);
    const { itemsInCart } = useContext(CartContext)

    const fillDropDown = (id) => {
        const actUl = document.getElementById(`${id}`);
        const actItem = itemsInCart.find( item => item.id == id );
    
        for (let i = 1; i <= actItem.quantity; i++) {
            const actA = document.createElement('a');
            actA.className = "dropdown-item"
            actA.innerHTML = {i}
            
            const actLi = document.createElement('li');
            actLi.appendChild(actA);
    
            actUl.appendChild(actLi);
            
            // actUl.appendChild(
            //     <li onClick={ () => setCount(i)}>
            //         <a class="dropdown-item">
            //             {i}
            //         </a>
            //     </li>        
            // )                                       
        }
    }

    return (
        <div className="counterContainer d-flex justify-content-between pt-5">
            <p className="card-text m-0">
                <small className="text-muted">
                    Remove
                </small>
            </p>
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {
                        actualCount
                    }
                </a>

                <ul className="dropdown-menu" id={`${id}`}>
                    {
                        fillDropDown(id)
                    }
                </ul>
            </div>
        </div>
    )
}

export default CartItemRemove;