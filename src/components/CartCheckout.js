import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";
// import Cards from 'react-credit-cards-2'

const CartCheckout = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const { itemsInCart } = useContext(CartContext);

    useEffect( () => {
        itemsInCart.forEach( 
            (item) => {
                let priceToSum = (item.quantity * parseInt(item.price)) / 2;
                setTotalPrice( (totalPrice) => totalPrice + priceToSum) //TODO: FIX (se está llamando dos veces el useEffect, por eso divido por 2)!
            }
        )
    }, [itemsInCart])

    const [checkoutState, setCheckoutState] = useState({
        fullName: '',
        email: '',
        phone: ''
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
                    <Link className="linkButton" to={"/"}>
                        <button className="btn btn-success mb-2">Proceed to payment</button>
                    </Link>
                    <Link className="linkButton" to={"/cart"}>
                        <button className="btn btn-danger mb-2">Clear cart</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CartCheckout;