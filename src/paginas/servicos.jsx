import React, { Component } from 'react'

import FaixaPagina from '../componentes/faixaPagina'


class Servico extends Component{
    render(){
        return(
            <div>
                <FaixaPagina page='Serviço' />
                <h2>Página de Serviço</h2>
            </div>
        )
    }
}

export default Servico