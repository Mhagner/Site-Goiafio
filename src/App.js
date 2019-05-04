import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import './assets/custom.css'
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <PublicRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
