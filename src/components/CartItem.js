import CartItemRemove from "./CartItemRemove";

const CartItem = ( {id, title, pictureUrl, quantity, price} ) => {

    return (
        <div className="card mb-3 d-flex flex-row justify-content-center">
            <div className="cartItemPictureContainer col-md-4">
                <img src={`${pictureUrl}`} alt={`${title}`} className="img-fluid rounded-start" />
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text m-0">
                    <small className="text-muted">
                        Unit price: ${parseFloat(price)}
                    </small>
                </p>
                <p className="card-text m-0">
                    <small className="text-muted">
                        Total price: ${parseFloat(price) * quantity}
                    </small>
                </p>
                <p className="card-text m-0">
                    <small className="text-muted">
                        Quantity: {quantity}
                    </small>
                </p>
            </div> 
            {/* <CartItemRemove id={id} /> */}
        </div>
    )
}

export default CartItem;