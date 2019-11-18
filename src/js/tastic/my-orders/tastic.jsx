import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import TemplatesMyOrders from '../../patterns/templates/my-account/my-orders'

class MyOrdersTastic extends Component {
    render () {
        return (
            <TemplatesMyOrders />
        )
    }
}

MyOrdersTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

MyOrdersTastic.defaultProps = {}

export default MyOrdersTastic
