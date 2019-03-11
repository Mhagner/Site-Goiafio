import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './paginas/home';
import Sobre from './paginas/sobre'
import Servicos from './paginas/servicos'

class Rotas extends Component {

    render() {
        return (
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/servicos' component={Servicos} />
            </div>
        );
    }
}

export default Rotas;
