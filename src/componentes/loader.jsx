import React from 'react'

const Loader = (props) => {
    return (
        <div className={props.estilo}>
            <img src={require('../assets/gif/loader_azul.gif')} alt='figure' />
        </div>
    )
}

export default Loader