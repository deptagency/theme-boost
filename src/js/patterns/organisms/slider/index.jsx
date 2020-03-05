import React, { useRef } from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'

const ProductSlider = ({ products, title = '', description = '' }) => {
    const pageRef = useRef(null)
    const productSliderWrapperRef = useRef(null)
    let wrapperStyle = {}

    if (pageRef.current) {
        const distance = (window.innerWidth - pageRef.current.offsetWidth) / 2

        wrapperStyle = {
            margin: `0 ${distance * -1}px`,
        }

        if (productSliderWrapperRef.current) {
            productSliderWrapperRef.current
                .getElementsByClassName('tns-inner')[0]
                .setAttribute('style', `transform: translateX(${distance}px)`)
        }
    }

    return (
        <div className='select-none' ref={pageRef}>
            {title && (
                <p className='text-center font-hairline text-gray-500'>
                    <Translatable value={title} />
                </p>
            )}
            {description && (
                <h2 className='text-center font-bold'>
                    <Translatable value={description} />
                </h2>
            )}

            <div
                className='boost-product-slider'
                style={wrapperStyle}
                ref={productSliderWrapperRef}
            >
                <TinySlider>
                    {products.map((product, i) => {
                        return (
                            <div key={i}>
                                <ProductItem
                                    product={product}
                                    itemClassName={classnames({
                                        'mr-6': (i + 1 < products.length),
                                    })}
                                />
                            </div>
                        )
                    })}
                    <div />
                </TinySlider>
            </div>
        </div>
    )
}

ProductSlider.propTypes = {
    products: PropTypes.array.isRequired,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
}

export default ProductSlider
