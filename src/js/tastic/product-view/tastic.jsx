import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import TemplatesDetail from '../../patterns/templates/detail'
import OrganismsProductStage from "../../patterns/organisms/stages/stage-product";
import OrganismsSizeSwiper from "../../patterns/organisms/swiper/size-swiper";
import OrganismsImageColorSwiper from "../../patterns/organisms/swiper/image-color-swiper";
import MoleculesButton from "../../patterns/molecules/buttons/button";
import OrganismsProductView from "../../patterns/organisms/products/product-view";

class ProductViewTastic extends Component {
    render () {
        return (
            <OrganismsProductView />
        )
    }
}

ProductViewTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ProductViewTastic.defaultProps = {}

export default ProductViewTastic
