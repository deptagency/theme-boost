import React, { useEffect, useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'

import PaymentMethod from './Forms/PaymentMethod'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

import Entity from '@frontastic/catwalk/src/js/app/entity'
import Message from '@frontastic/catwalk/src/js/app/message'

const PaymentPanel = ({ app, cart, intl, data, goToPanelIndex, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.pay' })

    const [paymentMethods, setPaymentMethods] = useState(null)
    const [paymentMethodType, setPaymentMethodType] = useState(null)
    const [paymentDetailsValid, setPaymentDetailsValid] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState(null)
    const containerElement = useRef(null)

    const adyenComponentRef = useRef(null)
    const paymentIdRef = useRef(null)

    const context = useSelector((state) => {
        return state.app.context || {}
    })

    /* const isValid = () => {
        if (paymentMethodType === 'scheme') {
            return paymentDetailsValid
        } else {
            return paymentMethodType !== null
        }
    } */

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
                    throw { message: 'Unknown redirect method ' + action.method } // eslint-disable-line no-throw-literal
                }
            case 'voucher':
                throw { message: 'Voucher action not yet supported' } // eslint-disable-line no-throw-literal
            default:
                paymentIdRef.current = paymentId
                adyenComponentRef.current.handleAction(action)
                return
            }
        }

        switch (resultCode) {
        case 'Authorised':
        case 'Received':
            app.getLoader('cart')
                .checkout()
                .catch((error) => {
                    app.getLoader('context').notifyUser(<Message {...error} />, 'error')
                })
            break
        default:
            app.getLoader('context').notifyUser(<Message message={resultCode} />, 'error')
            // throw { message: 'Payment result: ' + resultCode, resultCode: resultCode } // eslint-disable-line no-throw-literal
        }
    }) // eslint-disable-line react-hooks/exhaustive-deps

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
                    throw { message: 'HTTP status code ' + response.status } // eslint-disable-line no-throw-literal
                }
                return response.json()
            })
            .then((body) => {
                handleAdyenResult(body.paymentId, body.action, body.resultCode)
            })
            .catch(error => {
                console.log(error)

                app.getLoader('context').notifyUser(<Message {...error} />, 'error')
            })
    })

    useEffect(() => {
        fetch('/api/payment/adyen/paymentMethods', { headers: { Accept: 'application/json' } })
            .then((response) => {
                return response.json()
            })
            .then((body) => {
                /*
                const pm = []
                const allowedPaymentMethods = ['paypal', 'scheme', 'directEbanking', 'klarna', 'paysafecard', 'giropay', 'klarna_account', 'klarna_paynow']

                body.paymentMethods.forEach(method => {
                    if (allowedPaymentMethods.some(item => item === method.type)) {
                        pm.push(method)
                    }
                })

                body.paymentMethods = pm
                */

                return setPaymentMethods(body)
            })
    }, [context.locale])

    useEffect(() => {
        if (paymentMethods === null || paymentMethodType == null) {
            return
        }

        setPaymentDetailsValid(false)
        setPaymentDetails(null)

        const configuration = {
            ...paymentMethods.configuration,
            // showPayButton: false,
            onChange: (state) => {
                setPaymentDetailsValid(state.isValid)
                setPaymentDetails(state.data)

                console.log('state: ', state)
            },
            onSubmit: (state) => {
                makePayment(state.data.paymentMethod, state.data.browserInfo)
            },
            onAdditionalDetails: (state) => {
                fetch(`/api/payment/adyen/payment/${paymentIdRef.current}/additionalDetails`, {
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
                            throw response
                        }
                        return response.json()
                    })
                    .then((body) => {
                        handleAdyenResult(body.paymentId, body.action, body.resultCode)
                    })
                    .catch((error) => {
                        app.getLoader('context').notifyUser(<Message {...error} />, 'error')
                    })
            },
        }

        // eslint-disable-next-line no-undef
        const adyenCheckout = new AdyenCheckout(configuration)
        adyenComponentRef.current = adyenCheckout.create(paymentMethodType)
        adyenComponentRef.current.mount(containerElement.current)
    }, [paymentMethodType, paymentMethods]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!cart.isComplete() || containerElement.current == null) {
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

        const resultCode = payment.paymentDetails.adyenResultCode
        if (resultCode === 'Authorised' || resultCode === 'Received') {
            app.getLoader('cart')
                .checkout()
                .catch((error) => {
                    app.getLoader('context').notifyUser(<Message {...error} />, 'error')
                })
        } else {
            goToPanelIndex(2)

            app.getLoader('context').notifyUser(<Message message={resultCode} />, 'error')

            /* try {
                handleAdyenResult(paymentId, payment.paymentDetails.adyenAction, payment.paymentDetails.adyenResultCode)
            } catch (error) {
                console.log('Payment result:', error)

                if (error.resultCode && error.resultCode === 'Refused') {
                    app.getLoader('context').notifyUser(<Message {...error} />, 'error')
                }
            } */
        }
    }, [/* handleAdyenResult */]) // eslint-disable-line react-hooks/exhaustive-deps

    /*
    buttonLabel={buttonLabel}
    disabled={!isValid()}
    onClick={() => {
        if (adyenComponentRef.current) {
            adyenComponentRef.current.submit()
        }
    }}
    */
    return (
        <StickyRightColumn
            variant='md:my-4 md:px-4 max-w-960px mx-auto'
            leftColumn={
                <div className='md:shadow-md md:rounded bg-white'>
                    <div className='px-4 py-5 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-neutral-100'>
                        <PaymentMethod
                            paymentMethods={paymentMethods}
                            onSubmit={(paymentMethod) => {
                                setPaymentMethodType(paymentMethod.type)
                            }}
                        />

                        <div className='mt-6' ref={containerElement} />

                        {paymentMethodType === 'scheme' && (
                            <span className='flex'>
                                <button
                                    name={buttonLabel}
                                    className='ml-auto mr-auto btn-pill bg-primary-500 text-white w-32 h-10 text-center focus:outline-none'
                                    disabled={!paymentDetailsValid}
                                    onClick={() => {
                                        makePayment(paymentDetails.paymentMethod, paymentDetails.browserInfo)
                                    }}
                                >
                                    {buttonLabel}
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            }

            rightColumn={
                <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded bg-white'>
                    <Summary
                        isLoading={isLoading}
                    />
                </div>
            }
        />
    )
}

PaymentPanel.propTypes = {
    app: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity),
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    goToPanelIndex: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(PaymentPanel)
