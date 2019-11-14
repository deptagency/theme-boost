import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import OrganismsBundle from '../bundles/bundle'

class OrganismsBundleListing extends Component {
    render () {
        return (
            <div>
                <section className='o-list-bare'>
                    <div className='o-list-bare__item'>
                        <OrganismsBundle image='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072617_1_medium.jpg' />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <OrganismsBundle image='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073315_1_large.jpg' />
                    </div>
                    <span className='c-divider o-list-bare__item' />
                    <div className='o-list-bare__item'>
                        <OrganismsBundle image='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/085576_1_large.jpg' />
                    </div>
                </section>
            </div>
        )
    }
}

OrganismsBundleListing.propTypes = {}

OrganismsBundleListing.defaultProps = {}

export default ComponentInjector.return('OrganismsBundleListing', OrganismsBundleListing)
