import React, { Component } from 'react';
import axios from 'axios'

import Endereco from '../templates/endereco'
import Direitos from '../templates/direitos'
import MenuFooter from '../componentes/menuFooter'

const URL = 'http://localhost:3003/api/'
class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      endereco: []
    }

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
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Student Help</h4>
                    {/*
                        <ul>
                          <li><a href="#">Get Started</a></li>
                          <li><a href="#">My Questions</a></li>
                          <li><a href="#">Download Files</a></li>
                          <li><a href="#">Latest Course</a></li>
                          <li><a href="#">Academic News</a></li>                  
                        </ul>
                        */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>News letter</h4>
                    <p>Get latest update, news & academic offers</p>
                    <form className="mu-subscribe-form">
                      <input type="email" placeholder="Type your Email" />
                      <button className="mu-subscribe-btn" type="submit">Subscribe!</button>
                    </form>
                  </div>
                </div>
                <Endereco
                  endereco={this.state.endereco}
                />
              </div>
            </div>
          </div>
        </div>
        <Direitos
          descricao='Todos os direitos reservados'
          desenvolvedor='Mahilson Hagnner'
        />
      </footer>
    );
  }
}

export default Footer;
