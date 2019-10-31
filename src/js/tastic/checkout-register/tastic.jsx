import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesCheckoutRegister from '../../patterns/templates/checkout-register'

class CheckoutRegisterTastic extends Component {
    render () {
        return (
            <TemplatesCheckoutRegister />
        )
    }
}

CheckoutRegisterTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CheckoutRegisterTastic.defaultProps = {}

export default CheckoutRegisterTastic
