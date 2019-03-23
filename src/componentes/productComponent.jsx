import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-xs-12" >
                <div className="mu-latest-course-single">
                    <figure className="mu-latest-course-img">
                        <Link to='#'><img src={props.imagem} alt="figure" /></Link>
                    </figure>
                    <div className="mu-latest-course-single-content">
                        <h4><Link to='#'>{props.titulo}</Link></h4>
                        <p>{props.descricao}</p>
                        <div className="mu-latest-course-single-contbottom">
                            <Link to='#' className="mu-course-details mu-apartir">A partir de</Link>
                            <span className="mu-course-price mu-price">{`R$ ${props.preco}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}