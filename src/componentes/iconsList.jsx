import React, { Component } from 'react';

class IconList extends Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>
                    <span className={`fa fa-${this.props.icon}`}></span>
                </a>
            </li>
        );
    }
}

export default IconList;
