import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesLogin from '../../patterns/templates/checkout-login'

class UserRegistrationOnCheckoutFormTastic extends Component {
    render () {
        return (
            <TemplatesLogin />
        )
    }
}

UserRegistrationOnCheckoutFormTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

UserRegistrationOnCheckoutFormTastic.defaultProps = {}

export default UserRegistrationOnCheckoutFormTastic
