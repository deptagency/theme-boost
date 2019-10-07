import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import deliveryTruck from "../../../../../icons/catwalk-frontend/delivery-truck.svg";
import truckSmall from "../../../../../icons/catwalk-frontend/truck-small.svg";
import billSmall from "../../../../../icons/catwalk-frontend/bill-small.svg";
import packageSmall from "../../../../../icons/catwalk-frontend/package-small.svg";

const DeliveryFeatures = props => {
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

            <div className="delivery-features">
                <div className="c-box">
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={truckSmall} className="c-icon c-icon--s o-block-short__short-item" alt='truck' />
                        Lieferung in 24 Stunden
                    </div>
                </div>
                <div className="c-box">
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={billSmall} className="c-icon c-icon--s o-block-short__short-item" alt='payment' />
                        Kauf auf Rechnung
                    </div>
                </div>
                <div className="c-box">
                    <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <img src={packageSmall} className="c-icon c-icon--s o-block-short__short-item" alt='package' />
                        Kostenloser Versand & Rückversand
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

DeliveryFeatures.propTypes = {

};

export default DeliveryFeatures;