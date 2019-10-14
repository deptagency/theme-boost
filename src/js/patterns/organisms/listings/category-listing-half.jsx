import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsPromobox from '../../molecules/promobox/promobox'

class OrganismsCategoryListingHalf extends Component {
    render () {
        return (
            <div className='o-grid o-grid--small-half'>
                <OrganismsPromobox />
                <OrganismsPromobox />
            </div>
        )
    }
}

OrganismsCategoryListingHalf.propTypes = {}

OrganismsCategoryListingHalf.defaultProps = {}

export default ComponentInjector.return('OrganismsCategoryListingHalf', OrganismsCategoryListingHalf)
