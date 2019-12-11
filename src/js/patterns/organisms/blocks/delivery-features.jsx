import React, { Fragment } from 'react'
// import OrganismsFeatureListing from '../listings/feature-listing'
import OrganismsExpressDelivery from './express-delivery'

// NOTE: this pattern and the tastic (delivery-details/tastic.jsx)
// are most definitely obsolete. *marcel

const OrganismsDeliveryFeatures = () => {
    return (
        <Fragment>
            <OrganismsExpressDelivery />
            {/* <OrganismsFeatureListing /> */}
        </Fragment>
    )
}

OrganismsDeliveryFeatures.propTypes = {}

export default OrganismsDeliveryFeatures
