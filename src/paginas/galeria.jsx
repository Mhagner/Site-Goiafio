import React, { Component } from 'react';
import axios from 'axios'

import FaixaPagina from '../componentes/faixaPagina'
import Gallery from '../templates/gallery';

const URL = 'http://localhost:3003/api/galeria'

class Galeria extends Component {
    constructor(props){
        super(props)
        this.state = { list: [] }       
        
        this.getPhotos()
    }

    getPhotos(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ list: resp.data }))
    }

    render() {
        return (
            <div>
                <FaixaPagina page='Galeria' />
                <Gallery list={this.state.list}/>
            </div>
        );
    }
}

export default Galeria;
