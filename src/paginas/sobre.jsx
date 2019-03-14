import React, { Component } from 'react';

import FaixaPagina from '../componentes/faixaPagina'
import AboutUs from './../templates/aboutUs';

export default class Sobre extends Component {
  render() {
    return (
        <div>
            <FaixaPagina page='Sobre' />
            <AboutUs />
        </div>
    )
  }
}
