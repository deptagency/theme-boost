import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'
import MarginBreakout from '../../molecules/layout/marginBreakout'

const ProductSlider = ({ products, title = '', description = '' }) => {
    const productSliderWrapperRef = useRef(null)
    const [sliderIndent, setSliderIndent] = useState(0)

    useEffect(() => {
        if (productSliderWrapperRef.current) {
            productSliderWrapperRef.current
                .getElementsByClassName('tns-inner')[0]
                .setAttribute('style', `transform: translateX(${sliderIndent}px)`)
        }
    }, [sliderIndent])

    return (
        <MarginBreakout onChange={setSliderIndent}>
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

            <div className='boost-product-slider mt-8 select-none'>
                <div ref={productSliderWrapperRef}>
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
        </MarginBreakout>
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
