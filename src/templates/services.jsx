import React from 'react'

import Title from '../componentes/Title'
import ServiceIcon from '../componentes/serviceIcon'

export default (props) => {
    return (
        <section id="mu-features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="mu-features-area">
                            <Title
                                title="Serviços"
                                description="Descrição do bloco"
                            />
                            <div className="mu-features-content">
                                <div className="row">
                                    <ServiceIcon 
                                        tituloServico='Medidores de fios'
                                        descricaoServico='Medidores de fios 150X450'
                                        iconeServico='book'
                                    />
                                    <ServiceIcon 
                                        tituloServico='Medidores de fios'
                                        descricaoServico='Medidores de fios 150X450'
                                        iconeServico='book'
                                    />
                                    <ServiceIcon 
                                        tituloServico='Medidores de fios'
                                        descricaoServico='Medidores de fios 150X450'
                                        iconeServico='book'
                                    />
                                    <ServiceIcon 
                                        tituloServico='Medidores de fios'
                                        descricaoServico='Medidores de fios 150X450'
                                        iconeServico='book'
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