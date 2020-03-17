import React from 'react'
import PropTypes from 'prop-types'

import CartListing from '../../molecules/cart/cart-listing'
import CartSummary from '../../molecules/cart/cart-summary'

const FullCart = ({ cartItems, sum }) => {
    return (
        <div className='mt-6 md:grid md:gap-10 md:grid-cols-1-340'>
            <CartListing cartItems={cartItems} />

            <div className='mt-3 self-baseline md:sticky md:top-3 md:mt-0'>
                <CartSummary outerClassName='block p-8 bg-gray-200 rounded-lg leading-none' sum={sum} />
            </div>
        </div>
    )
}

FullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default FullCart
