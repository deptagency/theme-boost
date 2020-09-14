import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'
import ProductDetails from 'Organisms/Product/ProductDetails'
import DefaultNotifications from 'Molecules/Notifications/Default'

const ProductDetailsTastic = ({ product, wishlist, notifications }) => {
    if (!product || !wishlist.isComplete()) {
        return null
    }

    const wishlistItem = wishlist.data.lineItems.find((item) => {
        // For the time being we're using only first variant throughout the Boost theme
        return item.variant.sku === product.variants[0].sku
    })

    return (
        <>
            <ProductDetails
                product={product}
                handleAddToCart={(selectedVariant, count = 1) => {
                    return app.getLoader('cart').add(null, selectedVariant, count, null)
                }}
                handleAddToWishlist={() => {
                    app.getLoader('wishlist').add(product, product.variants[0], 1, null)
                }}
                handleRemoveFromWishlist={() => {
                    !!wishlistItem && app.getLoader('wishlist').removeLineItem(wishlist.data.wishlistId, {
                        lineItemId: wishlistItem.lineItemId,
                    })
                }}
                wishlisted={!!wishlistItem}
            />
            <DefaultNotifications notifications={notifications} />
        </>
    )
}

ProductDetailsTastic.propTypes = {
    product: PropTypes.object,
    wishlist: PropTypes.object,
    notifications: PropTypes.object,
}

ProductDetailsTastic.defaultProps = {}

export default tastify({ translate: true, connect: { wishlist: true, notifications: true } })(connect(productConnector)(ProductDetailsTastic))
