import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Home from './paginas/home'
import Sobre from './paginas/sobre'
import Servicos from './paginas/servicos'
import Contato from './paginas/contato'
import Galeria from './paginas/galeria'

import Template from './paginas/template'

class Rotas extends Component {

    render() {
        return (
            <div>
                <Template>
                    <Switch>
                        {/*Páginas*/}
                        <Route path='/' exact component={Home} />
                        <Route path='/sobre' component={Sobre} />
                        <Route path='/servicos' component={Servicos} />
                        <Route path='/contato' component={Contato} />
                        <Route path='/galeria' component={Galeria} />
                        {/*Not Found Page*/}
                        <Redirect to='/' component={Home} />
                    </Switch>
                </Template>
            </div>
        );
    }
}

export default Rotas;
