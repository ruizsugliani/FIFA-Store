import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemDetail from "./ItemDetail";
import { productService } from "../services/productService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function ItemDetailContainer() {

    const [item, setItem] = useState();
    const  {itemId} = useParams();

    useEffect( () => {
        productService.getById(itemId)
        .then(data => setItem(data))
    }, [itemId])
    
    return (
        <>
            <NavBar />
            <ItemDetail 
                description = {`${item && item.description}`}
                title = {`${item && item.title}`}
                price = {`${item && item.price}`}
                pictureUrl = {`${item && item.pictureUrl}`}
            />
            <Footer />
        </>
    )

}

export default ItemDetailContainer;