import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

import MoleculesProduct from '../../molecules/products/product'
import MoleculesHeading from '../../molecules/headings/heading'

class OrganismsProductListing extends Component {
    render () {
        return (
            <div>
                <section className='o-distance o-prevent-space'>
                    <MoleculesHeading />
                    <div className='o-grid o-grid--large-forth'>
                        <MoleculesProduct />
                        <MoleculesProduct />
                        <MoleculesProduct />
                        <MoleculesProduct />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsProductListing.propTypes = {}

OrganismsProductListing.defaultProps = {}

export default ComponentInjector.return('OrganismsProductListing', OrganismsProductListing)
