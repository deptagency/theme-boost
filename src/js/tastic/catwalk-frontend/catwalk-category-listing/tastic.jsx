import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismsCategoryListing from '../../../patterns/catwalk-frontend/organisms/listings/product-listing'

class CatwalkCategoryListingTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <OrganismsCategoryListing />
    }
}

CatwalkCategoryListingTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkCategoryListingTastic.defaultProps = {}

export default CatwalkCategoryListingTastic
