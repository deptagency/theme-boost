import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Entity from 'frontastic-catwalk/src/js/app/entity'

import FullCartLoader from 'Organisms/Loaders/FullCart'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart, data }) => {
    if (cart.isComplete()) {
        return <CheckoutPanels data={cart.data} countries={data.countries} />
    } else {
        return <FullCartLoader />
    }
}

CheckoutTastic.defaultProps = {}

CheckoutTastic.propTypes = {
    data: PropTypes.object.isRequired,
    cart: PropTypes.instanceOf(Entity).isRequired,
}

export default connect((globalState) => {
    return {
        cart: globalState.cart.cart,
    }
})(CheckoutTastic)
