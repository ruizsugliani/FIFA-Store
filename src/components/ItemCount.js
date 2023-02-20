import { useState } from "react";
import { thereIsStock } from "../functions/thereIsStock.js"

function ItemCount( { stock, initial, onAdd } )  {

    const [actualCount, setCount] = useState(parseInt(initial));

    const showAvailableStock = (stock) => {
        if (parseInt(stock) === 0) {
           return <span className="fs-5 border rounded border-primary p-1">{`Sorry, we ran out of stock`}</span>
        } else if (parseInt(stock) <= 5) {
            return<span className="fs-5 border rounded border-primary p-1">{`Hurry, the is available stock is ${stock} units`}</span>
        }
        return <span className="fs-5 border rounded border-primary p-1">{`Available stock: ${stock} units`}</span>
    }

    return <>
        <div className="ItemCountContainer container-fluid d-flex flex-column align-items-center mt-5">
            <div className="counterContainer d-flex justify-content-between pt-5">
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount > 1 ? setCount(actualCount - 1) : null }>-</button>
                <strong className="fs-3">
                    { thereIsStock(stock, "No stock", actualCount) }
                </strong>
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount < stock ? setCount(actualCount + 1) : null }>+</button>
            </div>
            <div className="addToCartContainer d-flex mt-2">
                <button className="btn btn-primary flex-fill"
                        onClick={ () => onAdd( actualCount )}
                        disabled = { thereIsStock(stock, true, false) }>Add to cart
                </button>
            </div>
            <div className="stockContainer d-flex justify-content-between mt-2">
                {
                    showAvailableStock(stock)
                }
            </div>
        </div>
    </>
}

export default ItemCount;