import React, { Component } from 'react'
import axios from 'axios'

import FaixaPagina from './../componentes/faixaPagina';
import ButtonSubmit from '../componentes/buttonSubmit'
import Pessoas from '../componentes/pessoas'
import { notification } from '../componentes/messages'
import { ToastContainer } from 'react-toastify';

const URL = process.env.REACT_APP_API_URL
class Produto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: []
        }
    }

    getPeople() {
        axios.get(`${URL}pessoas`)
            .then(resp => this.setState({ lista: resp.data }))

    }

    deletePessoa = lista => {
        axios.delete(`${URL}pessoas/${lista._id}`)
            .then(resp => 
                this.getPeople(),
                notification('success', 'Pessoa excluida com sucesso!')
            )

    }

    componentDidMount() {
        this.getPeople()
    }

    render() {
        return (
            <div>
                <FaixaPagina page='Produto' />
                <h2>Página Produto</h2>

                <Pessoas
                    lista={this.state.lista}
                    deletePessoa={this.deletePessoa}
                />
                <ToastContainer />
            </div>
        )
    }
}

export default Produto