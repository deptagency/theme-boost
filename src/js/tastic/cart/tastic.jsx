import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import Cart from 'Organisms/Cart'

const CartTastic = ({ cart }) => {
    if (cart.loading) {
        if (!cart.data) { return <DefaultLoader /> } else { return <Cart isLoading data={cart.data} /> }
    }

    if (cart.isComplete()) {
        return <Cart data={cart.data} />
    }
}

CartTastic.defaultProps = {}

CartTastic.propTypes = {
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState) => {
    return {
        cart: globalState.cart.cart,
    }
})(CartTastic)
