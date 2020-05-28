import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { v4 as uuidv4 } from 'uuid'

import PaymentMethodForm from './Forms/PaymentMethod'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const PaymentPanel = ({ app, intl, data, goToNextPanel, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextOverview' })

    const [payment, setPayment] = useState(data.payments.length ? data.payments[data.payments.length - 1] : null)

    const isValid = () => {
        return payment
    }

    const addPayment = () => {
        if (!data.payments.length) {
            // TODO BE API should accept payment method
            app.getLoader('cart')
                .addPayment({
                    paymentId: uuidv4(),
                })
                .then(() => {
                    goToNextPanel()
                })
                .catch((error) => {
                    console.log('Payment invoice error', error)
                })
        } else {
            goToNextPanel()
        }
    }

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-5 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-gray-100'>
                            <PaymentMethodForm
                                defaultValues={payment}
                                onSubmit={payment => { return setPayment(payment) }}
                            />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                        <Summary
                            sum={data.sum}
                            isLoading={isLoading}
                            label={buttonLabel}
                            disabled={!isValid()}
                            showVouchers={false}
                            onClick={addPayment}
                        />
                    </div>
                }
            />
        </div>
    )
}

PaymentPanel.propTypes = {
    app: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(PaymentPanel)
