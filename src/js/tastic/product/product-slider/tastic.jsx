import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import useWishlistFlaggedProducts from '../../../patterns/molecules/ProductTeaser/useWishlistFlaggedProducts'
import ProductSlider from '../../../patterns/organisms/Slider'

function ProductSliderTastic({ data: { title, description, stream, productCount } }) {
    const products = (stream || {}).items ? stream.items.slice(0, productCount) : []
    const { wishlistedProducts, wishlistId } = useWishlistFlaggedProducts(products)

    if (!stream) {
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
                !!wishlistId &&
                    app.getLoader('wishlist').removeLineItem(wishlistId, {
                        lineItemId: product.wishlistItemId,
                    })
            }}
        />
    )
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(ProductSliderTastic)
