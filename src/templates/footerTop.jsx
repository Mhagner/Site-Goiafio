import React, { Component } from 'react';
import axios from 'axios'

import Endereco from '../templates/endereco'
import Direitos from '../templates/direitos'
import MenuFooter from '../componentes/menuFooter'
import WidgetLink from '../componentes/widgetLink';
import Subscribe from '../componentes/subscribe'

const URL = process.env.REACT_APP_API_URL

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { endereco: [] }
  }

  componentWillMount(){
    this.getEndereco()
  }

  getEndereco() {
    axios.get(`${URL}endereco`)
      .then(resp => this.setState({ endereco: resp.data}))
  }

  render() {
    return (
      <footer id="mu-footer">
        <div className="mu-footer-top">
          <div className="container">
            <div className="mu-footer-top-area">
              <div className="row">
                <MenuFooter />
                <WidgetLink 
                  title='Outros links'
                  linkWebmail='https://webmail1.weblink.com.br'
                  webmail='Webmail'
                />
                <Subscribe 
                  title='Assinatura' 
                  description='Deixe o seu e-mail para receber nossas promoções'
                  placeholder='Digite seu e-mail'
                  button='Assinar'
                /> 
                <Endereco endereco={this.state.endereco} />
              </div>
            </div>
          </div>
        </div>
        <Direitos
          descricao='Todos os direitos reservados - Goiafio '
          desenvolvedor='Mahilson Hagnner'
        />
      </footer>
    );
  }
}

export default Footer;
