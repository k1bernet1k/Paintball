import React, {Component} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from  '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab,fas);

export default class Header extends Component{
    render(){
        return <header>
            <Link className="logo" to="/">
                <FontAwesomeIcon icon={["fas","dragon"]}/>
            </Link>
            <nav>
                <Link to="/book">Book now</Link>
                <Link to="/zones">Zones</Link>
                <Link to="/prices">Prices</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <div className="socLinks">
                <a href="tel: +71234567890" className="tel">
                    <FontAwesomeIcon icon={["fas","phone"]}/>
                    +71234567890
                </a>
                <a href="" className="soc tw">
                    <FontAwesomeIcon icon={["fab", "twitter"]}/>
                </a>
                <a href="" className="soc fn">
                    <FontAwesomeIcon icon={["fab","facebook"]}/>
                </a>
                <a href="" className="soc vk">
                    <FontAwesomeIcon icon={["fab","vk"]}/>
                </a>
            </div>
        </header>
    }
}