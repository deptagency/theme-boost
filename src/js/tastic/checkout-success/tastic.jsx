import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'
import emptyEntity from '@frontastic/catwalk/src/js/helper/emptyEntity'

import CheckoutSuccess from 'Molecules/CheckoutSuccess'
import CheckoutError from 'Molecules/CheckoutError'

const CheckoutSuccessTastic = ({ order }) => {
    if (order.isComplete()) {
        return <CheckoutSuccess
            id={order.data.orderId}
            email={order.data.email}
            onClick={() => { return app.getRouter().history.replace('/') }}
                />
    } else if (order.loaded && order.error) {
        return <CheckoutError onClick={() => {
            app.getRouter().replace('Frontastic.Frontend.Master.Checkout.checkout')
        }} />
    } else {
        app.getRouter().history.replace('/')
        return null
    }
}

CheckoutSuccessTastic.defaultProps = {}

CheckoutSuccessTastic.propTypes = {
    order: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState) => {
    let order = null

    if (globalState.app.route.has('order')) {
        order = globalState.cart.orders[globalState.app.route.get('order')] || null
    } else {
        order = globalState.cart.lastOrder
    }

    return {
        order: order || emptyEntity,
    }
})(CheckoutSuccessTastic)
