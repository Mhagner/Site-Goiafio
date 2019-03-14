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
                                    icon='book'
                                    title="Teste titulo"
                                    description='testes descrição'
                                />
                                <ServiceSingle
                                    icon='book'
                                    title="Teste titulo"
                                    description='testes descrição'
                                />
                                <ServiceSingle
                                    icon='book'
                                    title="Teste titulo"
                                    description='testes descrição'
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
