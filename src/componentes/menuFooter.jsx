import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="mu-footer-widget">
                <h4>Menu</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='sobre'>Sobre</Link></li>
                    <li><Link to='servicos'>Serviços</Link></li>
                    <li><Link to='contato'>Contato</Link></li>
                    <li><Link to='galeria'>Galeria</Link></li>
                </ul>
            </div>
        </div>
    )
}

