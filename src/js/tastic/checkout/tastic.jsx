import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart }) => {
    return (
        <CheckoutPanels
            loading={cart.loading}
            loaded={cart.loaded}
            error={cart.error}
            data={cart.data}
        />
    )

    if (cart.loaded) {
        return (
            <CheckoutPanels
                loading={!cart.isComplete()}
                data={cart.data}
            />
        )
    } else {
        console.log('CheckoutTastic :: cart: ', cart, 'Comlete? : ',cart.isComplete())
        return 'Loading/Reloading'
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
