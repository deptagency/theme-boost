import React from 'react'
import PropTypes from 'prop-types'

import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import OrganismsSummary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import { FormattedMessage } from 'react-intl'

const OrganismsFullCart = ({ cartItems, sum, currency }) => {
    return (
        <div className='o-container-medium o-prevent-space o-distance-s'>
            <section>
                <h1 className='c-title-level-3'><FormattedMessage id='cart.myCart' /></h1>
                <div className='o-distance'>
                    <OrganismsBundleListing cartItems={cartItems} currency={currency} />
                </div>
            </section>
            <span className='c-divider c-divider--break o-distance' />
            <section className='o-container o-distance'>
                <h2 className='c-title-level-3'><FormattedMessage id='cart.paymentMethods' /></h2>
                <OrganismsPaymentListingIcons image={''} />
            </section>
            <span className='c-divider c-divider--break o-distance' />
            <section className='o-container o-distance'>
                <h2 className='c-title-level-3'><FormattedMessage id='cart.totalSum' /></h2>
                <div className='o-distance-s'>
                    <OrganismsSummary
                        currency={currency}
                        sum={sum}
                    />
                    <p className='o-distance-m u-text-s t-text-quiet'>
                        <FormattedMessage id='cart.enterVouchers' />
                    </p>
                </div>
            </section>
            <div className='o-container o-distance'>
                <Button size='boss' type='primary'>
                    <FormattedMessage id='cart.checkout' />
                </Button>
            </div>
        </div>
    )
}

OrganismsFullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
}

export default OrganismsFullCart
