import ItemCount from "./ItemCount"

function Item(props) {
    return (
        <div className="ItemContainer d-flex flex-column card border border-2 border-dark">
            <img src={`${props.pictureUrl}`} alt={`${props.title}`} className="card-img-top" />
            <div className="card-body border-top border-2 border-dark d-flex flex-column justify-content-center align-items-left">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">Price: ${props.price} ARS</p>
                <ItemCount stock="0" initial="1" />
            </div>
        </div>
    )
}

export default Item