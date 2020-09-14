import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'

import CheckoutError from 'Molecules/CheckoutError'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart, data }) => {
    if (!cart) {
        return <DefaultLoader />
    }

    if (cart.loading) {
        if (!cart.data || !data.countries) {
            return <DefaultLoader />
        } else {
            return (
                <CheckoutPanels
                    isLoading
                    app={app}
                    data={cart.data}
                    countries={data.countries}
                />
            )
        }
    }

    if (cart.isComplete() && data.countries) {
        return (
            <CheckoutPanels
                app={app}
                data={cart.data}
                countries={data.countries}
            />
        )
    } else {
        return <CheckoutError onClick={() => {
            app.getRouter().replace('Frontastic.Frontend.Master.Checkout.checkout')
        }} />
    }
}

CheckoutTastic.defaultProps = {}

CheckoutTastic.propTypes = {
    data: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity),
}

export default tastify({ translate: true, connect: { cart: true } })(CheckoutTastic)
