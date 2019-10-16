import React from 'react'

import OrganismsPromobox from 'js/patterns/molecules/promobox/promobox'
import OrganismsChoice from 'js/patterns/organisms/form/form-choice'
import OrganismsProductListing from 'js/patterns/organisms/listings/product-listing'
import OrganismsBundleListing from 'js/patterns/organisms/listings/bundle-listing'
import OrganismsPaymentListingIcons from 'js/patterns/organisms/listings/payment-listing-icons'
import OrganismsPaymentListing from 'js/patterns/organisms/listings/payment-listing'
import OrganismsCategoryBoxes from 'js/patterns/organisms/listings/category-boxes'

export default {
    title: '3. Organisms|Listings',
}

export const productlisting = () => {
    return (
        <OrganismsProductListing />
    )
}

productlisting.story = {
    name: 'Productlisting',
}

export const bundlelisting = () => {
    return (
        <OrganismsBundleListing />
    )
}

bundlelisting.story = {
    name: 'Bundle Listing',
}

export const paymentlistingIcons = () => {
    return (
        <OrganismsPaymentListingIcons />
    )
}

paymentlistingIcons.story = {
    name: 'Paymentlisting Icons',
}

export const paymentlisting = () => {
    return (
        <OrganismsPaymentListing />
    )
}

paymentlisting.story = {
    name: 'Paymentlisting',
}

export const categories = () => {
    return (
        <div>
            <section className='o-distance'>
                <div className='o-grid o-grid--medium-third'>
                    <OrganismsPromobox />
                    <OrganismsPromobox />
                    <OrganismsPromobox />
                </div>
            </section>
            <section className='o-distance'>
                <div className='o-grid o-grid--medium-third'>
                    <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                        <div className='o-head-up__item o-head-up__item--middle'>
                            <a href='' title='' className='c-link'>Mütze</a>
                        </div>
                    </div>
                    <div className='c-chip u-aspect-ratio-1x1 o-head-up'>
                        <div className='o-head-up__item o-head-up__item--middle'>
                            <a href='' title='' className='c-link'>Mütze</a>
                        </div>
                    </div>
                    <a href='' title='' className='c-chip u-aspect-ratio-1x1 o-head-up'>
                        <div className='o-head-up__item o-head-up__item--middle'>
                            <span className='c-link'>Mütze</span>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}

categories.story = {
    name: 'Categories',
}

export const categoryBoxes = () => {
    return (
        <OrganismsCategoryBoxes />
    )
}

categoryBoxes.story = {
    name: 'Category Boxes',
}

export const choices = () => {
    return (
        <ul className='o-list-inline'>
            <li className='o-list-inline__item'>
                <OrganismsChoice />
            </li>
            <li className='o-list-inline__item'>
                <OrganismsChoice />
            </li>
            <li className='o-list-inline__item'>
                <OrganismsChoice />
            </li>
            <li className='o-list-inline__item'>
                <OrganismsChoice />
            </li>
        </ul>
    )
}

choices.story = {
    name: 'Choices',
}
