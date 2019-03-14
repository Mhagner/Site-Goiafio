import React from 'react'

export default (props) => {
    return (
        <div className="mu-title">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}