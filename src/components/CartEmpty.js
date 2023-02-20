import { Link } from "react-router-dom";

const CartEmpty = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <h2>
            There are not items in your cart yet, let's add some items ! 
            </h2>
            <Link className="linkButton" to={"/"}>
                <button className="btn btn-primary mb-2">Show me !</button>
            </Link>
        </div>
    )
}

export default CartEmpty;