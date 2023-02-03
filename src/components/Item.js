import { Link } from "react-router-dom"

function Item( {id, title, price, pictureUrl} ) {
    return (
        <div className="ItemContainer d-flex flex-column card border border-2 border-dark m-2">
            <img src={`${pictureUrl}`} alt={`${title}`} className="card-img-top" />
            <div className="card-body border-top border-2 border-dark d-flex flex-column justify-content-center align-items-center">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">Price: ${price}</p>
                <Link className="linkButton" to={`/item/${id}`}>
                    <button type="button" className="btn btn-primary">
                        More details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item;