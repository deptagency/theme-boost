import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesMyAddressChange from '../../patterns/templates/my-account/my-address-change'

class ChangeAddressFromProfileTastic extends Component {
    render () {
        return (
            <TemplatesMyAddressChange />
        )
    }
}

ChangeAddressFromProfileTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ChangeAddressFromProfileTastic.defaultProps = {}

export default ChangeAddressFromProfileTastic
