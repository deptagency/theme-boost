import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormAddress from '../../patterns/organisms/form/form-address.jsx'

class AddAddressTastic extends Component {
    render () {
        return (
            <OrganismsFormAddress />
        )
    }
}

AddAddressTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

AddAddressTastic.defaultProps = {}

export default AddAddressTastic
