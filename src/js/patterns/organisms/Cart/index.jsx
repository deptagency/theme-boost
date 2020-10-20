import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import FullCart from './FullCart'
import EmptyState, { icons } from 'Organisms/EmptyState'

const Cart = ({ data, isLoading = false }) => {
    if (data && data.lineItems && data.lineItems.length > 0) {
        const { lineItems, sum, currency } = data

        return (
            <FullCart 
                isLoading={isLoading} 
                items={lineItems} 
                sum={sum} 
                currency={currency} 
            />
        )
    } else {
        return (
            <EmptyState
                icon={icons.EMOTION_SAD}
                iconColor='text-neutral-900'
                title={<FormattedMessage id='cart.emptyCart.text' />}
            />
        )
    }
}

Cart.propTypes = {
    cart: PropTypes.object,
}

export default Cart
