import React, { useState, useRef } from 'react'
import { FormattedMessage } from 'react-intl'

import Stepper from './Stepper'
import Panels from './Panels'

import OverviewPanel from 'Organisms/CheckoutPanels/OverviewPanel'
import ShippingPanel from 'Organisms/CheckoutPanels/ShippingPanel'
import PaymentPanel from 'Organisms/CheckoutPanels/PaymentPanel'

const CheckoutPanels = ({ data }) => {
    const [current, setCurrent] = useState(0)
    const ts = useRef(null)

    const [checkoutDetails, setCheckoutDetails] = useState({ 
        delivery: {},
        billing: {},
        isBillingSameAsDelivery: true,
        payment: '', 
    })

    const steps = [
        {
            name: <FormattedMessage id='checkout.shipping' />,
            component: ShippingPanel,
            checkoutDetails: checkoutDetails,
            setCheckoutDetails: setCheckoutDetails,
        },
        { 
            name: <FormattedMessage id='checkout.payment' />,
            component: PaymentPanel,
            checkoutDetails: checkoutDetails,
            setCheckoutDetails: setCheckoutDetails,
        },
        {
            name: <FormattedMessage id='checkout.overview' />,
            component: OverviewPanel,
            checkoutDetails: checkoutDetails,
            setCheckoutDetails: setCheckoutDetails,
        },
    ]

    return (
        <>
            <Stepper
                steps={steps}
                current={current}
                setCurrent={setCurrent}
            />
            <Panels
                data={data}
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
        </>
    )
}

export default CheckoutPanels
