import React from 'react'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import OrganismsSummary from '../../organisms/blocks/summary'
import MoleculesButton from '../../molecules/buttons/button'
import OrganismsBundleListing from '../../organisms/listings/bundle-listing'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

const TemplatesFullCart = () => {
    return (
        <div>
            <OrganismsHeaderMobile />
            <section className='o-container o-prevent-space o-distance'>
                <h1 className='c-title-level-3'>Mein Warenkorb</h1>
                <div className='o-distance'>
                    <OrganismsBundleListing />
                </div>
            </section>
            <span className='c-divider c-divider--break o-distance'></span>
            <section className='o-container o-prevent-space o-distance'>
                <h2 className='c-title-level-3'>Bezahlarten</h2>
                <OrganismsPaymentListingIcons />
            </section>
            <span className='c-divider c-divider--break o-distance'></span>
            <section className='o-container o-prevent-space o-distance'>
                <h2 className='c-title-level-3'>Gesamtsumme</h2>
                <div className="o-distance-s">
                    <OrganismsSummary />
                    <p className='o-distance-m u-text-s t-text-quiet'>
                        Gutscheincodes können Sie im letzten Schritt der Bestellung eingeben.
                    </p>
                </div>
            </section>
            <div className='o-container o-prevent-space o-distance'>
                <MoleculesButton size='boss' type='primary'>
                    Zur Kasse
                </MoleculesButton>
            </div>
            <OrganismsFooter />
        </div>
    )
}

export default TemplatesFullCart
