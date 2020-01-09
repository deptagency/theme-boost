import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as DeliveryTruck } from '../../../../icons/delivery-truck.svg'

const ExpressDelivery = () => {
    return (
        <div className='o-block-short o-block-short--medium'>
            <DeliveryTruck className='o-block-short__short-item c-icon c-icon--l t-text-quiet' />

            <div>
                <strong className='u-text-strong'><FormattedMessage id='order.deliveryFeatures.title' /></strong>
                <p className='u-text-small'><FormattedMessage id='order.deliveryFeatures.message' /></p>
            </div>
        </div>
    )
}

ExpressDelivery.propTypes = {

}

export default ExpressDelivery
