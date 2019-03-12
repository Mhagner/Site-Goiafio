import React, { Component } from 'react';
import axios from 'axios'

import SlideGroup from './../templates/slideGroup';
import Loader from '../componentes/loader'

const URL = 'http://localhost:3003/api/'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { slides: [], loading: true }

        this.getSlides()
    }

    getSlides() {
        axios.get(`${URL}slides?sort=_createdAt`)
            .then(resp => this.setState({ slides: resp.data, loading: false }))
    }

    render() {
        return (
            <SlideGroup slides={this.state.slides} />
        );
    }
}

export default Home;
