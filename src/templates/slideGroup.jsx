import React from 'react';
import Slide from './slide';
import ButtonPrev from '../componentes/buttonPrev'

const SlideGroup = props => {

    const renderSlide = () => {
        const slides = props.slides || []
        return slides.map(slide => (
            <Slide key={slide._id}
                url={slide.url}
                titulo={slide.titulo}
                subtitulo={slide.subtitulo}
                link={slide.link}
                label={slide.label}
            />
        ))
    }

    return (
        <section id="mu-slider" className='slick-initialized slick-slider'>
            
            <div aria-live="polite" className="slick-list draggable">
                <div className="slick-track" role="listbox">
                    {renderSlide()}
                    {console.log(renderSlide())}
                </div>
            </div>
            
        </section >
    )
}

export default SlideGroup;
