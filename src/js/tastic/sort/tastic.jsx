import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsGuideSorting from '../../patterns/organisms/guides/guide-sorting'

class SortTastic extends Component {
    render () {
        return (
            <OrganismsGuideSorting />
        )
    }
}

SortTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

SortTastic.defaultProps = {}

export default SortTastic
