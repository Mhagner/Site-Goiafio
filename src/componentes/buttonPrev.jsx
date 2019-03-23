import React from 'react'

export default (props) => {
    return (
        <button 
            type="button" 
            data-role="none" 
            className={`slick-${props.type} slick-arrow`} 
            aria-label={props.label} 
            >{props.stilo}
        </button>
    )
}