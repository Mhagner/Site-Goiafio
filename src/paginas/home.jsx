import React, { Component } from 'react';
import axios from 'axios'

import SlideGroup from './../templates/slideGroup';
import Loader from '../componentes/loader'
import ServiceHome from '../templates/serviceHome';
import AboutUs from './../templates/aboutUs';

const URL = 'http://localhost:3003/api/'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { slides: [], loading: true }

        this.getSlides()
    }

    getSlides() {
        axios.get(`${URL}slides`)
            .then(resp => this.setState({ slides: resp.data, loading: false }))
    }

    returnDados() {
        let dados
        (!this.state.loading) ?
            dados = <SlideGroup slides={this.state.slides} /> :
            dados = <Loader style='spinner'/>
        return dados
    }

    render() {
        return (
            <div>
                {this.returnDados()}
                <ServiceHome />
            </div>
        );
    }
}

export default Home;
