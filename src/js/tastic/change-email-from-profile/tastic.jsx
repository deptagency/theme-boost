import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsFormMailChange from '../../patterns/templates/my-account/my-email-change'

class ChangeEmailFromProfileTastic extends Component {
    render () {
        return (
            <OrganismsFormMailChange />
        )
    }
}

ChangeEmailFromProfileTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ChangeEmailFromProfileTastic.defaultProps = {}

export default ChangeEmailFromProfileTastic
