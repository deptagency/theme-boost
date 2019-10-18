import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormAddress from '../../patterns/organisms/form/form-address.jsx'

class AddAddressOnCheckoutTastic extends Component {
    render () {
        return (
            <OrganismsFormAddress />
        )
    }
}

AddAddressOnCheckoutTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

AddAddressOnCheckoutTastic.defaultProps = {}

export default AddAddressOnCheckoutTastic
