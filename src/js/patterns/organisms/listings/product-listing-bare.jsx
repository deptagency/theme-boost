import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

import MoleculesProductRow from '../../molecules/products/product-row'
import MoleculesHeading from '../../molecules/headings/heading'

class OrganismsProductListingCart extends Component {
    render () {
        return (
            <div>
                <section className='o-list-bare'>
                    <div className='o-list-bare__item'>
                        <MoleculesProductRow />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <MoleculesProductRow />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <MoleculesProductRow />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <MoleculesProductRow />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsProductListingCart.propTypes = {}

OrganismsProductListingCart.defaultProps = {}

export default ComponentInjector.return('OrganismsProductListingCart', OrganismsProductListingCart)
