import React from "react";

import Title from '../componentes/Title'
import Input from '../componentes/input'
import ButtonSubmit from '../componentes/buttonSubmit'

const LoginContainer = () => {
    return (
        <div className="col-md-4">
            <div className="mu-contact-left">
                <form className='contactform'>
                    <Input
                        model='author'
                        label='E-mail'
                        required={true}
                        type='email'
                        size='30'
                        name='email'
                    />
                   <Input
                        model='author'
                        label='Senha'
                        required={true}
                        type='password'
                        size='30'
                        name='password'
                    />
                    <ButtonSubmit
                        name='Entrar'
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginContainer;