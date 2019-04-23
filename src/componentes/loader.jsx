import React from 'react'

const Loader = (props) => {
    return (
        <div className='col-lg-12 col-md-12'>
            <div className={props.estilo}>
                <img src={require('../assets/gif/loader_azul.gif')} alt='figure' />
            </div>
        </div>
    )
}

export default Loader