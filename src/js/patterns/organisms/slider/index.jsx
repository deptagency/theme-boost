import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
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

            <div className='mt-8' />

            <TinySlider>
                {products.map((product, i) => {
                    return (
                        <div key={i} className='height-256px'>
                            <ProductItem
                                product={product}
                                itemClassName={classnames({
                                     'mr-6': (i + 1 < products.length),
                                 })}
                            />
                        </div>
                    )
                })}
            </TinySlider>
        </>
    )
}

ProductSlider.propTypes = {
    products: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ProductSlider
