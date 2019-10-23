import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Deativated due to compiler error
// import OrganismsOrder from '../../patterns/organisms/orders/order.jsx'

class CheckOrderTastic extends Component {
    render () {
        const { data: { paymentType } } = this.props

        return (
            // Deativated due to compiler error
            // <OrganismsOrder paymentType={paymentType} />
            null
        )
    }
}

CheckOrderTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CheckOrderTastic.defaultProps = {}

export default CheckOrderTastic
