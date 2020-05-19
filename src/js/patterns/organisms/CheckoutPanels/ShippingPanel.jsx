import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from 'Atoms/checkbox'

import ShippingForm from './Forms/Shipping'
import BillingForm from './Forms/Billing'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const ShippingPanel = ({ app, intl, loading, loaded, error, data, countries, goToNextPanel, checkoutDetails, setCheckoutDetails, updateHeight }) => {
    console.log('*&^', loading, loaded, error, data)

    const buttonLabel = intl.formatMessage({ id: 'checkout.nextPayment' })
    const billingDetailsLabel = intl.formatMessage({ id: 'checkout.billingDetailsLabel' })

    const viewportWidth = useSelector((state, a, b) => {
        console.log('* state.user.notifications *', state.user.notifications)
        return state
    })

    const isValid = () => {
        const { shipping, billing, isBillingSameAsShipping } = checkoutDetails

        if (isBillingSameAsShipping) {
            return shipping.firstName && shipping.lastName && shipping.email && shipping.streetName && shipping.postalCode && shipping.country
        } else {
            return shipping.firstName && shipping.lastName && shipping.email && shipping.streetName && shipping.postalCode && shipping.country &&
                billing.firstName && billing.lastName && billing.email && billing.streetName && billing.postalCode && billing.country
        }
    }

    const updateAddresses = () => {
        const { shipping, billing, isBillingSameAsShipping } = checkoutDetails
        const { email, ...shippingAddress } = shipping

        if (isValid()) {
            app.getLoader('cart')
                .updateCart({
                    shipping: shippingAddress,
                    billing: isBillingSameAsShipping ? shippingAddress : billing,
                })
                .then((info) => {
                    console.log('... info ...', info, data)
                    goToNextPanel()
                })
                .catch((error) => {
                    console.log('*** error ...', error)
                })

            /*
            app.getLoader('cart')
                .updateCart({
                    shipping: {
                        firstName: checkoutDetails.shipping.firstName,
                        lastName: checkoutDetails.shipping.lastName,
                        country: 'DE',
                        postalCode: '12345',
                        streetName: 'bla bla',
                        city: 'cityyyyyyy',
                    },
                    billing: {
                        firstName: checkoutDetails.shipping.firstName,
                        lastName: checkoutDetails.shipping.lastName,
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
*/
        }
    }

    if (loading) { return <div>... Loading ...</div> }

    if (error) { return `Error ${error.message}` }

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-5 md:px-6 border-t-4 md:border-t-0 border-gray-100'>
                            <ShippingForm intl={intl} countries={countries}
                                onSubmit={(data) => {
                                    setCheckoutDetails({
                                        ...checkoutDetails,
                                        shipping: data,
                                    })
                                }}
                            />

                            <div className='mt-4 p-4 bg-gray-200 rounded'>
                                <div className='text-sm text-gray-800 flex items-center'>
                                    <Checkbox
                                        className='text-xl'
                                        label={billingDetailsLabel}
                                        value={checkoutDetails.isBillingSameAsShipping}
                                        onClick={() => {
                                            updateHeight()

                                            setCheckoutDetails({
                                                ...checkoutDetails,
                                                isBillingSameAsShipping: !checkoutDetails.isBillingSameAsShipping,
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {!checkoutDetails.isBillingSameAsShipping &&
                            <div className='px-4 py-5 md:px-6 border-t-4 border-gray-100'>
                                <BillingForm intl={intl} countries={countries}
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
    app: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    checkoutDetails: PropTypes.object,
    setCheckoutDetails: PropTypes.func.isRequired,
    updateHeight: PropTypes.func.isRequired,
}

export default injectIntl(ShippingPanel)
