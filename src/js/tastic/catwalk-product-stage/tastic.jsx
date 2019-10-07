import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsProductStage from '../../patterns/organisms/stages/stage-product'

class CatwalkProductStageTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsProductStage />
        )
    }
}

CatwalkProductStageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkProductStageTastic.defaultProps = {}

export default CatwalkProductStageTastic
