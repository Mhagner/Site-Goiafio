import React from 'react'



export default (props) => {
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-xs-12" >
                <div className="mu-latest-course-single">
                    <figure className="mu-latest-course-img">
                        <a href="#"><img src={props.imagem} alt="img" /></a>
                    </figure>
                    <div className="mu-latest-course-single-content">
                        <h4><a>{props.titulo}</a></h4>
                        <p>{props.descricao}</p>
                        <div className="mu-latest-course-single-contbottom">
                            <a className="mu-course-details mu-apartir">A partir de</a>
                            <span className="mu-course-price mu-price">{`R$ ${props.preco}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}