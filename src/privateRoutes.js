import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Usuarios from './adm/usuarios'
import PrivateRouter from './funcoes/privateRoutes';

const PrivateRoutes = () => {
    return (
        <div>
            <Switch>
                <PrivateRouter path='/usuarios' component={Usuarios} />
            </Switch>
        </div>
    );
}


export default PrivateRoutes;
