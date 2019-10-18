import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormMailChange from '../../patterns/organisms/form/form-mail-change.jsx'

class CreditCardTastic extends Component {
    render () {
        return (
            <OrganismsFormMailChange />
        )
    }
}

CreditCardTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CreditCardTastic.defaultProps = {}

export default CreditCardTastic
