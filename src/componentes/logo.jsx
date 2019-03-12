import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <Link  className="navbar-brand" 
                to='/'>
                <i className={`fa fa-${this.props.icone}`}></i>
                <span>{this.props.descricao}</span>
            </Link>
        );
    }
}

export default Logo;
