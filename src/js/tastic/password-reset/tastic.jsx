import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesPasswortResetAddMail from '../../patterns/templates/passwort-reset/passwort-reset-add-mail'
// import TemplatesNewPassword from '../../patterns/templates/passwort-reset/new-password'
// import TemplatesPasswordResetConfirmation from '../../patterns/templates/passwort-reset/password-reset-confirmation'

class PasswordResetTastic extends Component {
    render () {
        return (
            <TemplatesPasswortResetAddMail />
        )
    }
}

PasswordResetTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

PasswordResetTastic.defaultProps = {}

export default PasswordResetTastic
