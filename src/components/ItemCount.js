import { useState } from "react";
import { thereIsStock } from "../functions/thereIsStock.js"

function ItemCount( { stock, initial } )  {
    const [actualCount, setCount] = useState(parseInt(initial));;

    return <>
        <div className="ItemCountContainer container-fluid d-flex flex-column align-items-center">
            <div className="counterContainer d-flex justify-content-between">
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount > 1 ? setCount(actualCount - 1) : null }>-</button>
                <strong>
                    { thereIsStock(stock, "No stock", actualCount) }
                </strong>
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount < stock ? setCount(actualCount + 1) : null }>+</button>
            </div>
            <div className="addToCartContainer d-flex mt-2">
                <button className="btn btn-primary flex-fill" onClick={ (actualCount) => { alert(`Se agregarán ${ actualCount } productos`) }} disabled = { thereIsStock(stock, true, false) }>Add to cart</button>
            </div>
        </div>
    </>
}

export default ItemCount;