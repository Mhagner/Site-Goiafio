import React from 'react'

export default (props) => {
    return (
        <div className="mu-footer-bottom">
            <div className="container">
                <div className="mu-footer-bottom-area">
                    <p>&copy; {props.descricao} -   
                        <a href="#" rel="nofollow"> Developer by: {props.desenvolvedor}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
