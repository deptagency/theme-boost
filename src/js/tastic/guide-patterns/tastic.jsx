import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsGuidePatterns from '../../patterns/organisms/guides/guide-patterns'

class GuidePatternsTastic extends Component {
    render () {
        return (
            <OrganismsGuidePatterns />
        )
    }
}

GuidePatternsTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

GuidePatternsTastic.defaultProps = {}

export default GuidePatternsTastic
