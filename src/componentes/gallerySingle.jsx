import React, { Component } from 'react';

class GallerySingle extends Component {
    render() {
        return (
            <li className={`col-md-4 col-sm-6 col-xs-12`}>
                <div className="mu-single-gallery">
                    <div className="mu-single-gallery-item">
                        <div className="mu-single-gallery-img">
                            <a href={this.props.link}>
                                <img alt="img" src={this.props.url} />
                            </a>
                        </div>
                        <div className="mu-single-gallery-info">
                            <div className="mu-single-gallery-info-inner">
                                <h4>{this.props.title}</h4>
                                <p>{this.props.text}</p>
                                <a href={this.props.url} data-fancybox-group="gallery" className="fancybox">
                                    <span className="fa fa-eye"></span>
                                </a>
                                <a href={this.props.link} className="aa-link"><span className="fa fa-link">
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default GallerySingle;
