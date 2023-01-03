import ItemCount from "./ItemCount"

function Item(props) {
    return (
        <div className="ItemContainer d-flex flex-column card border border-2 border-dark">
            <img src={`${props.imageUrl}`} alt={`${props.name}`} className="card-img-top" />
            <div class="card-body border-top border-2 border-dark justify-content-center align-items-center">
                <h2 class="card-title">{props.name}</h2>
                <p class="card-text">${props.price}</p>
                <ItemCount stock="5" initial="1" />
                <a href="/" class="container-fluid btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default Item