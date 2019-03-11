import React, { Component } from 'react';

import TextHeader from './../componentes/textHeader';
import SocialIconsHeader from './../componentes/socialIconsHeader';

class StartHeader extends Component {
    render() {
        return (
            <div>
                <header id="mu-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="mu-header-area">
                                    <div className="row">
                                       <TextHeader 
                                            email='m.hagner.sp@gmail.com'
                                            telefone='(62) 99107-9788'
                                       />
                                       <SocialIconsHeader />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default StartHeader;
