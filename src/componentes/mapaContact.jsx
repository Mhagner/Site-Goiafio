import React from 'react'

export default (props) => {
    return (
        <div className="col-md-6">
            <div className="mu-contact-right">
                <iframe
                    src={props.maps}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}