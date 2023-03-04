import { useState, useContext } from 'react'
import { CartContext } from "../../contexts/CartContext";
import CartOrderControl from "./CartOrderControl"

const CartCheckout = () => {

    const { totalPrice } = useContext(CartContext);

    const [contactInfo, setContactInfo] = useState({
        fullName:           '',
        fullNameValidator:  '',
        email:              '',
        emailValidator:     '',
        phone:              '',
        phoneValidator:     ''
    });
    
    const handleInputChange = (event) => {
        const value = event.target.value;
        const fieldId = event.target.id;
        setContactInfo( () => ({...contactInfo, [fieldId]:  value}));
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center justify-content-center align-content-center mt-5 mb-5">            
            <form className="bg-white p-2 rounded text-start">
                <h2 className="bg-white p-2 rounded text-center mb-3">Contact information</h2>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Name</label>
                    <input 
                        type="text" 
                        onChange={handleInputChange}
                        placeholder="Enter your full name here"
                        className="form-control border border-dark" 
                        id="fullName" 
                        aria-describedby="fullNameHelp" 
                        minLength={8}
                        maxLength={35}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        onChange={handleInputChange}
                        placeholder="Enter your email here"
                        className="form-control border border-dark" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        minLength={8}
                        maxLength={50}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter your phone number here"
                        className="form-control border border-dark" 
                        id="phone" 
                        aria-describedby="phoneHelp" 
                        minLength={10}
                        maxLength={10}
                    />
                </div>
                <div className={`container d-flex flex-column justify-content-center align-items-center mt-5 fs-3 text`}>
                    <strong className="text-dark mb-2">Total: ${totalPrice}</strong>
                    <CartOrderControl contactInfo={contactInfo}/>
                </div>
            </form>
        </div>
    )
}

export default CartCheckout;