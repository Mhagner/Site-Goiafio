import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <a  className="navbar-brand" 
                href={this.props.link}>
                <i className={`fa fa-${this.props.icone}`}></i>
                <span>{this.props.descricao}</span>
            </a>
        );
    }
}

export default Logo;
