import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsDeliveryFeatures from '../../patterns/organisms/deliveryFeatures/delivery-features.jsx'

class DeliveryFeaturesTastic extends Component {
    render () {
        return (
            <OrganismsDeliveryFeatures />
        )
    }
}

DeliveryFeaturesTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

DeliveryFeaturesTastic.defaultProps = {}

export default DeliveryFeaturesTastic
