import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesRegister from '../../patterns/templates/register'

class UserRegistrationFormTastic extends Component {
    render () {
        return (
            <TemplatesRegister />
        )
    }
}

UserRegistrationFormTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

UserRegistrationFormTastic.defaultProps = {}

export default UserRegistrationFormTastic
