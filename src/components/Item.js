import ItemCount from "./ItemCount"

function Item( {title, price, pictureUrl} ) {
    return (
        <div className="ItemContainer d-flex flex-column card border border-2 border-dark m-2">
            <img src={`${pictureUrl}`} alt={`${title}`} className="card-img-top" />
            <div className="card-body border-top border-2 border-dark d-flex flex-column justify-content-center align-items-left">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">Price: ${price}</p>
                <ItemCount stock="0" initial="1" />
            </div>
        </div>
    )
}

export default Item