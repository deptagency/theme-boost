import React from 'react'
import OrganismsPaymentListingIcons from '../../organisms/listings/payment-listing-icons'
import OrganismsSummary from '../../organisms/blocks/summary'
import MoleculesButton from '../../molecules/buttons/button'
import OrganismsProduct from '../../organisms/products/product'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

const TemplatesFullWishlist = () => {
    return (
        <div>
            <OrganismsHeaderMobile />
            <section className='o-container o-prevent-space o-distance'>
                <h1 className='c-title-level-3'>Mein Warenkorb</h1>
                <div className='o-grid o-grid--half o-grid--large-forth o-distance'>
                  <OrganismsProduct />
                  <OrganismsProduct />
                  <OrganismsProduct />
                  <OrganismsProduct />
                </div>
            </section>
            <OrganismsFooter />
        </div>
    )
}

export default TemplatesFullWishlist
