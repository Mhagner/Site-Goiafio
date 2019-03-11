import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import StartHeader from './templates/startHeader'
import Menu from './templates/menu';
import Rotas from './rotas';
import FooterTop from './templates/footerTop'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <StartHeader />
            <Menu />
            <Rotas />
            <FooterTop /> 
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
