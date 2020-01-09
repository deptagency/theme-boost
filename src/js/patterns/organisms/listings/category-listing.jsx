import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Promobox from '../../molecules/promobox/promobox'

class CategoryListing extends Component {
    render () {
        return (
            <div>
                <section className='o-distance'>
                    <div className='o-grid o-grid--medium-third'>
                        <Promobox />
                        <Promobox />
                        <Promobox />
                    </div>
                </section>
            </div>
        )
    }
}

CategoryListing.propTypes = {}

CategoryListing.defaultProps = {}

export default ComponentInjector.return('CategoryListing', CategoryListing)
