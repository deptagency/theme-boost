import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Stepper from './Stepper'
import Panels from './Panels'

import OverviewPanel from 'Organisms/CheckoutPanels/OverviewPanel'
import ShippingPanel from 'Organisms/CheckoutPanels/ShippingPanel'
import PaymentPanel from 'Organisms/CheckoutPanels/PaymentPanel'

const CheckoutPanels = ({ app, loading, loaded, error, data, countries }) => {
    console.log('aaaa', loading, loaded, error, data, countries)

    const [previousData, setPreviousData] = useState(null)
    const [current, setCurrent] = useState(0)
    const ts = useRef(null)

    const [checkoutDetails, setCheckoutDetails] = useState({
        shipping: {},
        billing: {},
        isBillingSameAsShipping: true,
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

    useEffect(() => {
        if (data !== null) { setPreviousData(data) }
    }, [data])

    console.log('previousData: ', previousData)
    return (
        <>
            <Stepper
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />
            {loading && <div>Loading</div>}
            {error &&
                <>
                    <div>Oops! Error on our side: {error.message}. Sorry!</div>
                    <Panels
                        app={app}
                        loading={loading}
                        loaded={loaded}
                        error={error}
                        data={previousData}
                        countries={countries}
                        steps={steps}
                        current={current}
                        setCurrent={setCurrent}
                        ref={ts}
                    />
                </>}

            {/* // this one is `.isComplete()` */}
            {loaded && !error && <Panels
                app={app}
                loading={loading}
                loaded={loaded}
                error={error}
                countries={countries}
                data={data}
                steps={steps}
                current={current}
                setCurrent={setCurrent}
                ref={ts}
            />}
        </>
    )
}

CheckoutPanels.propTypes = {
    app: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
}

export default CheckoutPanels
