import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FullCart from '../../../patterns/organisms/cart/full-cart'
import EmptyCart from '../../../patterns/organisms/cart/empty-cart'
import Entity from 'frontastic-catwalk/src/js/app/entity'

class CartTastic extends Component {
    render () {
        const { cart } = this.props

        if (cart.data && cart.data.lineItems.length > 0) {
            const { lineItems, sum, currency } = cart.data

            return <FullCart cartItems={lineItems} sum={sum} currency={currency} />
        } else {
            return <EmptyCart />
        }
    }
}

CartTastic.defaultProps = {}

CartTastic.propTypes = {
    // tastic: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState, props) => {
    return {
        cart: globalState.cart.cart,
    }
})(CartTastic)
