import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from 'Atoms/checkbox'

import DeliveryForm from './Forms/Delivery'
import BillingForm from './Forms/Billing'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const ShippingPanel = ({ intl, data, goToNextPanel, checkoutDetails, setCheckoutDetails }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextPayment' })
    const billingDetailsLabel = intl.formatMessage({ id: 'checkout.billingDetailsLabel' })

    const isValid = () => {
        const { delivery, billing, isBillingSameAsDelivery } = checkoutDetails

        if (isBillingSameAsDelivery) {
            return delivery.name && delivery.surname && delivery.email && delivery.zip && delivery.country
        } else {
            return delivery.name && delivery.surname && delivery.email && delivery.zip && delivery.country &&
                billing.name && billing.surname && billing.email && billing.zip && billing.country
        }
    }

    return (
        <div>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-6 md:px-6 border-t-4 md:border-t-0 border-gray-100'>
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
                            <div className='px-4 py-6 md:px-6 border-t-4 border-gray-100'>
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
                        <Summary sum={data.sum} label={buttonLabel} disabled={!isValid()} showVouchers={false}
                            onClick={() => {
                                if (isValid()) {
                                    goToNextPanel()
                                }
                            }}
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
}

export default injectIntl(ShippingPanel)
