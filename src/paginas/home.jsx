import React, { Component } from 'react';
import axios from 'axios'

import SlideGroup from './../templates/slideGroup';
import Loader from '../componentes/loader'
import ServiceHome from '../templates/serviceHome';
import Products from '../templates/products'


const URL = process.env.REACT_APP_API_URL

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            slides: [], 
            loading: true,
            products: []
        }
    }

    getSlides() {
        axios.get(`${URL}slides`)
            .then(resp => this.setState({ slides: resp.data, loading: false }))
    }

    getProdutos(){
        axios.get(`${URL}produtos`)
            .then(resp => this.setState({ products: resp.data }))
    }

    componentWillMount(){
        this.getSlides()
        this.getProdutos()
    }

    returnSlide() {
        let dados
        (!this.state.loading) ?
            dados = <SlideGroup slides={this.state.slides} /> :
            dados = <Loader estilo='spinner'/>
        return dados
    }

    render() {
        return (
            <div>
                {this.returnSlide()}
                <ServiceHome />
                <Products 
                    title='Titulo'
                    description='Descricao'
                    products={this.state.products}
                />
            </div>
        );
    }
}

export default Home;
