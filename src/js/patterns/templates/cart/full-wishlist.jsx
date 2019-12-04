import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import OrganismsProduct from '../../organisms/products/product'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

const TemplatesFullWishlist = () => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <section className='o-container o-prevent-space o-distance'>
                <h1 className='c-title-level-3'>
                    <FormattedMessage id='cart.myCart'/>
                </h1>
                <div className='o-grid o-grid--half o-grid--large-forth o-distance'>
                    <OrganismsProduct />
                    <OrganismsProduct />
                    <OrganismsProduct />
                    <OrganismsProduct />
                </div>
            </section>
            <div className='o-prevent-space'>
                <OrganismsFooter />
            </div>
        </Fragment>
    )
}

export default TemplatesFullWishlist
