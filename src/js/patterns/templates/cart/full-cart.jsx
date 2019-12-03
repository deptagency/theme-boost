import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import OrganismsSummary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import OrganismsFooter from '../../organisms/base/foot'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'

const TemplatesFullCart = ({ cartItems, sum, currency }) => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <div className='o-container-medium o-prevent-space o-distance'>
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
                    <Button component='a' href='/checkout/checkout' size='boss' type='primary'>
                        <FormattedMessage id='cart.checkout' />
                    </Button>
                </div>
            </div>
            <div className='o-prevent-space'>
                <OrganismsFooter />
            </div>
        </Fragment>
    )
}

TemplatesFullCart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
}

export default TemplatesFullCart
