import Item from "./Item";
import { useEffect, useState } from "react";
import { productService } from "../services/productService";
import matchBalls from "../data/matchBalls";

function ItemListContainer(props) {
    
    const [matchBallsArray, setMatchBallsToArray] = useState([]);

    useEffect(() => {
        productService.getAll(matchBalls).then(resp => setMatchBallsToArray(resp));
    },[matchBallsArray]);

    return (
        <div className="ItemListContainer container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="itemListDescription container-fluid">
                <strong>
                    {props.greeting}
                </strong>
            </div>
            <div className="itemListItems d-flex flex-wrap justify-content-center align-content-center flex-wrap bg-dark">
                {
                    matchBallsArray.map(matchBall => {
                        return (
                            <Item title = {matchBall.title}
                                price = {matchBall.price}
                                pictureUrl= {matchBall.pictureUrl} /> 
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ItemListContainer