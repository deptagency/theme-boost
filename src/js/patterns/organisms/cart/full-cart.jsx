import React from 'react'
import PropTypes from 'prop-types'

import MoleculesCartListing from '../../molecules/cart/cart-listing'
import MoleculesCartSummary from '../../molecules/cart/cart-summary'

const OrganismsFullCart = ({ cartItems, sum }) => {
    return (
        <div className='o-with-sidebar o-distance-s'>
            <div className='o-with-sidebar__main'>
                <MoleculesCartListing cartItems={cartItems} />
            </div>
            <div className='o-with-sidebar__sidebar is-sticky'>
                <MoleculesCartSummary outerClassName='c-box u-background-color-default' sum={sum} />
            </div>
        </div>
    )
}

OrganismsFullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default OrganismsFullCart
