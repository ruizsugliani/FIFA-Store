import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import ItemList from "./ItemList";
import allProducts from "../data/allProducts";
import matchBalls from "../data/matchBalls";
import worldCupWinners from "../data/worldCupWinners";
import products from "../data/products";
import caps from "../data/caps";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ItemListContainer(props) {
    
    const categoryId = useParams();
    const [categoryArray, setCategoryArray] = useState([]);

    useEffect(() => {
        if (categoryId === 1) {
            productService.getAll(matchBalls).then(resp => setCategoryArray(resp));
        } else if (categoryId === 2) {
            productService.getAll(worldCupWinners).then(resp => setCategoryArray(resp));
        } else if (categoryId === 3) {
            productService.getAll(products).then(resp => setCategoryArray(resp));    
        } else if (categoryId === 4) {
            productService.getAll(caps).then(resp => setCategoryArray(resp));
        } else {
            productService.getAll(allProducts).then(resp => setCategoryArray(resp));
        }
        console.log(categoryId)
        console.log(categoryArray)
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
                <ItemList items={categoryArray} />
            </div>
            <Footer />
        </>
    );
}

export default ItemListContainer