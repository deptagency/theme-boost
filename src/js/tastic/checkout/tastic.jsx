import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'

import CheckoutError from 'Molecules/CheckoutError'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart, data }) => {
    if (cart) {
        if (cart.loading) {
            return <DefaultLoader />
        }

        if (cart.loaded) {
            if (cart.data && data.countries) {
                return (
                    <CheckoutPanels
                        app={app}
                        data={cart.data}
                        countries={data.countries}
                    />
                )
            }
        }

        if (cart.error) {
            return <CheckoutError onClick={() => {
                    app.getRouter().replace('Frontastic.Frontend.Master.Checkout.checkout')
            }} />
        }
    } else {
        return ''
    }
}

CheckoutTastic.defaultProps = {}

CheckoutTastic.propTypes = {
    data: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity),
}

export default connect((globalState) => {
    return {
        cart: globalState.cart.cart,
    }
})(CheckoutTastic)
