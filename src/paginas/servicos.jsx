import React, { Component } from 'react'

import FaixaPagina from '../componentes/faixaPagina'
import Services from '../templates/services'


class Servico extends Component {
    render() {
        return (
            <div>
                <FaixaPagina
                    pageHome='Home'
                    page='Serviço' />
                <Services />
            </div>
        )
    }
}

export default Servico