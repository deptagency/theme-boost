import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'
import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import ProductDetails from 'Organisms/Product/ProductDetails'

const ProductDetailsTastic = ({ product }) => {
    if (!product) {
        return null
    }

    return (
        <ProductDetails
            product={product}
            addToCart={(selectedVariant, count = 1) => {
                return app.getLoader('cart').add(null, selectedVariant, count, null)
            }}
        />
    )
}

ProductDetailsTastic.propTypes = {
    product: PropTypes.object,
}

ProductDetailsTastic.defaultProps = {}

export default connect(productConnector)(ProductDetailsTastic)
