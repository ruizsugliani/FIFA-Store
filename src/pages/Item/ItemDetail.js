import { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import AddedToCartAd from "../../components/AddedToCartAd"
import { CartContext } from "../../contexts/CartContext"

function ItemDetail( { id, description, title, price, pictureUrl } ) {

    const { itemsInCart, setItemsInCart, addNewItem } = useContext(CartContext)
    const [ successOnAdd, setSuccessOnAdd] = useState(false)


    const addToCart = (quantity) => {
        let newItem =   {
                            id: id,
                            title: title, 
                            price: price, 
                            pictureUrl: pictureUrl, 
                            quantity: quantity
                        }
        addNewItem(newItem);
        setSuccessOnAdd(true);
    }

    return (
            <div className="ItemDetailContainer d-flex container bg-secondary-subtle m-4 border border-dark rounded">
                <div className="DetailPictureContainer">
                    <img src={`${pictureUrl}`} alt={`${title}`} />
                </div>
                <div className="container d-flex flex-column justify-content-center">
                    <h2 className="fs-1">{`${title}`}</h2>
                    <span className="fs-4">{`${description}`}</span>
                    <span className="fs-4">{`Price $${price}`}</span>

                    { 
                    successOnAdd ?
                    <AddedToCartAd itemTitle={title} />:
                    <ItemCount stock="10" initial="1" onAdd={addToCart} />                    
                    }

                </div>
            </div>
    )
}

export default ItemDetail;