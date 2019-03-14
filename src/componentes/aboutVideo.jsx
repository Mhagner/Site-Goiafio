import React from 'react'

import Imagem from '../assets/img/about-us.jpg'

export default (props) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="mu-about-us-right">
                <a 
                    id="mu-abtus-video" 
                    href={props.video}
                    target="mutube-video">
                    <img src={Imagem} alt="img" />
                </a>
            </div>
        </div>
    )
}