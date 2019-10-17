import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsOrder from '../../patterns/organisms/orders/order.jsx'

class CheckOrderTastic extends Component {
    render () {
        const { data: { paymentType } } = this.props

        return (
            <OrganismsOrder paymentType={paymentType} />
        )
    }
}

CheckOrderTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CheckOrderTastic.defaultProps = {}

export default CheckOrderTastic
