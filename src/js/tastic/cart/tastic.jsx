import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import DefaultLoader from '../../patterns/molecules/Loaders/DefaultLoader/index'
import Cart from '../../patterns/organisms/Cart'

const CartTastic = ({ cart }) => {
    if (cart.loading) {
        if (!cart.data) {
            return <DefaultLoader />
        } else {
            return <Cart isLoading data={cart.data} />
        }
    }

    if (cart.isComplete()) {
        return <Cart data={cart.data} />
    }
}

CartTastic.defaultProps = {}

CartTastic.propTypes = {
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default tastify({ translate: true, connect: { cart: true } })(CartTastic)
