import React, { Component } from 'react';


class Dropdown extends Component {
    render() {
        return (
            <li className="dropdown">
                <a  href="#" 
                    className="dropdown-toggle" 
                    data-toggle="dropdown">{this.props.nome} 
                    <span className="fa fa-angle-down"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                    {this.props.children}
                </ul>
            </li>
        );
    }
}

export default Dropdown;
