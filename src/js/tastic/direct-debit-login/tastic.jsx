import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormSepa from '../../patterns/organisms/form/form-sepa'

class DirectDebitLoginTastic extends Component {
    render () {
        return (
            <OrganismsFormSepa />
        )
    }
}

DirectDebitLoginTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

DirectDebitLoginTastic.defaultProps = {}

export default DirectDebitLoginTastic
