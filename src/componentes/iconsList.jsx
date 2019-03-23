import React from 'react';

export default (props) => {
    return (
        <li>
            <a href={props.link}>
                <span className={`fa fa-${props.icon}`}></span>
            </a>    
        </li>
    );
}

