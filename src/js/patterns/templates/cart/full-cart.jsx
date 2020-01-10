import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import PaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import Summary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import Footer from '../../organisms/base/foot'
import HeaderMobile from '../../organisms/base/header-mobile'
import BundleListing from '../../organisms/listings/bundle-listing'

const TemplatesFullCart = ({ cartItems, sum, currency }) => {
    return (
        <Fragment>
            <HeaderMobile />
            <div className='o-container-medium o-prevent-space o-distance'>
                <section>
                    <h1 className='c-title-area'><FormattedMessage id='cart.myCart' /></h1>
                    <div className='o-distance'>
                        <BundleListing cartItems={cartItems} />
                    </div>
                </section>
                <span className='c-divider c-divider--break o-distance' />
                <section className='o-container o-distance'>
                    <h2 className='c-title-level-3'><FormattedMessage id='cart.paymentMethods' /></h2>
                    <PaymentListingIcons image={''} />
                </section>
                <span className='c-divider c-divider--break o-distance' />
                <section className='o-container o-distance'>
                    <h2 className='c-title-level-3'><FormattedMessage id='cart.totalSum' /></h2>
                    <div className='o-distance-s'>
                        <Summary sum={sum} />
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
                <Footer />
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
