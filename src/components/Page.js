import {Component} from "react";
import "./Page.css"

export default class Page extends Component{
    render(){
        return <div className="page">
            <h1>{this.props.title}</h1>
        </div>
    }
}