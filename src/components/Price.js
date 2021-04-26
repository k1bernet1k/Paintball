import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Price extends Component{
    render(){
        return <div className="zone">
            <img src={this.props.img}/>
            <Link to="/book">{this.props.title}</Link>
            <h1>{this.props.price}</h1>
            <h4>per person</h4>
            <ul>Half Day or Full Day</ul>
            <ul>Includes {this.props.count} Paintballs</ul>
            <ul>All Equipment Provided</ul>
            <ul>Free Gas Refills</ul>
            <Link to="/book">Book now</Link>
        </div>
    }
}