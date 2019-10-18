import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsOrderConfirmation from '../../patterns/organisms/orders/order-confirmation.jsx'

class OrderConfirmationTastic extends Component {
    render () {
        const { data: { paymentType } } = this.props

        return (
            <OrganismsOrderConfirmation paymentType={paymentType} />
        )
    }
}

OrderConfirmationTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

OrderConfirmationTastic.defaultProps = {}

export default OrderConfirmationTastic
