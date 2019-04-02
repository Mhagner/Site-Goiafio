import React from 'react'
import Input from '../componentes/input'

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
                </form>
            </div>
        </div>
    )
}