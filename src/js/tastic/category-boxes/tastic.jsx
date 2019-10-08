import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsCategoryBoxes from '../../patterns/organisms/listings/category-boxes'

class CategoryBoxesTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <OrganismsCategoryBoxes />
    }
}

CategoryBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CategoryBoxesTastic.defaultProps = {}

export default CategoryBoxesTastic
