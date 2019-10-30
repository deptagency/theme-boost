import React, { Fragment } from 'react'

import MoleculesButton from '../../molecules/buttons/button'
import emptyCart from '../../../../icons/empty_cart.svg'
import OrganismsNewsletterBlock from 'js/patterns/organisms/blocks/newsletter'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsProductSwiper from 'js/patterns/organisms/swiper/product-swiper'
import OrganismsFooter from 'js/patterns/organisms/base/foot'
import MoleculesHeading from 'js/patterns/molecules/headings/heading'

const TemplatesEmptyWishlist = () => {
    return (
        <Fragment>
            <OrganismsHeaderMobile />
            <section className='o-distance o-prevent-space'>
                <img src={emptyCart} alt='Empty cart' className='o-image-center' />
                <div className='o-distance-m'>
                    <p className='u-text-center'>Der Warenkorb ist noch leer.</p>
                    <MoleculesButton size='boss' type='primary' className='o-distance-s'>Jetzt anmelden</MoleculesButton>
                </div>
            </section>
            <section className='o-distance o-prevent-space'>
                <MoleculesHeading title='Zuletzt angesehen' description='Könnte etwas für deine Wunschliste sein' />
                <OrganismsProductSwiper />
            </section>
            <section className='o-distance o-prevent-space'>
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
