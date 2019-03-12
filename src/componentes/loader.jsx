import React from 'react'

import '../assets/custom.css'

const Loader = () => {
    return (
        <div className='spinner'>
            <img src={require('../assets/gif/loader.gif')} />
        </div>
    )
}

export default Loader