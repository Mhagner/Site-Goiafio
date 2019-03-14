import React from 'react'

export default (props) => {
    return (
        <div className="mu-service-single">
            <span className={`fa fa-${props.icon}`}></span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}