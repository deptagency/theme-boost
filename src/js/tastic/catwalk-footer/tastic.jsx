import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsFoot from '../../patterns/organisms/base/foot.jsx'

class CatwalkFooterTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsFoot />
        )
    }
}

CatwalkFooterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkFooterTastic.defaultProps = {}

export default CatwalkFooterTastic
