import React, { useEffect, useRef, useState, useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import DiscountForm from './Forms/Discount'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

import Entity from '@frontastic/catwalk/src/js/app/entity'
import Message from '@frontastic/catwalk/src/js/app/message'

const PaymentPanel = ({ app, cart, intl, data, updateHeight, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.placeOrder' })

    const [paymentMethods, setPaymentMethods] = useState(null)
    const [paymentMethodType, setPaymentMethodType] = useState(null)
    const [paymentDetailsValid, setPaymentDetailsValid] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState(null)
    const containerElement = useRef(null)

    const renderAdditionalDataComponent = useCallback((paymentId, action) => { // eslint-disable-line react-hooks/exhaustive-deps
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
        adyenCheckout.createFromAction(action).mount(containerElement.current)
    }, [paymentMethods])

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
                renderAdditionalDataComponent(paymentId, action)
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
            throw { message: 'Payment result: ' + resultCode } // eslint-disable-line no-throw-literal
        }
    }, [ renderAdditionalDataComponent ]) // eslint-disable-line react-hooks/exhaustive-deps

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
                console.log('e:', error)

                app.getLoader('context').notifyUser(<Message {...error} />, 'error')
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
    }, [paymentMethodType, paymentMethods, updateHeight]) // eslint-disable-line react-hooks/exhaustive-deps

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

        if (payment.paymentDetails.adyenResultCode === 'Authorised' || payment.paymentDetails.adyenResultCode === 'Received') {
            console.log('render')
            app.getLoader('cart')
                .checkout()
                .catch((error) => {
                    app.getLoader('context').notifyUser(<Message {...error} />, 'error')
                })
        } else {
            try {
                handleAdyenResult(paymentId, payment.paymentDetails.adyenAction, payment.paymentDetails.adyenResultCode)
            } catch (error) {
                console.log('error:', error)
                // app.getLoader('context').notifyUser(<Message {...error} />, 'error')
            }
        }
    }, [handleAdyenResult]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded bg-white'>
                        <div className='px-4 py-5 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-neutral-100'>
                            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                                <FormattedMessage id={'checkout.paymentMethod'} />
                            </div>

                            {paymentMethods?.paymentMethods?.map((paymentMethod) => {
                                return (
                                    <div
                                        key={paymentMethod.type}
                                        className={classnames('mb-4 h-10 btn w-full border border-neutral-400 rounded cursor-pointer flex items-center', {
                                            'bg-primary-500 text-white': paymentMethod.type === paymentMethodType,
                                            'bg-white text-neutral-900': paymentMethod.type !== paymentMethodType,
                                        })}
                                        onClick={() => { setPaymentMethodType(paymentMethod.type) }}
                                    >
                                        {paymentMethod.name}
                                    </div>
                                )
                            })}

                            <div className='my-6' ref={containerElement} />

                            <span className='flex'>
                                <button
                                    name='Pay'
                                    className='ml-auto mr-auto btn-pill bg-primary-500 text-white w-32 h-10 text-center focus:outline-none'
                                    disabled={!paymentDetailsValid}
                                    onClick={() => { makePayment(paymentDetails.paymentMethod, paymentDetails.browserInfo) }}
                                >
                                    <FormattedMessage id={'checkout.pay'} />
                                </button>
                            </span>
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
    cart: PropTypes.instanceOf(Entity),
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    updateHeight: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(PaymentPanel)
