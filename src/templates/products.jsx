import React from 'react'
import Title from '../componentes/Title';
import ProductComponent from '../componentes/productComponent'

import '../assets/custom.css'

export default (props) => {
    const renderProduct = () => {
        const products = props.products || []
        return products.map(product => (
            <ProductComponent key={product._id}
                url={product.url}
                titulo={product.titulo}
                descricao={product.descricao}
                preco={product.price}
            />
        ))
    }

    return (
        <section id="mu-latest-courses">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="mu-latest-courses-area">
                            <Title
                                title={props.title}
                                description={props.description}
                            />
                            <div
                                className="mu-latest-courses-content slick-initialized slick-slider"
                                id="mu-latest-course-slide" role='toolbar'>
                                <div aria-live='polite' className='slick-list draggable'>
                                    <div className='slick-track' role='listbox'>
                                        {renderProduct()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}