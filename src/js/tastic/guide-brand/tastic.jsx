import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsGuideBrand from '../../patterns/organisms/guides/guide-brand'

class GuideBrandTastic extends Component {
    render () {
        return (
            <OrganismsGuideBrand />
        )
    }
}

GuideBrandTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

GuideBrandTastic.defaultProps = {}

export default GuideBrandTastic
