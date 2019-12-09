import React, { Fragment } from 'react'
import OrganismsFeatureListing from '../listings/feature-listing'
import OrganismsExpressDelivery from './express-delivery'

const OrganismsDeliveryFeatures = () => {
    return (
        <Fragment>
            <OrganismsExpressDelivery />
            <OrganismsFeatureListing />
        </Fragment>
    )
}

OrganismsDeliveryFeatures.propTypes = {

}

export default OrganismsDeliveryFeatures
