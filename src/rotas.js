import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Home from './paginas/home'
import Sobre from './paginas/sobre'
import Servicos from './paginas/servicos'
import Contato from './paginas/contato'
import Galeria from './paginas/galeria'
import Page404 from './paginas/page404'

import StartHeader from './templates/startHeader'
import Menu from './templates/menu';
import FooterTop from './templates/footerTop'
import Search from './componentes/search';

class Rotas extends Component {

    render() {
        return (
            <div>
                {/*Templates*/}
                <Route path='/' component={StartHeader} />
                <Route path='/' component={Menu} />
                <Route path='/' component={Search} />

                {/*Páginas*/}   
                <Route path='/' exact component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/servicos' component={Servicos} />
                <Route path='/contato' component={Contato} />
                <Route path='/galeria' component={Galeria} />

                {/*Not Found Page*/}
                <Redirect to='/' />
                
                {/*Templates*/}    
                <Route path='/' component={FooterTop} />
            </div>
        );
    }
}

export default Rotas;
