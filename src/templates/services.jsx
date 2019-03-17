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
                                productDescription="Descrição do bloco"
                            />
                            <div className="mu-features-content">
                                <div className="row">
                                    <ServiceIcon 
                                        tituloServico='Serviços'
                                        descricaoServico='Descrição servicos'
                                        iconeServico='certificate'
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