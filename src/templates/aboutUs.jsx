import React, { Component } from 'react';

import AboutComponent from '../componentes/aboutComponent'

class AboutUs extends Component {
    render() {
        return (
            <section id="mu-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-about-us-area">
                                <div className="row">
                                    <AboutComponent 
                                        title='Titulo'
                                        video=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
