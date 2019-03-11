import React, { Component } from 'react';

class TextHeader extends Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="mu-header-top-left">
                    <div className="mu-top-email">
                        <i className="fa fa-envelope"></i>
                        <span>{this.props.email}</span>
                    </div>
                    <div className="mu-top-phone">
                        <i className="fa fa-phone"></i>
                        <span>{this.props.telefone}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextHeader;
