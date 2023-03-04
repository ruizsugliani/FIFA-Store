import { useEffect, useState } from "react";
import { fsService } from "../services/fsService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';

function ItemListContainer() {
    
    const { categoryId } = useParams();
    const [categoryArray, setCategoryArray] = useState([]);

    useEffect(() => {
        if (categoryId) {
            fsService.getProductsByCategory(categoryId).then(resp => setCategoryArray(resp));
        } else {
            fsService.getProducts().then(resp => setCategoryArray(resp));
        }
    },[categoryId]);

    return (
        <div className="ItemListContainer container-fluid d-flex flex-column justify-content-center align-items-center">
            {/* <div className="itemListDescription container-fluid">
                <button onClick={fsService.uploadProducts}>
                    Agregar Productos
                </button>
            </div> */}
            <h1 className="text-light">Welcome to FIFA STORE</h1>
            {
                (categoryArray.length === 0) ?
                <ReactLoading type={"bars"} color={"black"} height={'5%'} width={'5%'} /> :
                <ItemList items={categoryArray} />
            }
        </div>
    );
}

export default ItemListContainer