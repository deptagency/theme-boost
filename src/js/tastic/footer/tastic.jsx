import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsFoot from '../../patterns/organisms/base/foot.jsx'

class FooterTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <OrganismsFoot />
        )
    }
}

FooterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

FooterTastic.defaultProps = {}

export default FooterTastic
