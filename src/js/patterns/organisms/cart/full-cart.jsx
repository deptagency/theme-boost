import React from 'react'
import PropTypes from 'prop-types'

import MoleculesCartListing from '../../molecules/cart/cart-listing'
import MoleculesCartSummary from '../../molecules/cart/cart-summary'

import {
    cartDesktop,
    cartListing,
    cartSummaryDesktop,
} from './cart.module.scss'

const OrganismsFullCart = ({ cartItems, sum }) => {
    return (
        <div className={`${cartDesktop} cartDesktop o-distance-s`}>
            <MoleculesCartListing outerClassName={`${cartListing} cartListing`} cartItems={cartItems} />
            <MoleculesCartSummary outerClassName={`${cartSummaryDesktop} cartSummaryDesktop`} sum={sum} />
        </div>
    )
}

OrganismsFullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default OrganismsFullCart
