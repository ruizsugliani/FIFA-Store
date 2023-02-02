import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import ItemList from "./ItemList";
import matchBalls from "../data/matchBalls";

function ItemListContainer(props) {
    
    const [matchBallsArray, setMatchBallsArray] = useState([]);

    useEffect(() => {
        productService.getAll(matchBalls).then(resp => setMatchBallsArray(resp));
    },[matchBallsArray]);

    return (
        <div className="ItemListContainer container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="itemListDescription container-fluid">
                <strong>
                    {props.greeting}
                </strong>
            </div>
            <ItemList items={matchBallsArray} />
        </div>
    );
}

export default ItemListContainer