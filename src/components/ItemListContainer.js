import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import ItemList from "./ItemList";
import allProducts from "../data/allProducts";
import nationsEquipment from "../data/nationsEquipment";
import worldCupMerch from "../data/worldCupMerch";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ReactLoading from 'react-loading';

function ItemListContainer(props) {
    
    const { categoryId } = useParams();
    const [categoryArray, setCategoryArray] = useState([]);

    useEffect(() => {
        if (parseInt(categoryId) === 1) {
            productService.getAll(nationsEquipment).then(resp => setCategoryArray(resp));
        } else if (parseInt(categoryId) === 2) {
            productService.getAll(worldCupMerch).then(resp => setCategoryArray(resp));
        } else {
            productService.getAll(allProducts).then(resp => setCategoryArray(resp));
        }
    },[categoryArray, categoryId]);

    return (
        <>
            <NavBar />
            <div className="ItemListContainer container-fluid d-flex flex-column justify-content-center align-items-center">
                <div className="itemListDescription container-fluid">
                    <strong>
                        {props.greeting}
                    </strong>
                </div>
                {
                    (categoryArray.length === 0) ? <ReactLoading type={"bars"} color={"black"} height={'20%'} width={'20%'} /> : <ItemList items={categoryArray} />
                }
            </div>
            <Footer />
        </>
    );
}

export default ItemListContainer