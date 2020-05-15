import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from 'Atoms/checkbox'

import DeliveryForm from './Forms/Delivery'
import BillingForm from './Forms/Billing'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

// TODO Sanja - This should be added on a tastic level
import app from 'frontastic-catwalk/src/js/app/app'

const ShippingPanel = ({ intl, loading, loaded, error, data, goToNextPanel, checkoutDetails, setCheckoutDetails, updateHeight }) => {
    console.log('*&^', loading, loaded, error, data)

    const buttonLabel = intl.formatMessage({ id: 'checkout.nextPayment' })
    const billingDetailsLabel = intl.formatMessage({ id: 'checkout.billingDetailsLabel' })

    const viewportWidth = useSelector((state, a, b) => {
        console.log('* state.user.notifications *', state.user.notifications)
        return state
    })

    const isValid = () => {
        const { delivery, billing, isBillingSameAsDelivery } = checkoutDetails

        if (isBillingSameAsDelivery) {
            return delivery.name && delivery.surname && delivery.email && delivery.zip && delivery.country
        } else {
            return delivery.name && delivery.surname && delivery.email && delivery.zip && delivery.country &&
                billing.name && billing.surname && billing.email && billing.zip && billing.country
        }
    }

    const updateAddresses = () => {
        if (isValid()) {
            // Add nice loaders here

            app.getLoader('cart')
                .updateCart({
                    billing: {
                        firstName: checkoutDetails.delivery.name,
                        lastName: checkoutDetails.delivery.surname,
                        country: 'DE',
                        postalCode: '12345',
                        streetName: 'bla bla',
                        city: 'cityyyyyyy',
                    },
                    shipping: {
                        firstName: checkoutDetails.delivery.name,
                        lastName: checkoutDetails.delivery.surname,
                        country: 'DE',
                        postalCode: '12345',
                        streetName: 'bla bla',
                        city: 'cityyyyyyy',
                    },
                })
                .then((info) => {
                    console.log('... info ...', info, data)
                    goToNextPanel()
                })
                .catch((error) => {
                    console.log('*** error ...', error)
                })

        }
    }

    if(loading)
        return <div>... Loading ...</div>

    if(error)
        return `Error ${error.message}`

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-5 md:px-6 border-t-4 md:border-t-0 border-gray-100'>
                            <DeliveryForm intl={intl}
                                onSubmit={(data) => {
                                    setCheckoutDetails({
                                        ...checkoutDetails,
                                        delivery: data,
                                    })
                                }}
                            />

                            <div className='mt-4 p-4 bg-gray-200 rounded'>
                                <div className='text-sm text-gray-800 flex items-center'>
                                    <Checkbox
                                        className='text-xl'
                                        label={billingDetailsLabel}
                                        value={checkoutDetails.isBillingSameAsDelivery}
                                        onClick={() => {
                                            updateHeight()

                                            setCheckoutDetails({
                                                ...checkoutDetails,
                                                isBillingSameAsDelivery: !checkoutDetails.isBillingSameAsDelivery,
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {!checkoutDetails.isBillingSameAsDelivery &&
                            <div className='px-4 py-5 md:px-6 border-t-4 border-gray-100'>
                                <BillingForm intl={intl}
                                    onSubmit={(data) => {
                                        setCheckoutDetails({
                                            ...checkoutDetails,
                                            billing: data,
                                        })
                                    }}
                                />
                            </div>
                        }
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-gray-100'>
                        <Summary
                            sum={data.sum}
                            label={buttonLabel}
                            disabled={!isValid()}
                            showVouchers={false}
                            onClick={updateAddresses}
                        />
                    </div>
                }
            />
        </div>
    )
}

ShippingPanel.propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    checkoutDetails: PropTypes.object,
    setCheckoutDetails: PropTypes.func.isRequired,
    updateHeight: PropTypes.func.isRequired,
}

export default injectIntl(ShippingPanel)
