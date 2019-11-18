import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TemplatesFullCart from '../../patterns/templates/cart/full-cart'
// eslint-disable-next-line no-unused-vars
import TemplatesEmptyCart from '../../patterns/templates/cart/empty-cart'
import Entity from 'frontastic-catwalk/src/js/app/entity'

class CartTastic extends Component {
    render () {
        // eslint-disable-next-line no-unused-vars
        const { cart } = this.props

        if (cart.data && cart.data.lineItems.length > 0) {
            const { lineItems, sum, currency } = cart.data

            return (
                <TemplatesFullCart
                    cartItems={lineItems}
                    sum={sum}
                    currency={currency}
                />
            )
        } else {
            return (
                <TemplatesEmptyCart />
            )
        }
    }
}

CartTastic.defaultProps = {}

CartTastic.propTypes = {
    // tastic: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect(
    (globalState, props) => {
        return {
            cart: globalState.cart.cart,
        }
    }
)(CartTastic)
