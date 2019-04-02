import React from 'react'
import Input from '../componentes/input'
import TextArea from '../componentes/textArea'
import ButtonSubmit from '../componentes/buttonSubmit'

export default (props) => {
    return (
        <div className="col-md-6">
            <div className="mu-contact-left">
                <form className="contactform">
                    <Input 
                        model='author'
                        label='Nome'
                        required={true}
                        type='text'
                        size='30'
                    />
                    <Input 
                        model='email'
                        label='E-mail'
                        required={true}
                        type='email'
                        size='20'
                    />
                    <Input 
                        model='subject'
                        label='Assunto'
                        required={false}
                        type='text'
                        size='20'
                    />
                    <TextArea 
                        model='message'
                        label='Mensagem'
                        required='true'
                        rows='2'
                        cols='2'
                    />
                    <ButtonSubmit 
                        name='Enviar'
                    />
                </form>
            </div>
        </div>
    )
}