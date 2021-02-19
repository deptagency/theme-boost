import React, { useEffect, useRef, useState, useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import DiscountForm from './Forms/Discount'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const PaymentPanel = ({ app, intl, data, updateHeight, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.placeOrder' })

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [paymentMethods, setPaymentMethods] = useState(null)
    const [paymentMethodType, setPaymentMethodType] = useState(null)
    const [paymentDetailsValid, setPaymentDetailsValid] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState(null)
    const containerElement = useRef(null)

    const renderAdditionalDataComponent = (paymentId, action) => {
        const configuration = {
            ...paymentMethods.configuration,
            onAdditionalDetails: (state) => {
                fetch(`/api/payment/adyen/payment/${paymentId}/additionalDetails`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        details: state.data.details,
                        paymentData: state.data.paymentData,
                    }),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('HTTP status code ' + response.status)
                        }
                        return response.json()
                    })
                    .then((body) => {
                        handleAdyenResult(body.paymentId, body.action, body.resultCode)
                    })
                    .catch((error) => {
                        setPaymentError(error.message)
                    })
            },
        }
        // eslint-disable-next-line no-undef
        const adyenCheckout = new AdyenCheckout(configuration)
        adyenCheckout.createFromAction(action).mount(containerElement.current)
    }

    const handleAdyenResult = useCallback((paymentId, action, resultCode) => { // eslint-disable-line react-hooks/exhaustive-deps
        if (action) {
            switch (action.type) {
            case 'redirect':
                switch (action.method) {
                case 'GET':
                    window.location = action.url
                    return
                case 'POST':
                    const form = document.createElement('form')
                    form.method = 'POST'
                    form.action = action.url
                    Object.entries(action.data).forEach(([key, value]) => {
                        const input = document.createElement('input')
                        input.type = 'hidden'
                        input.name = key
                        input.value = value
                        form.appendChild(input)
                    })
                    document.body.appendChild(form)
                    form.submit()
                    return
                default:
                    throw new Error('Unknown redirect method ' + action.method)
                }
            case 'voucher':
                throw new Error('Voucher action not yet supported')
            default:
                renderAdditionalDataComponent(paymentId, action)
                return
            }
        }

        switch (resultCode) {
        case 'Authorised':
            setPaymentSuccess(true)

            app.getLoader('cart').checkout()
            break
        default:
            throw new Error('Unknown payment result: ' + resultCode)
        }
    })

    const makePayment = useCallback((paymentMethod, browserInfo = {}) => { // eslint-disable-line react-hooks/exhaustive-deps
        setPaymentDetailsValid(false)

        fetch('/api/payment/adyen/payment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentMethod, browserInfo }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP status code ' + response.status)
                }
                return response.json()
            })
            .then((body) => {
                handleAdyenResult(body.paymentId, body.action, body.resultCode)
            })
            .catch((error) => {
                setPaymentError(error.message)
            })
    })

    useEffect(() => {
        fetch('/api/payment/adyen/paymentMethods', { headers: { Accept: 'application/json' } })
            .then((response) => {
                return response.json()
            })
            .then((body) => {
                return setPaymentMethods(body)
            })
    }, [])

    useEffect(() => {
        if (paymentMethods === null || paymentMethodType == null) {
            return
        }

        setPaymentDetailsValid(false)
        setPaymentDetails(null)

        const configuration = {
            ...paymentMethods.configuration,
            onChange: (state) => {
                setPaymentDetailsValid(state.isValid)
                setPaymentDetails(state.data)
            },

            onSubmit: (state) => {
                makePayment(state.data.paymentMethod, state.data.browserInfo)
            },
        }
        // eslint-disable-next-line no-undef
        const adyenCheckout = new AdyenCheckout(configuration)
        adyenCheckout.create(paymentMethodType).mount(containerElement.current)

        updateHeight()

    // }, [paymentMethods, paymentMethodType, makePayment])
    }, [makePayment, paymentMethodType, paymentMethods, updateHeight])

    useEffect(() => {
        if (/*! cart.cart.isComplete() || */ containerElement.current == null) {
            return
        }

        const urlParameters = new URLSearchParams(window.location.search)
        const paymentId = urlParameters.get('adyenPaymentId')
        if (paymentId === null) {
            return
        }

        const payment = data.payments.find((payment) => payment.id === paymentId)
        if (payment === undefined) {
            return
        }

        try {
            handleAdyenResult(paymentId, payment.paymentDetails.adyenAction, payment.paymentDetails.adyenResultCode)
        } catch (error) {
            setPaymentError(error.message)
        }
    }, [data, handleAdyenResult])

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded bg-white'>
                        <div className='px-4 py-5 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-neutral-100'>

                            {paymentSuccess && (
                                <div>Adyen Payment was successful.</div>
                            )}

                            {paymentError && (
                                <div>Error during Adyen payment: {paymentError}</div>
                            )}

                            {!paymentSuccess && !paymentError && (
                                <>
                                    <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                                        <FormattedMessage id={'checkout.paymentMethod'} />
                                    </div>

                                    {paymentMethods?.paymentMethods?.map((paymentMethod) => {
                                        return (
                                            <div key={paymentMethod.type} className='mb-4'>
                                                <button
                                                    className={classnames('btn', {
                                                        'btn-blue': paymentMethod.type !== paymentMethodType,
                                                        'btn-indigo': paymentMethod.type === paymentMethodType,
                                                    })}
                                                    onClick={() => {
                                                        setPaymentMethodType(paymentMethod.type)
                                                    }}
                                                >
                                                    {paymentMethod.name}
                                                </button>
                                            </div>
                                        )
                                    })}

                                    <div ref={containerElement} />
                                    <span>
                                        <button
                                            className='btn btn-blue mt-4'
                                            disabled={!paymentDetailsValid}
                                            onClick={() => {
                                                makePayment(paymentDetails.paymentMethod, paymentDetails.browserInfo)
                                            }}
                                        >
                                            Pay
                                        </button>
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                }

                rightColumn={
                    <>
                        <div className='mb-1 md:mb-4 px-4 py-6 md:py-4 md:shadow-md md:rounded bg-white'>
                            <DiscountForm />
                        </div>

                        <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded bg-white'>
                            <Summary
                                items={data.lineItems}
                                sum={data.sum}
                                shippingMethod={data.shippingMethod}
                                taxed={data.taxed}
                                discountCodes={data.discountCodes}
                                isLoading={isLoading}
                                label={buttonLabel}
                                showVouchers={false}
                            />
                        </div>
                    </>
                }
            />
        </div>
    )
}

PaymentPanel.propTypes = {
    app: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    updateHeight: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(PaymentPanel)
