import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsFeaturebox from 'js/patterns/organisms/featurebox/featurebox'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsListingFeatures extends Component {
    render () {
        const { className } = this.props
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
