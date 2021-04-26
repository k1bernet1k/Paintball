import React, {Component} from "react";
import {Link} from "react-router-dom";



export default class Zone extends Component{
    render(){
        return <div className="zone">
            <img src={this.props.img}/>
            <h1>{this.props.price}</h1>
            <h2>for all day play</h2>
            <p>{this.props.text}</p>
            <Link to="/book">Book now</Link>
        </div>
    }
}