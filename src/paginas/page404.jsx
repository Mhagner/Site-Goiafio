import React from 'react';
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <section id="mu-error">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-error-area">
                            <p>Opa! A página que você requisitou não foi encontrada!</p>
                            <span>A página que você está procurando não está disponível ou foi removida ou alterada.</span>
                            <h2>404</h2>
                            <Link className="mu-post-btn" to="/">Ir para a HOME</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page404;
