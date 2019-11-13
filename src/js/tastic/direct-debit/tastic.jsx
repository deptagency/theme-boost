import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsTelevisionSepa from '../../patterns/organisms/televisions/television-sepa'

class DirectDebitTastic extends Component {
    render () {
        return (
            <OrganismsTelevisionSepa />
        )
    }
}

DirectDebitTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

DirectDebitTastic.defaultProps = {}

export default DirectDebitTastic
