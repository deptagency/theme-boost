import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import useWishlistFlaggedProducts from 'Molecules/ProductTeaser/useWishlistFlaggedProducts'
import ProductSlider from 'Organisms/Slider'

function ProductSliderTastic ({ data: {
    title,
    description,
    stream,
    productCount,
},
}) {
    const products = stream.items.slice(0, productCount)
    const { wishlistedProducts, wishlistId, loading } = useWishlistFlaggedProducts(products)

    if (loading || !stream) {
        return null
    }

    return (
        <ProductSlider
            title={title}
            description={description}
            products={wishlistedProducts}
            handleAddToWishlist={(product) => {
                app.getLoader('wishlist').add(product, product.variants[0], 1, null)
            }}
            handleRemoveFromWishlist={(product) => {
                !!wishlistId && app.getLoader('wishlist').removeLineItem(wishlistId, {
                    lineItemId: product.wishlistItemId,
                })
            }}
        />
    )
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify()(ProductSliderTastic)
