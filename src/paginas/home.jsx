import React, { Component } from 'react';



import Slide from './../templates/slide';
import Imagem_1 from '../assets/img/slider/1.jpg'

class Home extends Component {


    render() {
        return (
            <div>
                <section id="mu-slider">
                    <Slide
                        imagem={Imagem_1} 
                        titulo='Titulo'
                        subtitulo='subtitulo'
                        texto='Texto'
                        link='/sobre'
                        label='Sobre'
                    />
                </section>
            </div>
        );
    }
}

export default Home;
