import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAutentication }  from '../funcoes/auth'

const PrivateRouter = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAutentication() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location }}} />
        )
    )} />
)

export default PrivateRouter