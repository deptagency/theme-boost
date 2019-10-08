import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import OrganismsCategoryListing from '../../patterns/organisms/listings/product-listing'

class CategoryListingTastic extends Component {
    render () {
        return <OrganismsCategoryListing />
    }
}

CategoryListingTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

CategoryListingTastic.defaultProps = {}

export default CategoryListingTastic
