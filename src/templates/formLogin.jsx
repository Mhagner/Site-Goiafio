import React from 'react'

import TitleContact from '../componentes/titleContact'
import LoginContainer from './../componentes/loginContainer';

export default (props) => {
    return (
        <section id="mu-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-contact-area">
                            <TitleContact
                                title='Acesso ao ambiente administrativo'
                                description='Preencha os campos abaixo com as suas credenciais de acesso'
                            />
                            <div className="mu-contact-content">
                                <div className="row">
                                   <LoginContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}