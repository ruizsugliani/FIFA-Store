import { useState } from "react";

function ItemCount( { stock, initial } )  {
    const [actualCount, setCount] = useState(parseInt(initial));
    return <>
        <div className="ItemCountContainer d-flex justify-content-between align-items-center">
            <button class="btn btn-primary" onClick={() => actualCount > 1 ? setCount(actualCount - 1) : null }>-</button>
            <strong> { actualCount } </strong>
            <button class="btn btn-primary" onClick={() => actualCount < stock ? setCount(actualCount + 1) : null }>+</button>
        </div>
    </>
}

export default ItemCount;