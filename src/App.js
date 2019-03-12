import React, { Component } from 'react';

import Rotas from './rotas'
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    );
  }
}

export default App;
