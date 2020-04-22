import React, { useState, useRef } from 'react'
import { FormattedMessage } from 'react-intl'

import Stepper from './Stepper'
import Panels from './Panels'

import OverviewPanel from 'Organisms/CheckoutPanels/OverviewPanel'
import ShippingPanel from 'Organisms/CheckoutPanels/ShippingPanel'
import PaymentPanel from 'Organisms/CheckoutPanels/PaymentPanel'

const CheckoutPanels = () => {
    const [current, setCurrent] = useState(0)
    const ts = useRef(null)

    const steps = [
        { name: <FormattedMessage id='checkout.shipping' />, component: ShippingPanel },
        { name: <FormattedMessage id='checkout.payment' />, component: PaymentPanel },
        { name: <FormattedMessage id='checkout.overview' />, component: OverviewPanel },
    ]

    return (
        <>
            <Stepper
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
            <Panels
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
        </>
    )
}

export default CheckoutPanels
