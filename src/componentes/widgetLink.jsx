import React from 'react'

export default (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="mu-footer-widget">
                <h4>{props.title}</h4>
                <ul>
                    <li><a href="#">Link 1</a></li>                  
                    <li><a href="#">Link 2</a></li>                  
                    <li><a href="#">Link 3</a></li>                  
                </ul>
            </div>
        </div>
    )
}