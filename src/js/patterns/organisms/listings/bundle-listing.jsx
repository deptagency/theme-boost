import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsBundle from '../bundles/bundle'

class OrganismsBundleListing extends Component {
    render () {
        return (
            <div>
                <section className='o-list-bare'>
                    <div className='o-list-bare__item'>
                        <OrganismsBundle />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <OrganismsBundle />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <OrganismsBundle />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <OrganismsBundle />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsBundleListing.propTypes = {}

OrganismsBundleListing.defaultProps = {}

export default ComponentInjector.return('OrganismsBundleListing', OrganismsBundleListing)
