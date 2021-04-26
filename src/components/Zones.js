import React, {Component} from "react";
import {Link} from "react-router-dom";
import Zone from "./Zone";

export default class Zones extends Component{
    render(){
        return <div className="zones">
            <h1>Choose your game</h1>
            <div className="zone">
                <Zone img="http://adrena.ancorathemes.com/wp-content/uploads/2017/03/services-4.jpg"
                      price="$35.95"
                      text="Negotiate your way through a myriad of trees, undergrowth and streams to retrieve the flags well protected within a hotly defended castle complex."  />
                <Zone img="http://adrena.ancorathemes.com/wp-content/uploads/2017/03/services-5.jpg"
                      prise="$18.95"
                      text="Relying on woodland cover, gorges and concealed paths, players hunt the opposition, watch their backs and search for the flags at the same time."/>
                <Zone img="http://adrena.ancorathemes.com/wp-content/uploads/2017/03/services-6.jpg"
                      price="$24.95"
                      text="The attacking team start from the base of the hill with the objective of placing the bomb under the defended tower. Attackers can approach from the north."/>
                <Zone img="http://adrena.ancorathemes.com/wp-content/uploads/2017/03/services-7.jpg"
                      price="$30.95"
                      text="Negotiate your way through a myriad of trees, undergrowth and streams to retrieve the flags well protected within a hotly defended castle complex."/>
            </div>

        </div>
    }
}