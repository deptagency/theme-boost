import React, { Component } from 'react'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import FeatureService from '../../../patterns/organisms/FeatureService'

class FeatureServiceTastic extends Component {
    render () {
        return <FeatureService />
    }
}

FeatureServiceTastic.propTypes = {}

FeatureServiceTastic.defaultProps = {}

export default tastify({ translate: true })(FeatureServiceTastic)
