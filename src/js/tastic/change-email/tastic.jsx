import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormMailChange from '../../patterns/organisms/form/form-mail-change.jsx'

class ChangeEmailTastic extends Component {
    render () {
        return (
            <OrganismsFormMailChange />
        )
    }
}

ChangeEmailTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ChangeEmailTastic.defaultProps = {}

export default ChangeEmailTastic
