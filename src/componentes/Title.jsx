import React from 'react'
import '../assets/custom.css'

export default (props) => {
    return (
        <div className="mu-title mu-p">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}