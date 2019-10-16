import React, { Fragment } from 'react'
import deliveryTruck from '../../../../icons/delivery-truck.svg'
import truckSmall from '../../../../icons/truck-small.svg'
import billSmall from '../../../../icons/bill-small.svg'
import packageSmall from '../../../../icons/package-small.svg'

import OrganismsFeatureListing from 'js/patterns/organisms/listings/feature-listing'

const OrganismsDeliveryFeatures = () => {
    return (
        <Fragment>
            <div className='o-block-short margin-12 padding-top--10'>
                <img src={deliveryTruck} alt='delivery' />

                <div className='padding-left--16'>
                    <strong className='u-text-strong'>Expres Lieferung:</strong>
                    <p className='u-text-small'>
                        Bestelle in den nächsten sechs Stunden und du erhälsts deine Lieferung morgen.
                    </p>
                </div>
            </div>
            <OrganismsFeatureListing />
        </Fragment>
    )
}

OrganismsDeliveryFeatures.propTypes = {

}

export default OrganismsDeliveryFeatures
