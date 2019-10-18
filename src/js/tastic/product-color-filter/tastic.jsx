import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import OrganismsImageColorSwiper from '../../patterns/organisms/swiper/image-color-swiper.jsx'

class ProductColorFilterTastic extends Component {
    render () {
        return (
            <OrganismsImageColorSwiper />
        )
    }
}

ProductColorFilterTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ProductColorFilterTastic.defaultProps = {}

export default ProductColorFilterTastic
