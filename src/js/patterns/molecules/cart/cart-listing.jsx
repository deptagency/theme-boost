import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import { marginTop } from './cart-listing.module.scss'

const MoleculesCartListing = ({ cartItems, outerClassName }) => {
    return (
        <div className={outerClassName}>
            <section>
                <h1 className='c-title-level-3'><FormattedMessage id='cart.myCart' /></h1>
                <div className={marginTop}>
                    <OrganismsBundleListing cartItems={cartItems} />
                </div>
            </section>
            <span className='c-divider c-divider--break o-distance' />
            <section className='o-container o-distance'>
                <h2 className='c-title-level-3'><FormattedMessage id='cart.paymentMethods' /></h2>
                <OrganismsPaymentListingIcons image={''} />
            </section>
            <span className='c-divider c-divider--break o-distance' />
        </div>
    )
}

MoleculesCartListing.propTypes = {
    cartItems: PropTypes.array.isRequired,
    outerClassName: PropTypes.string,
}

export default MoleculesCartListing
