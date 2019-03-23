import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImagemLogo from '../assets/img/logo_2.jpg'

class Logo extends Component {
    render() {
        return (
            <Link  className="navbar-brand" 
                to='/'>
                <img alt="img" className='image-logo' src={ImagemLogo} />
            </Link>
        );
    }
}

export default Logo;
