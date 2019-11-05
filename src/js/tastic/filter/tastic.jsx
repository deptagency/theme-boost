import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsGuide from '../../patterns/organisms/guides/guide.jsx'

class FilterTastic extends Component {
    render () {
        return (
            <OrganismsGuide />
        )
    }
}

FilterTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

FilterTastic.defaultProps = {}

export default FilterTastic
