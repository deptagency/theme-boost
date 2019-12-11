import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'
import OrganismsMoreInfoProductMobile from '../../patterns/organisms/products/more-info-mobile.jsx'
import OrganismsMoreInfoProductDesktop from '../../patterns/organisms/products/more-info-desktop.jsx'

const MoreInfoProductTastic = ({ product, variant: propsVariant, route }) => {
    if (!product || !propsVariant) {
        return null
    }

    let variant = product.variants.find(v => { return v.attributes['ean'] === route.parameters.identifier })
    if (!variant) {
        variant = propsVariant
    }

    return (
        <>
            <OrganismsMoreInfoProductMobile product={{ ...variant, name: product.name }} />
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
    route: PropTypes.object,
}

MoreInfoProductTastic.defaultProps = {}

export default connect((globalState, props) => {
    return {
        route: globalState.app.route,
        ...props,
    }
})(connect(productConnector)(MoreInfoProductTastic))
