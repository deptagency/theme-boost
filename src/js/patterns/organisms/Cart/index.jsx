import React from 'react'
import PropTypes from 'prop-types'

import FullCart from './FullCart'
import EmptyCart from './EmptyCart'

const Cart = ({ cart }) => {
    if (cart.data && cart.data.lineItems.length > 0) {
        const { lineItems, sum, currency } = cart.data

        return <FullCart items={lineItems} sum={sum} currency={currency} />
    } else {
        return <EmptyCart />
    }
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default Cart
