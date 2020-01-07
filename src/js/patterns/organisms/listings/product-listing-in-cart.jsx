import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import ProductInCart from '../../molecules/products/product-in-cart'

class ProductListingInCart extends Component {
    render () {
        return (
            <div>
                <section className='o-list-bare'>
                    <div className='o-list-bare__item'>
                        <ProductInCart />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <ProductInCart />
                    </div>
                </section>
            </div>
        )
    }
}

ProductListingInCart.propTypes = {}

ProductListingInCart.defaultProps = {}

export default ComponentInjector.return('ProductListingInCart', ProductListingInCart)
