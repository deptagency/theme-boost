import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import OrganismsSummary from '../../organisms/blocks/summary'
import MoleculesButton from '../../molecules/buttons/button'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsHeaderMobile from '../../organisms/base/header-mobile'
import OrganismsFooter from '../../organisms/base/foot'

const TemplatesFullCart = () => {
    // eslint-disable-next-line no-unused-vars
    // const { cartItems } = this.props

    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <div className='o-container-medium o-prevent-space o-distance'>
                <section>
                    <h1 className='c-title-level-3'>Mein Warenkorb</h1>
                    <div className='o-distance'>
                        <OrganismsBundleListing />
                    </div>
                </section>
                <span className='c-divider c-divider--break o-distance' />
                <section className='o-container o-prevent-space o-distance'>
                    <h2 className='c-title-level-3'>Bezahlarten</h2>
                    <OrganismsPaymentListingIcons image={''} />
                </section>
                <span className='c-divider c-divider--break o-distance' />
                <section className='o-container o-prevent-space o-distance'>
                    <h2 className='c-title-level-3'>Gesamtsumme</h2>
                    <div className='o-distance-s'>
                        <OrganismsSummary />
                        <p className='o-distance-m u-text-s t-text-quiet'>
                            Gutscheincodes können Sie im letzten Schritt der Bestellung eingeben.
                        </p>
                    </div>
                </section>
                <div className='o-container o-prevent-space o-distance'>
                    <MoleculesButton component='a' href='/checkout/checkout' size='boss' type='primary'>
                        Zur Kasse
                    </MoleculesButton>
                </div>
            </div>
            <div className='o-prevent-space'>
                <OrganismsFooter />
            </div>
        </Fragment>
    )
}

TemplatesFullCart.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    cartItems: PropTypes.array.isRequired,
}

export default TemplatesFullCart
