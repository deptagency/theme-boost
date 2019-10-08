import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsMoreInfoProduct from '../../patterns/organisms/moreInfoProduct/more-info'

class MoreInfoProductTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <OrganismsMoreInfoProduct />
        )
    }
}

MoreInfoProductTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

MoreInfoProductTastic.defaultProps = {}

export default MoreInfoProductTastic
