import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsProductView from '../../patterns/organisms/products/product-view'

class ProductViewTastic extends Component {
    render () {
        return (
            <OrganismsProductView />
        )
    }
}

ProductViewTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ProductViewTastic.defaultProps = {}

export default ProductViewTastic
