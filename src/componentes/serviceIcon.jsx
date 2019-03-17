import React from 'react'

export default (props) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="mu-single-feature">
                <span className={`fa fa-${props.iconeServico}`}></span>
                <h4>{props.tituloServico}</h4>
                <p>{props.descricaoServico}</p>
            </div>
        </div>
    )
}