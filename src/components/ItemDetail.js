import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "./ItemCount"
import checkPNG from "./../images/comprobado.png"

function ItemDetail( { description, title, price, pictureUrl } ) {

    const [ addedItems, setAddedItems ] = useState(0)

    const addToCart = (cantidad) => {
        setAddedItems(addedItems + parseInt(cantidad));
    }

    return (
        <>
            <div className="ItemDetailContainer d-flex container bg-secondary-subtle m-4 border border-dark rounded">
                <div className="DetailPictureContainer">
                    <img src={`${pictureUrl}`} alt={`${title}`} />
                </div>
                <div className="container d-flex flex-column justify-content-center">
                    <h2 className="fs-1">{`${title}`}</h2>
                    <span className="fs-4">{`${description}`}</span>
                    <span className="fs-4">{`Price $${price}`}</span>
                    {
                        !addedItems ?
                        <ItemCount stock="10" initial="1" onAdd={addToCart} />:
                        <div className="container d-flex flex-column mt-5 p-3 fs-3 justify-content-center align-items-center">
                            <img src={checkPNG} className="PNGsuccess" alt="Success adding items to cart" />
                            You added {addedItems}  {title}/s to the cart !
                            <Link className="linkButton" to={"/"}>
                                <button className="btn btn-primary mb-2">Keep buying</button>
                            </Link>
                            <Link className="linkButton" to={"/cart"}>
                                <button className="btn btn-success">Go to cart</button>
                            </Link>
                            
                        </div>
                    }
                </div>
            </div>
        </>
    )

}

export default ItemDetail;