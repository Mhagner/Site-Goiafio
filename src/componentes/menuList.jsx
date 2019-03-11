import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuList extends Component {

    renderLink = () => {
       this.props.links.map(link =>(
            <li><Link key={link.to} to={link.route}>{link.label}</Link></li>)
        )  
    }

    render() {
        return (
            <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
                  {this.renderLink()}
            </ul>
        );
    }
}

export default MenuList;
