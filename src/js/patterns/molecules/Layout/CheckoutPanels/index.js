import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Stepper from './Stepper'
import Panels from './Panels'

import Entity from '@frontastic/catwalk/src/js/app/entity'

import OverviewPanel from 'Organisms/CheckoutPanels/OverviewPanel'
import ShippingPanel from 'Organisms/CheckoutPanels/ShippingPanel'
import PaymentPanel from 'Organisms/CheckoutPanels/PaymentPanel'

const CheckoutPanels = ({ app, data, cart, countries, policy, isLoading = false }) => {
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
            component: PaymentPanel,
        },
    ]

    return (
        <div className='fixed-screen-width md:relative-width'>
            <Stepper
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
            <Panels
                app={app}
                cart={cart}
                data={data}
                countries={countries}
                policy={policy}
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
                isLoading={isLoading}
            />
        </div>
    )
}

CheckoutPanels.propTypes = {
    app: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity),
    countries: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    policy: PropTypes.string,
}

export default CheckoutPanels
