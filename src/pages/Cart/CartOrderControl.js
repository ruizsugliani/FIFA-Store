import OrderCompleteGIF from "../../assets/payment.gif"
import { fsService } from "../../services/fsService";
import { useState, useContext } from 'react'
import { CartContext } from "../../contexts/CartContext";

const CartOrderControl = ( {contactInfo} ) => {

    const { itemsInCart, clearCart } = useContext(CartContext);
    const [ orderId, setOrderId ] = useState(undefined);

    async function processOrder(e, contactInfo) {
        e.preventDefault();
        const response = await fsService.uploadOrder(itemsInCart, contactInfo);
        setOrderId(response.id);
    }

    return (
        <>
            <button onClick={(e) => processOrder(e, contactInfo)} type="button" className="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Proceed to payment
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-start PurchaseCompleteContainer">
                            <img src={OrderCompleteGIF} alt="Order completed GIF"/>
                            <h1 className="modal-title fs-5 ml-1" id="staticBackdropLabel">Order completed</h1>
                        </div>
                        <div className="modal-body">
                            <p className="fs-6 text">Your order id is { orderId }</p>
                            <p className="fs-6 text">Thank you for trusting us, hope you had a wonderful time in our app!</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={clearCart} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={clearCart} className="btn btn-danger mb-2">Clear cart</button>
        </>
    )
}

export default CartOrderControl;