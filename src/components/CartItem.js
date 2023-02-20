const CartItem = ( {title, pictureUrl, quantity, price} ) => {
    return (
        <div className="card mb-3 d-flex flex-row justify-content-center">
            <div className="cartItemPictureContainer col-md-4">
                <img src={`${pictureUrl}`} alt={`${title}`} className="img-fluid rounded-start" />
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text m-0">
                    <small className="text-muted">
                        Quantity in cart: {quantity}
                    </small>
                </p>
                <p className="card-text m-0">
                    <small className="text-muted">
                        Total price: ${parseInt(price) * quantity}
                    </small>
                </p>
            </div> 
        </div>
    )
}

export default CartItem;