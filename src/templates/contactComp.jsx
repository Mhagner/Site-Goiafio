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
                                title='Titulo do contato'
                                description='descricao do contato'
                            />
                            <div className="mu-contact-content">
                                <div className="row">
                                    <FormContact />
                                    <MapaContact maps='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}