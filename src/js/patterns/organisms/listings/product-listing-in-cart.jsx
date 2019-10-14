import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import MoleculesProductInCart from '../../molecules/products/product-in-cart'

class OrganismsProductListingInCart extends Component {
    render () {
        return (
            <div>
                <section className='o-list-bare'>
                    <div className='o-list-bare__item'>
                        <MoleculesProductInCart />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <MoleculesProductInCart />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsProductListingInCart.propTypes = {}

OrganismsProductListingInCart.defaultProps = {}

export default ComponentInjector.return('OrganismsProductListingInCart', OrganismsProductListingInCart)
