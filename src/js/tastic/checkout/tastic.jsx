import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'

import CheckoutError from 'Molecules/CheckoutError'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        app.getLoader('cart').getShippingMethods().then(response => {
            let c = []

            /* eslint-disable no-unused-expressions */
            response.shippingMethods?.forEach(method => {
                /* eslint-disable no-unused-expressions */
                method.rates?.forEach(rate => {
                    /* eslint-disable no-unused-expressions */
                    rate.locations?.forEach(location => {
                        if (!c.includes(location.country)) {
                            c.push(location.country)
                        }
                    })
                })
            })

            setCountries(c)
        })
    }, [])

    if (!cart) {
        return <DefaultLoader />
    }

    if (cart.loading) {
        if (!cart.data || !(countries.length > 0)) {
            return <DefaultLoader />
        } else {
            return (
                <CheckoutPanels
                    isLoading
                    app={app}
                    data={cart.data}
                    countries={countries}
                />
            )
        }
    }

    if (cart.isComplete() && countries.length > 0) {
        return (
            <CheckoutPanels
                app={app}
                data={cart.data}
                countries={countries}
            />
        )
    } else {
        return <CheckoutError onClick={() => {
            app.getRouter().replace('Frontastic.Frontend.Master.Checkout.checkout')
        }} />
    }
}

CheckoutTastic.propTypes = {
    cart: PropTypes.instanceOf(Entity),
}

export default tastify({ translate: true, connect: { cart: true } })(CheckoutTastic)
