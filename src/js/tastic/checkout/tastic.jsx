import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesLogin from '../../patterns/templates/checkout-login'

class CheckoutTastic extends Component {
    render () {
        return (
            <TemplatesLogin />
        )
    }
}

CheckoutTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CheckoutTastic.defaultProps = {}

export default CheckoutTastic
