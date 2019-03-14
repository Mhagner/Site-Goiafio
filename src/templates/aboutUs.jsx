import React, { Component } from 'react';

import AboutTitle from '../componentes/aboutTitle'
import AboutVideo from '../componentes/aboutVideo';

class AboutUs extends Component {
    render() {
        return (
            <section id="mu-about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-about-us-area">
                                <div class="row">
                                    <AboutTitle title='Titulo' />
                                    <AboutVideo />
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
