import React, { Component } from 'react'

import FaixaPagina from '../componentes/faixaPagina'
import Services from '../templates/services'


class Servico extends Component{
    render(){
        return(
            <div>
                <FaixaPagina page='Serviço' />
                <Services />
            </div>
        )
    }
}

export default Servico