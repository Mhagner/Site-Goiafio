import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';

import FaixaPagina from './../componentes/faixaPagina';
import ButtonSubmit from '../componentes/buttonSubmit'
import Users from '../componentes/users'
import { notification } from '../componentes/messages'

const URL = process.env.REACT_APP_API_URL
class Usuarios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    getUsers() {
        axios.get(`${URL}usuarios`)
            .then(resp => this.setState({ users: resp.data }))

    }

    deleteUser = user => {
        axios.delete(`${URL}usuarios/${user._id}`)
            .then(resp => 
                this.getUsers(),
                notification('success', 'Usuários excluído com sucesso')
            )

    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div>
                <FaixaPagina page='Produto' />
                <h2>Página de Usuários</h2>

                <Users
                    users={this.state.users}
                    deleteUser={this.deleteUser}
                />
                <ToastContainer />
            </div>
        )
    }
}

export default Usuarios