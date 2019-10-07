import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsCategoryBoxes from '../../patterns/organisms/listings/category-boxes'

class CatwalkCategoryBoxesTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <OrganismsCategoryBoxes />
    }
}

CatwalkCategoryBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkCategoryBoxesTastic.defaultProps = {}

export default CatwalkCategoryBoxesTastic
