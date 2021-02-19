import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Stepper from './Stepper'
import Panels from './Panels'

import OverviewPanel from 'Organisms/CheckoutPanels/OverviewPanel'
import ShippingPanel from 'Organisms/CheckoutPanels/ShippingPanel'
import PaymentPanel from 'Organisms/CheckoutPanels/PaymentPanel'

const CheckoutPanels = ({ app, data, countries, isLoading = false }) => {
    const [current, setCurrent] = useState(0)
    const ts = useRef(null)

    const steps = [
        {
            name: <FormattedMessage id='checkout.shipping' />,
            component: ShippingPanel,
        },
        {
            name: <FormattedMessage id='checkout.overview' />,
            component: OverviewPanel,
        },
        {
            name: <FormattedMessage id='checkout.payment' />,
            component: PaymentPanel 
        },
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
                app={app}
                countries={countries}
                data={data}
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
                isLoading={isLoading}
            />
        </>
    )
}

CheckoutPanels.propTypes = {
    app: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
}

export default CheckoutPanels
