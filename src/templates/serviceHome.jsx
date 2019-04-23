import React, { Component } from 'react';

import ServiceSingle from '../componentes/serviceSingle'

class ServiceHome extends Component {
    render() {
        return (
            <section id="mu-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="mu-service-area">
                                <ServiceSingle
                                    icon='cubes'
                                    title="Rapidez"
                                    description='Facitar o manuseio, rapidez e organização no estoque de material '
                                />
                                <ServiceSingle
                                    icon='gears'
                                    title="Produto personalizado"
                                    description='Visita ao cliente para desenvolver o produto conforme sua necessidade.'
                                />
                                <ServiceSingle
                                    icon='smile-o'
                                    title="Minimizar o esforço"
                                    description='Nosso intuíto é minimizar o esforço humano na terefa de medição.'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceHome;
