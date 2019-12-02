import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import { ReactComponent as WishlistIcon } from 'icons/wishlist-heart.svg'
import OrganismsNewsletterBlock from 'js/patterns/organisms/blocks/newsletter'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsProductSwiper from 'js/patterns/organisms/swiper/product-swiper'
import OrganismsFooter from 'js/patterns/organisms/base/foot'
import MoleculesHeading from 'js/patterns/molecules/headings/heading'

const TemplatesEmptyWishlist = () => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <section className='o-container-small o-distance o-prevent-space'>
                <div className='u-text-center'>
                    <WishlistIcon className='c-icon c-icon--xl t-text-quiet' />
                </div>
                <div className='o-distance-m'>
                    <p className='u-text-center'>
                        <FormattedMessage id='cart.emptyCart'/>
                    </p>
                    <Button size='boss' type='primary' className='o-distance-s'>Jetzt anmelden</Button>
                </div>
            </section>
            <section className='o-container o-distance o-prevent-space'>
                <MoleculesHeading title='Zuletzt angesehen' description='Könnte etwas für deine Wunschliste sein' />
                <OrganismsProductSwiper />
            </section>
            <section className='o-container o-distance o-prevent-space'>
                <OrganismsNewsletterBlock />
            </section>
            <div className='o-prevent-space'>
                <OrganismsFooter />
            </div>
        </Fragment>
    )
}

TemplatesEmptyWishlist.propTypes = {

}

export default TemplatesEmptyWishlist
