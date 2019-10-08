import React, { Fragment } from 'react'
import deliveryTruck from '../../../../icons/delivery-truck.svg'
import truckSmall from '../../../../icons/truck-small.svg'
import billSmall from '../../../../icons/bill-small.svg'
import packageSmall from '../../../../icons/package-small.svg'

const DeliveryFeatures = () => {
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

            <div className='delivery-features'>
                <div className='c-box'>
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={truckSmall} className='c-icon c-icon--s o-block-short__short-item' alt='truck' />
                        Lieferung in 24 Stunden
                    </div>
                </div>
                <div className='c-box'>
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={billSmall} className='c-icon c-icon--s o-block-short__short-item' alt='payment' />
                        Kauf auf Rechnung
                    </div>
                </div>
                <div className='c-box'>
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={packageSmall} className='c-icon c-icon--s o-block-short__short-item' alt='package' />
                        Kostenloser Versand & Rückversand
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

DeliveryFeatures.propTypes = {

}

export default DeliveryFeatures
