import React from 'react'
import PropTypes from 'prop-types'

import TinySlider from 'Templates/Slider'
import ProductTeaser from 'Molecules/ProductTeaser'

const ProductSlider = ({ products, title = '', description = '', handleAddToWishlist, handleRemoveFromWishlist }) => {
    return (
        <div>
            {title && (
                <p className='text-center font-hairline text-neutral-600'>{title}</p>
            )}
            {description && (
                <h2 className='text-center font-bold'>{description}</h2>
            )}

            <div className='relative mt-8 select-none'>
                <TinySlider>
                    {products &&
                        products.map((product, i) => {
                            return (
                                <div key={i} className='outline-none'>
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
    title: PropTypes.string,
    description: PropTypes.string,
    handleAddToWishlist: PropTypes.func,
    handleRemoveFromWishlist: PropTypes.func,
}

export default ProductSlider
