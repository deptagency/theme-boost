import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormCreditCard from '../../patterns/organisms/form/form-credit-card.jsx'

class CreditCardTastic extends Component {
    render () {
        return (
            <OrganismsFormCreditCard />
        )
    }
}

CreditCardTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CreditCardTastic.defaultProps = {}

export default CreditCardTastic
