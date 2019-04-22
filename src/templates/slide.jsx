import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Slide extends Component {
    render() {
        return (
            <div className="mu-slider-single slick-slide">
                <div className="mu-slider-img">
                    <figure>
                        <img src={this.props.imagem} alt='figura'/>
                    </figure>
                </div>
                <div className="mu-slider-content">
                    <h2>{this.props.titulo}</h2>
                    <span></span>
                    <h3>{this.props.subtitulo}</h3>
                    <p>{this.props.texto}</p>
                    <Link className="mu-read-more-btn" to={this.props.link}>
                        {this.props.label}
                    </Link>
                </div>
            </div>
        );
    }
}

export default Slide;
