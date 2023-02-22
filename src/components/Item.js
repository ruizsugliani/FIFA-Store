import { Link } from "react-router-dom"

function Item( {id, title, price, pictureUrl} ) {
    return (
        <Link className="linkButton" to={`/item/${id}`}>
            <div className="ItemContainer d-flex flex-column card border border-2 border-dark m-1 text-dark">
                <img src={`${pictureUrl}`} alt={`${title}`} className="card-img-top" />
                <p className="card-text itemPrice">${price}</p>
                <div className="card-body border-top border-2 border-dark d-flex flex-column align-items-center">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Item;