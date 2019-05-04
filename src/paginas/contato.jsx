import React, { Component } from 'react';

import FaixaPagina from '../componentes/faixaPagina'
import ContactComp from '../templates/contactComp';


class Contato extends Component {
    render() {
        return (
            <div>
                <FaixaPagina
                    pageHome='Home'
                    page='Contato' />
                <ContactComp />
            </div>
        );
    }
}

export default Contato;
