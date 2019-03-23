import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import StartHeader from '../templates/startHeader'
import Menu from '../templates/menu'
import FooterTop from '../templates/footerTop'
import Search from '../componentes/search'
import ScrollToTop from '../componentes/scrollToTop'

export default (props) => {
    return (
        <div>
            {/*Templates*/}
            <Route path='/' component={ScrollToTop}/>
            <Route path='/' component={StartHeader} />
            <Route path='/' component={Menu} />
            <Route path='/' component={Search} />

            {/*páginas*/}
            {props.children}

            {/*Templates*/}
            <Route path='/' component={FooterTop} />
        </div>
    );
}
