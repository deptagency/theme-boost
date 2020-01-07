import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Promobox from '../../molecules/promobox/promobox'

class CategoryListingHalf extends Component {
    render () {
        return (
            <div className='o-grid o-grid--small-half'>
                <Promobox />
                <Promobox />
            </div>
        )
    }
}

CategoryListingHalf.propTypes = {}

CategoryListingHalf.defaultProps = {}

export default ComponentInjector.return('CategoryListingHalf', CategoryListingHalf)
