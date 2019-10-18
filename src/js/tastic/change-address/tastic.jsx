import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormAddressChange from '../../patterns/organisms/form/form-address-change.jsx'

class ChangeAddressTastic extends Component {
    render () {
        return (
            <OrganismsFormAddressChange />
        )
    }
}

ChangeAddressTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ChangeAddressTastic.defaultProps = {}

export default ChangeAddressTastic
