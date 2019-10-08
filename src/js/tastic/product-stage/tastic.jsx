import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsProductStage from '../../patterns/organisms/stages/stage-product'

class ProductStageTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsProductStage />
        )
    }
}

ProductStageTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

ProductStageTastic.defaultProps = {}

export default ProductStageTastic
