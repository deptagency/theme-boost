import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesMyAddresses from '../../patterns/templates/my-account/my-addresses'

class ProfileTastic extends Component {
    render () {
        return (
            <TemplatesMyAddresses />
        )
    }
}

ProfileTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ProfileTastic.defaultProps = {}

export default ProfileTastic
