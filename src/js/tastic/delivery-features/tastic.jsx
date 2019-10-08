import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsDeliveryFeatures from "../../patterns/organisms/deliveryFeatures/delivery-features";

class DeliveryFeaturesTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsDeliveryFeatures />
        )
    }
}

DeliveryFeaturesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

DeliveryFeaturesTastic.defaultProps = {}

export default DeliveryFeaturesTastic
