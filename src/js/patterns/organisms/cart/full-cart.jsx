import React from 'react'
import PropTypes from 'prop-types'

import CartListing from '../../molecules/cart/cart-listing'
import CartSummary from '../../molecules/cart/cart-summary'

const FullCart = ({ cartItems, sum }) => {
    return (
        <div className='o-with-sidebar o-distance-s'>
            <div className='o-with-sidebar__main'>
                <CartListing cartItems={cartItems} />
            </div>
            <div className='o-with-sidebar__sidebar is-sticky'>
                <CartSummary outerClassName='c-box u-background-color-default' sum={sum} />
            </div>
        </div>
    )
}

FullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default FullCart
