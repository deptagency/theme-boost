import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsDeliveryFeatures from "../../../patterns/catwalk-frontend/organisms/deliveryFeatures/delivery-features";

class CatwalkDeliveryFeaturesTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsDeliveryFeatures />
        )
    }
}

CatwalkDeliveryFeaturesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkDeliveryFeaturesTastic.defaultProps = {}

export default CatwalkDeliveryFeaturesTastic
