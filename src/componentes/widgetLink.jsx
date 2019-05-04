import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="mu-footer-widget">
                <h4>{props.title}</h4>
                <ul>
                    <li>
                       
                        <a href={props.linkWebmail} target='_blank'>{props.webmail}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}