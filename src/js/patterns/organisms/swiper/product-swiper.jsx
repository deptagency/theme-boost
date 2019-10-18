import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsProduct from '../products/product'

class OrganismsProductSwiper extends Component {
    render () {
        return (
            <div className='o-swiper o-distance-m'>
                <div className='o-swiper__holder'>
                    <div className='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                    <div className='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' sale='true' oldPrice='32,99 €' newPrice='24,99 €' /></div>
                    <div className='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                    <div className='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                </div>
            </div>
        )
    }
}

OrganismsProductSwiper.propTypes = {}

OrganismsProductSwiper.defaultProps = {}

export default ComponentInjector.return('OrganismsProductSwiper', OrganismsProductSwiper)
