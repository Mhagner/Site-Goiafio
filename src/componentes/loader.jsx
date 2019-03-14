import React from 'react'

const Loader = (props) => {
    return (
        <div className={props.style}>
            <img src={require('../assets/gif/loader_azul.gif')} />
        </div>
    )
}

export default Loader