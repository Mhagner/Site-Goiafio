import React from 'react';
import GallerySingle from './../componentes/gallerySingle';

const Gallery = props => {
    const renderGallery = () => {
        const list = props.list || []
        return list.map(foto => (
            <GallerySingle key={foto._id}
                title={foto.title}
                url={foto.url}
                text={foto.text}
            />
        ))
    }

    return (
        <section id="mu-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-gallery-area">
                            <div className="mu-gallery-content">
                                <div className="mu-gallery-body">
                                    <ul id="mixit-container" className="row">
                                        {renderGallery()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
