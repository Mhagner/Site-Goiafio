import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
    return (
        

        <Link className='scrollToTop' to='/'>
            <i className="fa fa-angle-up"></i>
        </Link>
    )
}