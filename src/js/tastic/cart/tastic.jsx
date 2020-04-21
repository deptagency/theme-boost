import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import Cart from 'Organisms/Cart'

const CartTastic = ({ cart }) => {
    if (cart.loaded)
        return <Cart data={cart.data} />
    else
        return ''
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
