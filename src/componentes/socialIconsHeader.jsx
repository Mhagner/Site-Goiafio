import React, { Component } from 'react';
import IconList from './iconsList';

class SocialIconsHeader extends Component {
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="mu-header-top-right">
                    <nav>
                        <ul className="mu-top-social-nav">
                            <IconList link='#' icon='facebook'/>
                            <IconList link='#' icon='youtube'/>
                            <IconList link='#' icon='google'/>
                            <IconList link='#' icon='linkedin'/>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default SocialIconsHeader;


