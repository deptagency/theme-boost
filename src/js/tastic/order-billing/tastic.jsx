import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesOrderBilling from '../../patterns/templates/order/order-billing'

class OrderBillingTastic extends Component {
    render () {
        return (
            <TemplatesOrderBilling />
        )
    }
}

OrderBillingTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

OrderBillingTastic.defaultProps = {}

export default OrderBillingTastic
