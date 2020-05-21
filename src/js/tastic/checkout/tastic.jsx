import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import app from 'frontastic-catwalk/src/js/app/app'
import Entity from 'frontastic-catwalk/src/js/app/entity'

// import FullCartLoader from 'Organisms/Loaders/FullCart'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

const CheckoutTastic = ({ cart, data }) => {
    // if (cart.isComplete()) {
    if (cart.loaded) {
        console.log(cart)

        return (
            <CheckoutPanels
                app={app}
                loading={cart.loading}
                loaded={cart.loaded}
                error={cart.error}
                data={cart.data}
                countries={data.countries}
            />
        )
    } else {
        return ''
    }
/*
    if (cart.loaded) {
        return (
            <CheckoutPanels
                loading={!cart.isComplete()}
                data={cart.data}
            />
        )
    } else {
        console.log('CheckoutTastic :: cart: ', cart, 'Comlete? : ', cart.isComplete())
        return 'Loading/Reloading'
        // return <FullCartLoader />
    } */
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
