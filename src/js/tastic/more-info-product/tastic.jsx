import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'
import OrganismsMoreInfoProductMobile from '../../patterns/organisms/products/more-info-mobile.jsx'
import OrganismsMoreInfoProductDesktop from '../../patterns/organisms/products/more-info-desktop.jsx'

const MoreInfoProductTastic = ({ product, variant }) => {
    if (!product || !variant) {
        return null
    }

    return (
        <>
            <OrganismsMoreInfoProductMobile product={product} variant={variant} />
            <OrganismsMoreInfoProductDesktop product={{ ...variant, name: product.name }} />
        </>
    )
}

MoreInfoProductTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
    // productConnector
    product: PropTypes.object,
    variant: PropTypes.object,
}

MoreInfoProductTastic.defaultProps = {}

export default connect(productConnector)(MoreInfoProductTastic)
