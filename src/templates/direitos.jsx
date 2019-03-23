import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="mu-footer-bottom">
            <div className="container">
                <div className="mu-footer-bottom-area">
                    <p>&copy; {props.descricao} -   
                        <Link to="#" rel="nofollow"> Developer by: {props.desenvolvedor}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
