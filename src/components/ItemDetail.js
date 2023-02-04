import ItemCount from "./ItemCount"

function ItemDetail( { description, title, price, pictureUrl } ) {

    return (
        <>
            <div className="ItemDetailContainer d-flex container bg-secondary-subtle m-4 border border-dark rounded">
                <div className="DetailPictureContainer">
                    <img src={`${pictureUrl}`} alt={`${title}`} />
                </div>
                <div className="container d-flex flex-column justify-content-center">
                    <h2 className="fs-1">{`${title}`}</h2>
                    <span className="fs-4">{`${description}`}</span>
                    <span className="fs-4">{`Price $${price}`}</span>
                    <ItemCount stock="10" initial="1" />
                </div>
            </div>
        </>
    )

}

export default ItemDetail;