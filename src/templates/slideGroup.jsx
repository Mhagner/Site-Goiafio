import React from 'react';
import Slide from './slide';
import ButtonPrev from '../componentes/buttonPrev'

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
        <section id="mu-slider" className='slick-initialized slick-slider'>
            <ButtonPrev
                label='Previous'
                estilo='Previous'
                type='prev'
            />
            <div aria-live="polite" className="slick-list draggable">
                <div className="slick-track" role="listbox">
                    {renderSlide()}
                </div>
            </div>
            <ButtonPrev
                label='Next'
                estilo='Next'
                type='next'
            />
        </section >
    )
}

export default SlideGroup;
