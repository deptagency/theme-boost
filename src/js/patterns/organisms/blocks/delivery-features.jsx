import React, { Fragment } from 'react'
// import FeatureListing from '../listings/feature-listing'
import ExpressDelivery from './express-delivery'

// NOTE: this pattern and the tastic (delivery-details/tastic.jsx)
// are most definitely obsolete. *marcel

const DeliveryFeatures = () => {
    return (
        <Fragment>
            <ExpressDelivery />
            {/* <FeatureListing /> */}
        </Fragment>
    )
}

DeliveryFeatures.propTypes = {}

export default DeliveryFeatures
