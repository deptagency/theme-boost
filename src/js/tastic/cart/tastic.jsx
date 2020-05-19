import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import Cart from 'Organisms/Cart'
import FullCartLoader from 'Organisms/Loaders/FullCart'

const CartTastic = ({ cart }) => {
    if (cart.isComplete()) {
        return <Cart data={cart.data} />
    } else {
        return <FullCartLoader />
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
