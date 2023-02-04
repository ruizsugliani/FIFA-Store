import Item from "./Item"

function ItemList( { items } ) {
    return (
        <div className="itemListItems container-md d-flex flex-wrap justify-content-center align-content-center flex-wrap overflow-hidden">
            <div className="row gy-3 gx-0">
            {
                items.map( ({ id, title, description, price, pictureUrl }) => {
                    return (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <Item 
                                    key={id}
                                    id={id}
                                    title = {title}
                                    description={description}
                                    price = {price}
                                    pictureUrl= {pictureUrl} /> 
                            </div>
                    )
                })
            }
            </div>
        </div>  
    )    
}

export default ItemList