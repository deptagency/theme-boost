import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Deactivated due to compiler error
// import OrganismsOrderConfirmation from '../../patterns/organisms/orders/order-confirmation.jsx'

class OrderConfirmationTastic extends Component {
    render () {
        const { data: { paymentType } } = this.props

        return (
            // Deactivated due to compiler error
            // <OrganismsOrderConfirmation paymentType={paymentType} />
            null
        )
    }
}

OrderConfirmationTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

OrderConfirmationTastic.defaultProps = {}

export default OrderConfirmationTastic
