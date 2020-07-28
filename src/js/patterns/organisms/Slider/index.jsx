import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from 'Templates/Slider'
import ProductTeaser from 'Molecules/ProductTeaser'
import MarginBreakout from 'Molecules/Layout/MarginBreakout'

const ProductSlider = ({ products, title = '', description = '', handleAddToWishlist, handleRemoveFromWishlist }) => {
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
                <p className='text-center font-hairline text-neutral-500'>
                    <Translatable value={title} />
                </p>
            )}
            {description && (
                <h2 className='text-center font-bold'>
                    <Translatable value={description} />
                </h2>
            )}

            <div className='mt-8 select-none'>
                <div ref={productSliderWrapperRef}>
                    <TinySlider>
                        {products && products.map((product, i) => {
                            return (
                                <div key={i}>
                                    <ProductTeaser
                                        product={product}
                                        wishlisted={product.wishlisted}
                                        handleAddToWishlist={() => { handleAddToWishlist && handleAddToWishlist(product) }}
                                        handleRemoveFromWishlist={() => { handleRemoveFromWishlist && handleRemoveFromWishlist(product) }}
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
    handleAddToWishlist: PropTypes.func,
    handleRemoveFromWishlist: PropTypes.func,
}

export default ProductSlider
