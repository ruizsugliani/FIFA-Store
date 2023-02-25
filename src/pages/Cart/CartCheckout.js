import { fsService } from "../../services/fsService";
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
// import uploadOrder from "../services/fsService"
// import Cards from 'react-credit-cards-2'

const CartCheckout = () => {

    const { itemsInCart, clearCart, totalPrice } = useContext(CartContext);

    const [checkoutState, setCheckoutState] = useState({
        fullName: 'Santiago',
        email: 'hola@gmail.com',
        phone: '1122334455'
    });

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center justify-content-center align-content-center mt-5 mb-5">            
            <form className="bg-white p-2 rounded text-start">
                <h2 className="bg-white p-2 rounded text-center mb-3">Contact information</h2>
                <div className="mb-3">
                    <label htmlFor="fullNameInput" className="form-label">Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your full name here"
                        className="form-control border border-dark" 
                        id="fullNameInput" 
                        aria-describedby="fullNameHelp" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email here"
                        className="form-control border border-dark" 
                        id="emailInput" 
                        aria-describedby="emailHelp" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label">Phone</label>
                    <input 
                        type="text" 
                        placeholder="Enter your phone number here"
                        className="form-control border border-dark" 
                        id="phoneInput" 
                        aria-describedby="phoneHelp" 
                    />
                </div>
                <div className="container d-flex flex-column justify-content-center align-items-center mt-5 fs-3 text">
                    <strong className="text-dark mb-2">Total: ${totalPrice}</strong>
                    {/* <Link className="linkButton" to={"/"}> */}
                        <button onClick={ fsService.uploadOrder(itemsInCart) } className="btn btn-success mb-2">Proceed to payment</button>
                    {/* </Link> */}
                    <button onClick={clearCart} className="btn btn-danger mb-2">Clear cart</button>
                </div>
            </form>
        </div>
    )
}

export default CartCheckout;