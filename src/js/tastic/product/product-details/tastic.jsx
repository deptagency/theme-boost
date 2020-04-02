import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import ProductDetails from 'Organisms/product/ProductDetails'

const ProductDetailsTastic = ({ product }) => {
    if (!product) {
        return null
    }

    return (
        <ProductDetails product={product} />
    )
}

ProductDetailsTastic.propTypes = {
    product: PropTypes.object,
}

ProductDetailsTastic.defaultProps = {}

export default connect(productConnector)(ProductDetailsTastic)
