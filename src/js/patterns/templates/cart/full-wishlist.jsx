import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import Product from '../../organisms/products/product'
import HeaderMobile from 'js/patterns/organisms/base/header-mobile'
import Footer from 'js/patterns/organisms/base/foot'

const FullWishlist = () => {
    return (
        <Fragment>
            <HeaderMobile />
            <section className='o-container o-prevent-space o-distance'>
                <h1 className='c-title-area'>
                    <FormattedMessage id='cart.myCart' />
                </h1>
                <div className='o-grid o-grid--half o-grid--large-forth o-distance'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
            <div className='o-prevent-space'>
                <Footer />
            </div>
        </Fragment>
    )
}

export default FullWishlist
