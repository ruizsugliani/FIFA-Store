import Item from "./Item"

function ItemList( { items } ) {
    return (
        <div className="itemListItems d-flex flex-wrap justify-content-center align-content-center flex-wrap">
            {
                items.map(item => {
                    return (
                        <Item 
                            key={item.id}
                            id={item.id}
                            title = {item.title}
                            description={item.description}
                            price = {item.price}
                            pictureUrl= {item.pictureUrl} /> 
                    )
                })
            }
        </div>  
    )    
}

export default ItemList