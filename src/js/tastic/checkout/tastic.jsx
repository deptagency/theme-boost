import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart }) => {
    if (cart.isComplete()) {
        return <CheckoutPanels data={cart.data} />
    } else {
        return null
    }
}

CheckoutTastic.defaultProps = {}

CheckoutTastic.propTypes = {
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState) => {
    return {
        cart: globalState.cart.cart,
    }
})(CheckoutTastic)
