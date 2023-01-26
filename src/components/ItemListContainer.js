import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import ItemList from "./ItemList";
import matchBalls from "../data/matchBalls";
import worldCupWinners from "../data/worldCupWinners";

function ItemListContainer(props) {
    
    const [matchBallsArray, setMatchBallsArray] = useState([]);
    const [worldCupWinnersArray, setWorldCupWinnersArray] = useState([]);

    useEffect(() => {
        productService.getAll(matchBalls).then(resp => setMatchBallsArray(resp));
    },[matchBallsArray]);

    useEffect(() => {
        productService.getAll(worldCupWinners).then(resp => setWorldCupWinnersArray(resp));
    },[worldCupWinnersArray]);

    return (
        <div className="ItemListContainer container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="itemListDescription container-fluid">
                <strong>
                    {props.greeting}
                </strong>
            </div>
            <ItemList items={matchBallsArray} />
            <ItemList items={worldCupWinnersArray} />
        </div>
    );
}

export default ItemListContainer