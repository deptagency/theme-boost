import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../templates/slider'
import ProductItem from '../../molecules/product/item'

const ProductSlider = ({ products, title = '', description = '', viewportWidth }) => {
    const [distance, setDistance] = useState(0)
    const pageRef = useRef(null)
    const productSliderWrapperRef = useRef(null)

    useEffect(() => {
        console.log('viewportWidth', viewportWidth)
        if (pageRef.current) {
            const distanceRecalc = (viewportWidth - pageRef.current.offsetWidth) / 2

            if (productSliderWrapperRef.current) {
                productSliderWrapperRef.current
                    .getElementsByClassName('tns-inner')[0]
                    .setAttribute('style', `transform: translateX(${distanceRecalc}px)`)
            }

            setDistance(distanceRecalc)
        }
    }, [viewportWidth])

    return (
        <>
            <div ref={pageRef} />
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

            <div className='select-none'>
                <div
                    className='boost-product-slider mt-8'
                    style={{
                        margin: `0 ${distance * -1}px`,
                        transition: 'margin 0.3s ease',
                    }}
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
        </>
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
    viewportWidth: PropTypes.number.isRequired,
}

export default ProductSlider
