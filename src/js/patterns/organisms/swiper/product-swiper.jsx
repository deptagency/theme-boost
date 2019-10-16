import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsProduct from '../products/product'
import MoleculesHeading from '../../molecules/headings/heading'

class OrganismsProductSwiper extends Component {
    render () {
        return (
            <div>
                <section className='o-distance o-prevent-space'>
                    <MoleculesHeading />
                    <div className='o-swiper o-distance-m'>
                        <div className='o-swiper__holder'>
                            <div class='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                            <div class='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' sale='true' oldPrice='32,99 €' newPrice='24,99 €' /></div>
                            <div class='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                            <div class='o-swiper__item'><OrganismsProduct thumbClass='o-swiper__image' /></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsProductSwiper.propTypes = {}

OrganismsProductSwiper.defaultProps = {}

export default ComponentInjector.return('OrganismsProductSwiper', OrganismsProductSwiper)
