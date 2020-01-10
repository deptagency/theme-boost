import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import { ReactComponent as WishlistIcon } from 'icons/wishlist-heart.svg'
import NewsletterBlock from 'js/patterns/organisms/blocks/newsletter'
import HeaderMobile from 'js/patterns/organisms/base/header-mobile'
import ProductSwiper from 'js/patterns/organisms/swiper/product-swiper'
import Footer from 'js/patterns/organisms/base/foot'
import Heading from 'js/patterns/molecules/headings/heading'

const EmptyWishlist = () => {
    return (
        <Fragment>
            <HeaderMobile />
            <div className='c-box u-background-color-default o-distance'>
                <div className='o-container-small'>
                    <div className='u-text-center'>
                        <WishlistIcon className='c-icon c-icon--xl t-text-quiet' />
                    </div>
                    <div className='o-distance-m u-text-center'>
                        <h2 className='c-title-area'><FormattedMessage id='cart.emptyCart.title' /></h2>
                        <p><FormattedMessage id='cart.emptyCart' /></p>
                        <Button size='boss' type='primary' className='o-distance-m'><FormattedMessage id='cart.registerNow' /></Button>
                    </div>
                </div>
            </div>
            <section className='o-container o-distance o-prevent-space'>
                <Heading title='Zuletzt angesehen' description='Könnte etwas für deine Wunschliste sein' />
                <ProductSwiper />
            </section>
            <section className='o-container o-distance o-prevent-space'>
                <NewsletterBlock />
            </section>
            <div className='o-prevent-space'>
                <Footer />
            </div>
        </Fragment>
    )
}

EmptyWishlist.propTypes = {

}

export default EmptyWishlist
