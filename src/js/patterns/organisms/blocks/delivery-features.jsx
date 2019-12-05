import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import OrganismsFeatureListing from '../listings/feature-listing'
import { ReactComponent as DeliveryTruck } from '../../../../icons/delivery-truck.svg'

const OrganismsDeliveryFeatures = () => {
    return (
        <Fragment>
            <div className='o-block-short margin-12 padding-top--10'>
                <DeliveryTruck className='c-icon c-icon--l t-text-quiet' />

                <div className='padding-left--16'>
                    <strong className='u-text-strong'><FormattedMessage id='order.deliveryFeatures.title' /></strong>
                    <p className='u-text-small'><FormattedMessage id='order.deliveryFeatures.message' /></p>
                </div>
            </div>
            <OrganismsFeatureListing />
        </Fragment>
    )
}

OrganismsDeliveryFeatures.propTypes = {

}

export default OrganismsDeliveryFeatures
