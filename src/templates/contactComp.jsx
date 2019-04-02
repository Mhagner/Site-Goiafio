import React from 'react'

import FormContact from '../componentes/formContact'
import MapaContact from '../componentes/mapaContact'
import TitleContact from '../componentes/titleContact'

export default (props) => {
    return (
        <section id="mu-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-contact-area">
                            <TitleContact 
                                title='Entre em contato conosco'
                                description='Preencha o formulário abaixo que em breve entraremos em contato'
                            />
                            <div className="mu-contact-content">
                                <div className="row">
                                    <FormContact />
                                    <MapaContact 
                                        maps='https://maps.google.com/maps?q=manses%20paraiso&t=&z=13&ie=UTF8&iwloc=&output=embed' 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}