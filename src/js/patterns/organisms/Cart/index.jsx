import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import FullCart from './FullCart'
import EmptyCart from './EmptyCart'

const Cart = ({ data }) => {
    if (data && data.lineItems && data.lineItems.length > 0) {
        const { lineItems, sum, currency } = data

        return <FullCart items={lineItems} sum={sum} currency={currency} />
    } else {
        return <EmptyCart />
    }
}

Cart.propTypes = {
    cart: PropTypes.object,
}

export default tastify()(Cart)
