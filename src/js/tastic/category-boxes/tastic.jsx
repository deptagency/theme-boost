import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsCategoryBoxes from '../../patterns/organisms/listings/category-boxes'

class CategoryBoxesTastic extends Component {
    render () {
        return <OrganismsCategoryBoxes {... this.props.data} />
    }
}

CategoryBoxesTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryBoxesTastic.defaultProps = {}

export default CategoryBoxesTastic
