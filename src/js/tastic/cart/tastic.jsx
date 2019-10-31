import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesFullCart from '../../patterns/templates/cart/full-cart'
// import TemplatesEmptyCart from '../../patterns/templates/cart/empty-cart'

class CartTastic extends Component {
    render () {
        return (
            <TemplatesFullCart />
        )
    }
}

CartTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CartTastic.defaultProps = {}

export default CartTastic
