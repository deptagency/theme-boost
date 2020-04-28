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
        {
            name: <FormattedMessage id='checkout.shipping' />,
            component: ShippingPanel,
            errorMessage: 'Please enter required contact information',
        },
        { name: <FormattedMessage id='checkout.payment' />,
            component: PaymentPanel,
            errorMessage: 'Please enter required invoice information',
        },
        {
            name: <FormattedMessage id='checkout.overview' />,
            component: OverviewPanel,
            errorMessage: 'Please enter required information',
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
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
        </>
    )
}

export default CheckoutPanels
