import React, { Component } from 'react'

import OrganismsFeaturebox from '../featurebox/featurebox'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsListingFeatures extends Component {
    render () {
        return (
            <div className='o-grid o-grid--small-half'>
                <OrganismsFeaturebox />
                <OrganismsFeaturebox />
                <OrganismsFeaturebox />
            </div>
        )
    }
}

OrganismsListingFeatures.propTypes = {

}

OrganismsListingFeatures.defaultProps = {

}

export default ComponentInjector.return('OrganismsListingFeatures', OrganismsListingFeatures)
