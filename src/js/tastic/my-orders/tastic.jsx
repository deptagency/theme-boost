import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import TemplatesMyOrders from '../../patterns/templates/my-account/my-orders'

class MyOrdersTastic extends Component {
  render () {
    return (
        <div className='fit-view'>
            <TemplatesMyOrders />
        </div>
    )
    }
}

MyOrdersTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

MyOrdersTastic.defaultProps = {}

export default MyOrdersTastic
