import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'

import DiscountForm from './Forms/Discount'
import ShippingMethodForm from './Forms/ShippingMethod'

import Shipping from './Info/Shipping'
import Billing from './Info/Billing'
import Products from './Info/Products'
import OrderButton from './Info/OrderButton'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

import Reference from '@frontastic/catwalk/src/js/component/reference'

const TermsAndAgreements = ({ intl, termsPolicy, cancelationPolicy, privacyPolicy }) => {
    const policyLabel1 = intl.formatMessage({ id: 'checkout.policy1' })
    const policyLabel2 = intl.formatMessage({ id: 'checkout.policy2' })
    const policyLabel3 = intl.formatMessage({ id: 'checkout.policy3' })
    const policyLabel4 = intl.formatMessage({ id: 'checkout.policy4' })
    const termsLabel = intl.formatMessage({ id: 'checkout.terms' })
    const cancelationLabel = intl.formatMessage({ id: 'checkout.cancelation' })
    const privacyLabel = intl.formatMessage({ id: 'checkout.privacy' })

    return (
        <>
            {policyLabel1}
            {termsPolicy ? <span style={{ color: '#3B82F6' }}><Reference reference={termsPolicy}>{termsLabel}</Reference></span> : { termsLabel }}
            {policyLabel2}
            {cancelationPolicy ? <span style={{ color: '#3B82F6' }}><Reference reference={cancelationPolicy}>{cancelationLabel}</Reference></span> : { cancelationLabel }}
            {policyLabel3}
            {privacyPolicy ? <span style={{ color: '#3B82F6' }}><Reference reference={privacyPolicy}>{privacyLabel}</Reference></span> : { privacyLabel }}
            {policyLabel4}
        </>
    )
}
TermsAndAgreements.propTypes = {
    intl: intlShape.isRequired,
    termsPolicy: PropTypes.object,
    privacyPolicy: PropTypes.object,
    cancelationPolicy: PropTypes.object,
}

const OverviewPanel = ({ app, intl, data, countries, goToNextPanel, goToPanelIndex, termsPolicy, cancelationPolicy, privacyPolicy, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextPayment' })

    const availableShippingMethods = useSelector((state) => {
        return state.cart && state.cart.availableShippingMethods && state.cart.availableShippingMethods.data
    })

    const [shippingMethod, setShippingMethod] = useState(data.shippingInfo ? data.shippingInfo : (availableShippingMethods.length === 1 ? availableShippingMethods[0] : null))

    const isValid = () => {
        return shippingMethod
    }

    const onUpdateShipping = (data) => {
        setShippingMethod(data)

        app.getLoader('cart')
            .updateCart({
                shippingMethodName: data.shippingMethodId,
            })
    }

    const onNextClicked = () => {
        if (shippingMethod) {
            app.getLoader('cart')
                .updateCart({
                    shippingMethodName: shippingMethod.shippingMethodId,
                })
                .then(() => {
                    goToNextPanel()
                })
        }
    }

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded bg-white'>
                        <div className='sm:hidden px-4 py-3 md:px-6 border-b-4 border-neutral-100 border-t-4 md:border-t-0'>
                            <OrderButton label={buttonLabel} onClick={onNextClicked} />
                        </div>

                        <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                            <ShippingMethodForm
                                intl={intl}
                                defaultValues={shippingMethod}
                                availableShippingMethods={availableShippingMethods}
                                onSubmit={(data) => { onUpdateShipping(data) }}
                            />
                        </div>

                        <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                            <Products products={data.lineItems} />
                        </div>

                        <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                            {data.shippingAddress &&
                                <Shipping
                                    address={data.shippingAddress}
                                    countries={countries}
                                    onClick={() => { goToPanelIndex(0) }}
                                />
                            }
                        </div>
                        <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                            {data.billingAddress &&
                                <Billing
                                    address={data.billingAddress}
                                    countries={countries}
                                    onClick={() => { goToPanelIndex(0) }}
                                />
                            }
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
                                vouchersLabel={<TermsAndAgreements intl={intl} termsPolicy={termsPolicy} cancelationPolicy={cancelationPolicy} privacyPolicy={privacyPolicy} />}
                                disabled={!isValid()}
                                onClick={onNextClicked}
                            />
                        </div>
                    </>
                }
            />
        </div>
    )
}

OverviewPanel.propTypes = {
    app: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    goToPanelIndex: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    termsPolicy: PropTypes.object,
    privacyPolicy: PropTypes.object,
    cancelationPolicy: PropTypes.object,
}

export default injectIntl(OverviewPanel)
