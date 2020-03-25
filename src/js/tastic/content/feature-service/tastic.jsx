import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FeatureService from 'Organisms/FeatureService'

class FeatureServiceTastic extends Component {
    render () {
        return <FeatureService />
    }
}

FeatureServiceTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

FeatureServiceTastic.defaultProps = {}

export default FeatureServiceTastic
