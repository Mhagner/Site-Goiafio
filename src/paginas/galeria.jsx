import React, { Component } from 'react';
import axios from 'axios'

import FaixaPagina from '../componentes/faixaPagina'
import Gallery from '../templates/gallery';
import Loader from '../componentes/loader'

const URL = process.env.REACT_APP_API_URL

class Galeria extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], loading: true }
    }

    getPhotos() {
        axios.get(`${URL}galeria?sort=-createdAt`)
            .then(resp => this.setState({ list: resp.data, loading: false }))
    }

    componentDidMount() {
        this.getPhotos()
    }

    returnGallery() {
        let dados
        (!this.state.loading) ?
            dados = <Gallery list={this.state.list} /> :
            dados = <Loader estilo='spinner' />
        return dados
    }

    render() {
        return (
            <div>
                <FaixaPagina
                    pageHome='Home'
                    page='Modelos' />
                {this.returnGallery()}
            </div>
        );
    }
}

export default Galeria;
