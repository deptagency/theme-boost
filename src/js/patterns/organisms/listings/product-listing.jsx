import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Product from '../../molecules/product/productTeaser'
import Heading from '../../molecules/headings/heading'

class ProductListing extends Component {
    render() {
        return (
            <div className='flex flex-wrap p-4 -mx-2'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

ProductListing.propTypes = {}

ProductListing.defaultProps = {}

export default ComponentInjector.return('ProductListing', ProductListing)
