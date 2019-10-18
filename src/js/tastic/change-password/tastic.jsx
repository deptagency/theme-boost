import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormPasswordReset from '../../patterns/organisms/form/form-password-reset.jsx'

class ChangePasswordTastic extends Component {
    render () {
        return (
            <OrganismsFormPasswordReset />
        )
    }
}

ChangePasswordTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ChangePasswordTastic.defaultProps = {}

export default ChangePasswordTastic
