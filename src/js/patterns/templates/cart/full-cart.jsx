import React from 'react'
import OrganismsProductListingInCart from '../../organisms/listings/product-listing-in-cart'
import OrganismsPaymentListing from '../../organisms/listings/payment-listing'
import OrganismsSummary from '../../organisms/blocks/summary'
import MoleculesButton from '../../molecules/buttons/button'

const TemplatesFullCart = () => {
    return (
        <div>
            <div className='full-cart-content'>
                <OrganismsProductListingInCart />
                <div className='full-cart-payment-list'>
                    <h4>Bezahlarten</h4>

                    <OrganismsPaymentListing />
                </div>

                <OrganismsSummary />

                <p className='u-text-s t-text-quiet full-cart-coupons-info'>
                    Gutscheincodes können Sie im letzten Schritt der Bestellung eingeben.
                </p>

                <MoleculesButton size='full-width' type='primary'>
                    ZUR KASSE
                </MoleculesButton>
            </div>
        </div>
    )
}

export default TemplatesFullCart
