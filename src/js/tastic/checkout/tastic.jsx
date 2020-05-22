import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from 'frontastic-catwalk/src/js/app/app'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart, data }) => {
    if (cart.loaded) {
        return (
            <CheckoutPanels
                app={app}
                data={cart.data}
                countries={data.countries}
            />
        )
    } else {
        return ''
    }
}

CheckoutTastic.propTypes = {
    data: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState) => {
    return {
        cart: globalState.cart.cart,
    }
})(CheckoutTastic)
