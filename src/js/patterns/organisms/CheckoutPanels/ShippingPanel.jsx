import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from '../../atoms/checkbox'

import DiscountForm from './Forms/Discount'
import ShippingForm from './Forms/Shipping'
import BillingForm from './Forms/Billing'

import Summary from '../Cart/FullCart/Summary'
import StickyRightColumn from '../../molecules/Layout/StickyRightColumn'

const ShippingPanel = ({ app, intl, data, countries, goToNextPanel, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextOverview' })
    const billingDetailsLabel = intl.formatMessage({ id: 'checkout.billingDetailsLabel' })

    const isSameAddress = () => {
        return (
            shipping.firstName === billing.firstName &&
            shipping.lastName === billing.lastName &&
            shipping.streetName === billing.streetName &&
            shipping.postalCode === billing.postalCode &&
            shipping.country === billing.country &&
            shipping.state === billing.state
        )
    }

    const [email, setEmail] = useState(data.email)
    const [shipping, setShipping] = useState(data.shippingAddress ? data.shippingAddress : {})
    const [billing, setBilling] = useState(data.billingAddress ? data.billingAddress : {})
    const [isBillingSameAsShipping, setBillingIsSameAsShipping] = useState(isSameAddress())

    const isValid = () => {
        if (isBillingSameAsShipping) {
            return (
                email &&
                shipping.firstName &&
                shipping.lastName &&
                shipping.streetName &&
                shipping.postalCode &&
                shipping.country
            )
        } else {
            return (
                email &&
                shipping.firstName &&
                shipping.lastName &&
                shipping.streetName &&
                shipping.postalCode &&
                shipping.country &&
                billing.firstName &&
                billing.lastName &&
                billing.streetName &&
                billing.postalCode &&
                billing.country
            )
        }
    }

    const updateShippingInformation = () => {
        if (isValid()) {
            app.getLoader('cart')
                .updateCart({
                    account: {
                        email: email,
                    },
                    shipping: {
                        firstName: shipping.firstName,
                        lastName: shipping.lastName,
                        phone: shipping.phone,
                        streetName: shipping.streetName,
                        postalCode: shipping.postalCode,
                        city: shipping.city,
                        country: shipping.country,
                        state: shipping.state,
                    },
                    billing: {
                        firstName: isBillingSameAsShipping ? shipping.firstName : billing.firstName,
                        lastName: isBillingSameAsShipping ? shipping.lastName : billing.lastName,
                        phone: isBillingSameAsShipping ? shipping.phone : billing.phone,
                        streetName: isBillingSameAsShipping ? shipping.streetName : billing.streetName,
                        postalCode: isBillingSameAsShipping ? shipping.postalCode : billing.postalCode,
                        city: isBillingSameAsShipping ? shipping.city : billing.city,
                        country: isBillingSameAsShipping ? shipping.country : billing.country,
                        state: isBillingSameAsShipping ? shipping.state : billing.state,
                    },
                })
                .then(() => {
                    goToNextPanel()
                })
        }
    }

    return (
        <StickyRightColumn
            variant='md:my-4 md:px-4 max-w-960px mx-auto'
            leftColumn={
                <div>
                    <div className='md:shadow-md md:rounded bg-white'>
                        <div className='px-4 py-5 md:px-6 border-t-4 md:border-t-0 border-neutral-100 bg-white'>
                            <ShippingForm
                                intl={intl}
                                countries={countries}
                                defaultEmail={data.email}
                                defaultValues={data.shippingAddress}
                                onSubmit={(data) => {
                                    setEmail(data.email)
                                    setShipping(data)
                                }}
                            />

                            <div className='mt-4 p-4 bg-neutral-200 rounded'>
                                <div className='text-sm text-neutral-900 flex items-center'>
                                    <Checkbox
                                        className='text-xl'
                                        label={billingDetailsLabel}
                                        value={isBillingSameAsShipping}
                                        onClick={() => {
                                            setBillingIsSameAsShipping(!isBillingSameAsShipping)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {!isBillingSameAsShipping && (
                            <div className='px-4 py-5 md:px-6 border-t-4 border-neutral-100'>
                                <BillingForm
                                    intl={intl}
                                    countries={countries}
                                    defaultValues={data.billingAddress}
                                    onSubmit={(data) => {
                                        setBilling(data)
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            }
            rightColumn={
                <>
                    <div className='mb-1 md:mb-4 px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-neutral-100 bg-white'>
                        <DiscountForm />
                    </div>

                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-neutral-100 bg-white'>
                        <Summary buttonLabel={buttonLabel} disabled={!isValid()} onClick={updateShippingInformation} />
                    </div>
                </>
            }
        />
    )
}

ShippingPanel.propTypes = {
    app: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}

export default injectIntl(ShippingPanel)
