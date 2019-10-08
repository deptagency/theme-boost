import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

import MoleculesPromobox from '../../molecules/promobox/promobox'

class OrganismsCategoryListing extends Component {
    render () {
        return (
            <div>
                <section className='o-distance'>
                    <div className='o-grid o-grid--medium-third'>
                        <MoleculesPromobox />
                        <MoleculesPromobox />
                        <MoleculesPromobox />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsCategoryListing.propTypes = {}

OrganismsCategoryListing.defaultProps = {}

export default ComponentInjector.return('OrganismsCategoryListing', OrganismsCategoryListing)
