import React, { Component } from 'react';

class FilterGallery extends Component {
    render() {
        return (
            <li 
                className={`filter ${this.props.active} ? 'active' : '' `} 
                data-filter={this.props.dataFilter}>
                {this.props.title}
            </li>
        );
    }
}

export default FilterGallery;
