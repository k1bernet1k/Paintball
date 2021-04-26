import React, {Component} from "react";
import Price from "./Price";

export default class Prices extends Component{
    render() {
        return <div className="zones">
            <h1>our pricing</h1>
            <Price
                img="http://adrena.ancorathemes.com/wp-content/uploads/2017/04/price-2.jpg"
                title="Silver pack"
                price="$20"
                count="300"/>
            <Price
                img="http://adrena.ancorathemes.com/wp-content/uploads/2017/04/price-3.jpg"
                title="gold pack"
                price="$30"
                count="500"/>
            <Price
                img="http://adrena.ancorathemes.com/wp-content/uploads/2017/04/price-1.jpg"
                title="PAY & PLAY"
                price="$15"
                count="300"/>
            <div className="monThu">
                <h3>play for $5</h3>
                <h1>MONDAYS AND</h1>
                <h1>THURSDAYS</h1>
            </div>
        </div>

    }


}