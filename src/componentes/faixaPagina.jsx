import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FaixaPagina extends Component {
    render() {
        return (
            <section id="mu-page-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-page-breadcrumb-area">
                                <h2>{this.props.page}</h2>
                                <ol className="breadcrumb">
                                    <li><Link to={`/${this.props.linkHome || ''}`}>{this.props.pageHome}</Link></li>
                                    <li className="active">{this.props.page}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaixaPagina;
