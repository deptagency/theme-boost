import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'

const CartListing = ({ cartItems, outerClassName }) => {
    return (
        <div className={outerClassName}>
            <section>
                <h1 className='c-title-level-3'><FormattedMessage id='cart.myCart' /></h1>
                <div>
                    <OrganismsBundleListing cartItems={cartItems} />
                </div>
            </section>
            <div className='o-with-sidebar__boundless o-distance'>
                <span className='c-divider c-divider--break' />
            </div>
            <section className='o-container o-distance'>
                <h2 className='c-title-level-3'><FormattedMessage id='cart.paymentMethods' /></h2>
                <OrganismsPaymentListingIcons image={''} />
            </section>
            <div className='o-with-sidebar__boundless o-distance'>
                <span className='c-divider c-divider--break' />
            </div>
        </div>
    )
}

CartListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
    outerClassName: PropTypes.string,
}

export default CartListing
