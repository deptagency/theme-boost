import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'

// TODO Sanja - tailwindcss
const ProductSlider = ({ products, title = '', description = '' }) => {
    return (
        <>
            <header className='o-heading'>
                {title && (
                    <p className='o-heading__topic c-topic u-text-color-quiet'>
                        <Translatable value={title} />
                    </p>
                )}
                {description && (
                    <h2 className='o-heading__title c-title'>
                        <Translatable value={description} />
                    </h2>
                )}
            </header>
            <div className='o-distance-m'>
                <TinySlider>
                    {products.map((product, i) => {
                        return <div><ProductItem key={i} product={product} /></div>
                    })}
                </TinySlider>
            </div>
        </>
    )
}

ProductSlider.propTypes = {
    products: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ProductSlider
