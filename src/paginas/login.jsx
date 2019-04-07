import React, { Component } from 'react'

import FaixaPagina from './../componentes/faixaPagina'
import FormLogin from '../templates/formLogin'

class Login extends Component {
    render() {
        return (
            <div>
                <FaixaPagina page='Login' />
                <FormLogin />
            </div>
        )
    }
}

export default Login