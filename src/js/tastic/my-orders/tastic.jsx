import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import emptyEntity from 'frontastic-catwalk/src/js/helper/emptyEntity'

import TemplatesMyOrders from '../../patterns/templates/my-account/my-orders'

class MyOrdersTastic extends Component {
    render () {
        // eslint-disable-next-line no-unused-vars
        const { order } = this.props

        return (
            <TemplatesMyOrders />
        )
    }
}

MyOrdersTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
}

MyOrdersTastic.defaultProps = {}

export default connect(
    (globalState, props) => {
        let order = null

        if (globalState.app.route.has('order')) {
            order = globalState.cart.orders[globalState.app.route.get('order')] || null
        } else {
            order = globalState.cart.lastOrder
        }

        return {
            order: order || emptyEntity,
        }
    }
)(MyOrdersTastic)
