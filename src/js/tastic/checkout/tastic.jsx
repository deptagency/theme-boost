import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'

import DefaultLoader from '../../patterns/molecules/Loaders/DefaultLoader/index'
import CheckoutPanels from '../../patterns/molecules/Layout/CheckoutPanels'

import EmptyState, { icons } from '../../patterns/organisms/EmptyState'
import { injectIntl, intlShape } from 'react-intl'

import { Helmet } from 'react-helmet'

const CheckoutTastic = ({ intl, cart, context, data }) => {
    const [countries, setCountries] = useState([])

    const HelmetHtml = () => (
        <Helmet>
            <link rel="stylesheet" href="https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.21.1/adyen.css" integrity="sha384-KM3xJKzswGJ0xqiPCOHrWUtn0i0LHqEngauvYxSfy0eRtqcImL7ArxjV2HVgeRJ/" crossorigin="anonymous"></link>
            <script src="https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.21.1/adyen.js" integrity="sha384-qgB03MgLihAbvkTmWIkmZxFUxyAqJ4Ozk1My6beIRqit6+8e5HFg8ysln5y5FSw0" crossorigin="anonymous"></script>
        </Helmet>
    )

    useEffect(() => {
        app.getLoader('cart')
            .getShippingMethods()
            .then((response) => {
                let c = []

                /* eslint-disable no-unused-expressions */
                response.shippingMethods?.forEach((method) => {
                    /* eslint-disable no-unused-expressions */
                    method.rates?.forEach((rate) => {
                        /* eslint-disable no-unused-expressions */
                        rate.locations?.forEach((location) => {
                            if (!c.includes(location.country)) {
                                c.push(location.country)
                            }
                        })
                    })
                })

                setCountries(c)
            })
    }, [context.locale])

    if (!cart || countries.length === 0) {
        return (
            <>
                <HelmetHtml />

                <DefaultLoader />
            </>
        )
    }

    if (cart && cart.loaded && cart.data && cart.data.lineItems.length === 0) {
        const title = intl.formatMessage({ id: 'cart.emptyCart.text' })
        const actionLabel = intl.formatMessage({ id: 'checkout.backToShop' })

        return (
            <EmptyState
                icon={icons.EMOTION_SAD}
                iconColor='text-neutral-900'
                title={title}
                action={(e) => {
                    e.preventDefault()
                    app.getRouter().history.replace('/')
                }}
                actionLabel={actionLabel}
            />
        )
    }

    if (cart && cart.loaded && cart.data && cart.data.lineItems && cart.data.lineItems.length > 0) {
        const anyProductOutOfStock = cart.data.lineItems.some((product) => product.variant.isOnStock === false)

        if (anyProductOutOfStock) {
            const title = intl.formatMessage({ id: 'checkout.outOfStock' })
            const actionLabel = intl.formatMessage({ id: 'checkout.backToCart' })

            return (
                <EmptyState
                    icon={icons.EMOTION_SAD}
                    iconColor='text-neutral-900'
                    title={title}
                    action={(e) => {
                        e.preventDefault()
                        app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart')
                    }}
                    actionLabel={actionLabel}
                />
            )
        }
    }

    if (
        context.session.loggedIn &&
        cart &&
        cart.loaded &&
        cart.data &&
        (!cart.data.shippingAddress || !cart.data.shippingAddress.firstName)
    ) {
        cart.data.email = context.session.account.email

        context.session.account.addresses?.forEach((address) => {
            if (address.isDefaultBillingAddress) {
                cart.data.billingAddress = address
            }

            if (address.isDefaultShippingAddress) {
                cart.data.shippingAddress = address
            }
        })

        if (cart.data.billingAddress && !cart.data.shippingAddress) {
            cart.data.shippingAddress = cart.data.billingAddress
        } else if (cart.data.shippingAddress && !cart.data.billingAddress) {
            cart.data.billingAddress = cart.data.shippingAddress
        }
    }

    if (cart.loading) {
        if (!cart.data || !(countries.length > 0)) {
            return (
                <>
                    <HelmetHtml />

                    <DefaultLoader />
                </>
            )
        } else {
            return (
                <>
                    <HelmetHtml />

                    <CheckoutPanels
                        isLoading
                        app={app}
                        cart={cart}
                        data={cart.data}
                        countries={countries}
                        policy={data.policy}
                    />
                </>
            )
        }
    }

    return (
        <>
            <HelmetHtml />

            <CheckoutPanels app={app} cart={cart} data={cart.data} countries={countries} policy={data.policy} />
        </>
    )
}

CheckoutTastic.propTypes = {
    intl: intlShape.isRequired,
    cart: PropTypes.instanceOf(Entity),
    context: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true, connect: { cart: true, context: true } })(injectIntl(CheckoutTastic))
