import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Image from 'react-shimmer'


class Slide extends Component {
    render() {
        return (
            <div className="mu-slider-single">
                <div className="mu-slider-img">
                    <figure>
                        <Image
                            src={this.props.imagem}
                            width={1920} height={500}
                            style={{ objectFit: 'cover' }} // Style your <img> 
                             // Customize the animation duration (s).
                        />
                    </figure>
                </div>
                <div className="mu-slider-content">
                    <h4>{this.props.titulo}</h4>
                    <span></span>
                    <h2>{this.props.subtitulo}</h2>
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
