

function Item(props) {
    return (
        <div className="ItemContainer d-flex flex-column card border border-2 border-dark">
            <img src={`${props.imageUrl}`} alt={`${props.name}`} className="card-img-top" />
            <div class="card-body border-top border-2 border-dark">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">${props.price}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default Item