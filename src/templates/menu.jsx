import React, { Component } from 'react';
import Logo from './../componentes/logo';
import { Link} from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
            <section id="mu-menu">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Logo />
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='sobre'>Sobre</Link></li>
                                <li><Link to='servicos'>Serviços</Link></li>
                                <li><Link to='contato'>Contato</Link></li>
                                <li><Link to='galeria'>Galeria</Link></li>
                                <li><Link to='login'>Adm</Link></li>
                                <li><Link id="mu-search-icon" to='#'>
                                    <i className="fa fa-search"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Menu;
