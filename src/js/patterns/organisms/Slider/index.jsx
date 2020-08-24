import React from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from 'Templates/Slider'
import ProductTeaser from 'Molecules/ProductTeaser'

const ProductSlider = ({ products, title = '', description = '', handleAddToWishlist, handleRemoveFromWishlist }) => {
    return (
        <div>
            {title && (
                <p className='text-center font-hairline text-neutral-600'>
                    <Translatable value={title} />
                </p>
            )}
            {description && (
                <h2 className='text-center font-bold'>
                    <Translatable value={description} />
                </h2>
            )}

            <div className='relative mt-8 select-none'>
                <TinySlider>
                    {products &&
                        products.map((product, i) => {
                            return (
                                <div key={i} className='pr-5 outline-none'>
                                    <ProductTeaser
                                        product={product}
                                        wishlisted={product.wishlisted}
                                        handleAddToWishlist={() => {
                                            handleAddToWishlist && handleAddToWishlist(product)
                                        }}
                                        handleRemoveFromWishlist={() => {
                                            handleRemoveFromWishlist && handleRemoveFromWishlist(product)
                                        }}
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
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    handleAddToWishlist: PropTypes.func,
    handleRemoveFromWishlist: PropTypes.func,
}

export default ProductSlider
