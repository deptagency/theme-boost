import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesLogin from '../../patterns/templates/login.jsx'

class LoginTastic extends Component {
    render () {
        return (
            <TemplatesLogin />
        )
    }
}

LoginTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

LoginTastic.defaultProps = {}

export default LoginTastic
