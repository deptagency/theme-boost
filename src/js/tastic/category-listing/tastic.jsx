import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismsCategoryListing from '../../patterns/organisms/listings/product-listing'

class CategoryListingTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <OrganismsCategoryListing />
    }
}

CategoryListingTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CategoryListingTastic.defaultProps = {}

export default CategoryListingTastic
