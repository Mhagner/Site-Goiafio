import React, { Component } from 'react'

export default (props) => {
    const renderEndereco = () => {
        const endereco = props.endereco || []
        return endereco.map(item => (
            <div className="mu-footer-widget">
                <h4 key={item._id}>{item.titulo}</h4>
                <address>
                    <p>{item.endereco}</p>
                    <p>{item.telefone} </p>
                    <p>{item.site}</p>
                    <p>{item.email}</p>
                </address>
            </div>
        ))
    }


    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
            {renderEndereco()}
        </div>
    )
}