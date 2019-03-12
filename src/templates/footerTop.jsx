import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Endereco from '../templates/endereco'

class Footer extends Component {
    render() {
        return (
            <footer id="mu-footer">
            <div className="mu-footer-top">
              <div className="container">
                <div className="mu-footer-top-area">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <div className="mu-footer-widget">
                        <h4>Menu</h4>
                        <ul>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='sobre'>Sobre</Link></li>
                          <li><Link to='servicos'>Serviços</Link></li>
                          <li><Link to='contato'>Contato</Link></li>
                          <li><Link to='galeria'>Galeria</Link></li>
                        </ul>
                      </div>
                    </div>
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
                    <Endereco />
                  </div>
                </div>
              </div>
            </div>
            <div className="mu-footer-bottom">
                <div className="container">
                    <div className="mu-footer-bottom-area">
                    <p>&copy; Todos os Direitos Reservados - <a href="/servicos" rel="nofollow">Developer by: ###</a></p>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;
