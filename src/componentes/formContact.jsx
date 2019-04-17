import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { notification } from '../componentes/messages'
import Input from '../componentes/input'
import TextArea from '../componentes/textArea'
import ButtonSubmit from '../componentes/buttonSubmit'

const URL = process.env.REACT_APP_API_URL

class FormContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            phone: '',
            name: '',
            assunto: '',
            message: '',
            error: '',
            successMsg: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm = () => {
        this.setState({
            email: '',
            name: '',
            phone: '',
            assunto: '',
            message: ''
        })
    }

    onSubmit = (e) => {

        e.preventDefault()

        const contact = {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
            assunto: this.state.assunto,
            message: this.state.message
        }

        axios.post(`${URL}send_contato`, contact)
            .then(resp => this.setState({ successMsg: resp.data.success.toString() }))
            .then(resp => notification('success', this.state.successMsg))
            .then(resp => this.clearForm())
            .catch(error => {
                this.setState({ error: error.toString() })
            })
    }

    render() {
        const { name, assunto, message, email, phone } = this.state

        return (
            <div className="col-md-6">
                <div className="mu-contact-left">
                    <form onSubmit={this.onSubmit} className="contactform">
                        <Input
                            value={name}
                            onChange={this.onChange.bind(this)}
                            name='name'
                            label='Nome'
                            required={true}
                            type='text'
                            size='30'
                        />
                        <Input
                            value={email}
                            onChange={this.onChange.bind(this)}
                            name='email'
                            label='E-mail'
                            required={true}
                            type='email'
                            size='20'
                        />
                        <Input
                            value={phone}
                            onChange={this.onChange.bind(this)}
                            name='phone'
                            label='Telefone'
                            required={true}
                            type='text'
                            size='20'
                        />
                        <Input
                            value={assunto}
                            onChange={this.onChange.bind(this)}
                            name='assunto'
                            model='subject'
                            label='Assunto'
                            required={true}
                            type='text'
                            size='20'
                        />
                        <TextArea
                            value={message}
                            onChange={this.onChange.bind(this)}
                            name='message'
                            model='message'
                            label='Mensagem'
                            required={true}
                            rows='2'
                            cols='2'
                        />
                        <ButtonSubmit
                            name='Enviar'
                        />
                        <ToastContainer
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange={false}
                            draggable
                            pauseOnHover
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default FormContact