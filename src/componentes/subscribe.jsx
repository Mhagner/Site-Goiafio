import React from 'react'

export default (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="mu-footer-widget">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <form className="mu-subscribe-form">
                    <input type="email" placeholder={props.placeholder} />
                    <button className="mu-subscribe-btn" type="submit">{props.button}</button>
                </form>
            </div>
        </div>
    )
}