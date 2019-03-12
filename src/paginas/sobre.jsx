import React, { Component } from 'react';

import FaixaPagina from '../componentes/faixaPagina'

export default class Sobre extends Component {
  render() {
    return (
        <div>
            <FaixaPagina page='Sobre' />
            <h2>Página Sobre</h2>
        </div>
    )
  }
}
