import ItemDetail from "./ItemDetail";
import { fsService } from "../../services/fsService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ReactLoading from "react-loading";

function ItemDetailContainer() {

    const  { itemId } = useParams();
    const [item, setItem] = useState(undefined);

    useEffect( () => {
        fsService.getProduct(itemId).then(resp => setItem(resp));
    }, [itemId])
    
    return (
        <div className="container d-flex justify-content-center align-items-center">
            {
                (item) ? 
                <ItemDetail 
                            id = {`${item && item.id}`}
                            description = {`${item && item.description}`}
                            title = {`${item && item.title}`}
                            price = {`${item && item.price}`}
                            pictureUrl = {`${item && item.pictureUrl}`} />
                : 
                <ReactLoading type={"bars"} color={"#black"} height={'5%'} width={'5%'} />
            }
        </div>
    )

}

export default ItemDetailContainer;