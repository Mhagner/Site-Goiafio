import React, { Component } from 'react';

import TextHeader from './../componentes/textHeader';
import SocialIconsHeader from './../componentes/socialIconsHeader';

class StartHeader extends Component {
    render() {
        return (
            <header id="mu-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="mu-header-area">
                                <div className="row">
                                    <TextHeader
                                        email='contato@goiafio.com.br'
                                        telefone='(XX) XXXXX-XXXX'
                                    />
                                    <SocialIconsHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default StartHeader;
