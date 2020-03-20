import React, { Component } from 'react'
import PropTypes from 'prop-types'

import app from '@frontastic/catwalk/src/js/app/app'

import ProductTeaser from '../../patterns/molecules/product/productTeaser'

function ProductListingTastic({ data, tastic }) {
    let productList = data.stream.items
    if (!productList) {
        return null
    }

    const handleAddToWishlist = (product, variant) => {
        app.getLoader('wishlist').add(product, variant, 1, null)
    }

    return (
        <div className='flex flex-wrap p-4 -mx-2'>
            {productList.map((product) => {
                return (
                    <ProductTeaser
                        key={product.productId}
                        product={product}
                        showPercent={data.showPercent}
                        showStrikePrice={data.showStrikePrice}
                        onAddToWishlist={handleAddToWishlist}
                    />
                )
            })}
        </div>
    )
}

ProductListingTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

ProductListingTastic.defaultProps = {}

export default ProductListingTastic
