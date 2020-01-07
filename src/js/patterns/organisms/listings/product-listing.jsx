import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Product from '../products/product'
import Heading from '../../molecules/headings/heading'

class ProductListing extends Component {
    render () {
        return (
            <div>
                <section className='o-distance o-prevent-space'>
                    <Heading />
                    <div className='o-grid o-grid--large-forth'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </section>
            </div>
        )
    }
}

ProductListing.propTypes = {}

ProductListing.defaultProps = {}

export default ComponentInjector.return('ProductListing', ProductListing)
