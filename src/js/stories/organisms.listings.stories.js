import React from 'react'

import OrganismsPromobox from 'js/patterns/molecules/promobox/promobox'
import OrganismsChoice from 'js/patterns/organisms/form/form-choice'
import OrganismsProductListing from 'js/patterns/organisms/listings/product-listing'
import OrganismsProductListingBare from 'js/patterns/organisms/listings/product-listing-bare'
import OrganismsPaymentListingIcons from 'js/patterns/organisms/listings/payment-listing-icons'
import OrganismsPaymentListing from 'js/patterns/organisms/listings/payment-listing'
import OrganismsFeaturebox from 'js/patterns/organisms/featurebox/featurebox'
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

export const productlistingBare = () => {
    return (
        <OrganismsProductListingBare />
    )
}

productlistingBare.story = {
    name: 'Productlisting Bare',
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

export const chiplist = () => {
    return (
        <div className='o-chiplist'>
            <div className='c-chip o-chiplist__item'>
                <span>Blau</span>
                <button className='c-chip__trigger'>
                    <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
            <div className='c-chip o-chiplist__item'>
                <span>Tommy Hilfiger</span>
                <button className='c-chip__trigger'>
                    <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
            <div className='c-chip o-chiplist__item is-active'>
                <span>Größe 46</span>
                <button className='c-chip__trigger'>
                    <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <title>cross</title>
                        <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

chiplist.story = {
    name: 'Chiplist',
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

export const features = () => {
    return (
        <div className='o-grid o-grid--small-half'>
            <OrganismsFeaturebox />
            <OrganismsFeaturebox />
            <OrganismsFeaturebox />
        </div>
    )
}

features.story = {
    name: 'Features',
}
