import React, { Component } from 'react';
import Slide from './slide';

const SlideGroup = props => {

    const renderSlide = () => {
        const slides = props.slides || []
        return slides.map(slide => (
            <Slide key={slide._id}
                imagem={slide.imagem}
                titulo={slide.titulo}
                subtitulo={slide.subtitulo}
                texto={slide.texto}
                link={slide.link}
                label={slide.label}
            />
        ))
    }

    return (
        <section id="mu-slider" >
            {renderSlide()}
        </section >
    )
}

export default SlideGroup;
